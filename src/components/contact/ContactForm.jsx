import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    try {
      setSending(true);
      e.preventDefault();

      const data = {
        name,
        email,
        message,
      };

      const response = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        data,
        import.meta.env.VITE_EMAILJS_USER_ID
      );

      console.log(response);

      if (response.status !== 200) {
        throw new Error("Failed to send message. Please try again later");
      }

      // Réinitialiser le formulaire et afficher un message de confirmation
      setName("");
      setEmail("");
      setMessage("");
      setSubmitted(true);
    } catch (error) {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="md:w-96">
      {error ? (
        <div className="text-red-400 font-semibold">
          Une erreur s'est produite. Veuillez réessayer plus tard.
        </div>
      ) : submitted ? (
        <div className="text-cyan-600 font-semibold">
          Merci pour votre message. Nous vous répondrons bientôt.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="name">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block  text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
              rows="4"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              disabled={sending}
              className={`
              ${
                sending ? "bg-gray-400 cursor-not-allowed" : "hover:bg-cyan-700"
              }
              bg-secondary hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`}
            >
              Envoyer
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

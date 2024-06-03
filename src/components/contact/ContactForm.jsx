import { useState } from "react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logique pour gérer l'envoi du formulaire
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);

    // Réinitialiser le formulaire et afficher un message de confirmation
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(true);
  };

  return (
    <div className="md:w-96">
      {submitted ? (
        <div className="text-cyan-600 font-semibold">
          Merci pour votre message. Nous vous répondrons bientôt.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="name"
            >
              Nom
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 bg-transparent leading-tight focus:outline-none focus:shadow-outline"
              required
            />
          </div>
          <div className="mb-4">
            <label
              className="block  text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
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
              className="bg-secondary hover:bg-cyan-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Envoyer
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

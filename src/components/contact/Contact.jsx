import map from "@/assets/map.png";
import phone from "@/assets/phone.png";
import email from "@/assets/email.png";
import Info from "./Info";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div id="contact" className="my-36">
      <h1 className="text-white text-4xl font-bold text-start my-8 mb-16">
        NOS INFORMATIONS
      </h1>
      <div className="flex justify-between items-start md:flex-row flex-col">
        <div className="flex flex-col justify-start items-start gap-6">
          <h2 className="text-2xl ">Contact</h2>
          <Info icon={email} email="sales@ronintek.com" />
          <Info icon={phone} text="023804869" />
          <h2 className="text-2xl ">Adresse</h2>
          <Info icon={map} text="El Mohammadia Mall, Alger, Algérie." />
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}

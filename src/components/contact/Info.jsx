export default function Info({ icon, text, email }) {
  return (
    <li className="flex items-center justify-center gap-4">
      <img src={icon} width={40} height={40} alt="icon" />
      {email ? <a href={`mailto:${email}`}>{email}</a> : <p>{text}</p>}
    </li>
  );
}

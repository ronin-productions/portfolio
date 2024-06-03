import logo from "@/assets/logo.png";

export default function Logo() {
  return (
    <a className="flex items-center space-x-2" href="/">
      <img src={logo} alt="logo" width={150} height={150} className="" />
    </a>
  );
}

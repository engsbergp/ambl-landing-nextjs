import Link from "next/link";
import { FaTwitter, FaTree, FaInstagram } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/Ai";

function Footer() {
  return (
    <div className="w-screen flex justify-center align-center p-4 text-3xl text-slate-50 space-x-8">
      <Link href="mailto:muchtodoproductions@gmail.com" target="_blank">
        <AiOutlineMail className="hover:text-slate-300 transition" />
      </Link>
      <Link href="https://twitter.com/philengsberg" target="_blank">
        <FaTwitter className="hover:text-slate-300 transition" />
      </Link>
      <Link href="https://instagram.com/phil_engsberg" target="_blank">
        <FaInstagram className="hover:text-slate-300 transition" />
      </Link>
      <Link href="https://linktr.ee/ambientlandscapes" target="_blank">
        <FaTree className="hover:text-slate-300 transition" />
      </Link>
    </div>
  );
}
export default Footer;

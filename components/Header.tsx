import Link from "next/link";

function Header() {
  return (
    <div className="w-screen flex justify-left align-center p-4">
      <p className="font-normal text-xl text-slate-50 pt-1">
        <Link href="/">Playlyst</Link>
      </p>
      {/* <ul className="flex items-center space-x-8 grow justify-center">
        <li className="header-link">
          <Link href="/about">Whitepaper</Link>
        </li>

        <li className="header-link">
          <Link href="https://linktr.ee/ambientlandscapes">Links</Link>
        </li>
        <li className="header-link">
          <Link href="/support">Support</Link>
        </li>
      </ul> */}
    </div>
  );
}

export default Header;

import Link from "next/link";

export default function NavBar(){
  return (
    <div className="flex justify-center py-4 bg-slate-400">
      <ul className="flex justify-center gap-4">
        <Link href="/">
          <li>Home</li>
        </Link>
        <Link href="/about">
          <li>About</li>
        </Link>
        <Link href="/services">
          <li>Services</li>
        </Link>
      </ul>
    </div>
  );
};

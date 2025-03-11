"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar(){
  const pathName = usePathname();

  if(pathName.includes("dashboard")){
    return <></>
  }
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
        <Link href="/login">
          <li>Login</li>
        </Link>
        <Link href="/dashboard">
          <li>Dashboard</li>
        </Link>
      </ul>
    </div>
  );
};

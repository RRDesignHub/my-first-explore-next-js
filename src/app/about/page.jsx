"use client"
import { useRouter } from "next/navigation"

export default function AboutPage() {
  const router = useRouter();
  const isUser = true;
  const handleAdd = () =>{
    if(isUser){
      router.push("/about/address")
    }else(
      router.push("/")
    )
  }
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <p>About</p>
      <button className="btn" onClick={handleAdd}>Address</button>
    </div>
  )
}

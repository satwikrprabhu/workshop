import Image from "next/image";
import { Inter } from "next/font/google";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen bg-slate-900 flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className="max-w-5xl">
        <h1 className="text-5xl text-center font-bold text-white my-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 py-8">Workshop</h1>
     <Card />
     </div>
    </main>
  );
}

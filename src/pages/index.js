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
     <Card />
     </div>
    </main>
  );
}

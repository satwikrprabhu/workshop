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
        <h1 className="text-5xl text-center font-bold my-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-green-500 py-8">Workshop Attendance</h1>
     <Card />
     </div>
    </main>
  );
}

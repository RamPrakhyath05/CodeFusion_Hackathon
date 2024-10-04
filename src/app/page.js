"use client"
import Navbar from "@/components/navbar";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-gray-100 to-gray-300 overflow-hidden">
        <h1 className="text-7xl font-bold text-gray-800 drop-shadow-lg mb-4">
          GovAgent
        </h1>
        <h2 className="text-4xl text-gray-700 drop-shadow-md mb-8 text-center px-4">
          Process Your Documentation Faster and More Efficiently
        </h2>
        <button
          className="mt-8 px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          onClick={() => router.push("/documents")}
        >
          Select Document(s)
        </button>
      </div>
    </>
  );
}

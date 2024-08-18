import HelpCardForm from "@/components/HelpCardForm ";
import HelpPage from "@/components/HelpPage ";
import Image from "next/image";
import Link from "next/link";
import { MdLibraryAdd } from "react-icons/md";

export default function Home() {
  return (
    <div className="flex flex-col  justify-center items-center">
      <Link href={"/help-page"} className="flex border text-white text-center justify-center text-2xl 
       border-gray-600 min-w-28 bg-gradient-to-t rounded-md from-white to-black my-8 p-2">
      <MdLibraryAdd /> 
      </Link>
    <HelpPage />
    </div>
  );
}

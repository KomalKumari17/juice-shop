import Image from "next/image";
import Category from "../models/Category";
import ConnectDb from "../db/Connect";
import Link from "next/link";
import Juice from "../models/Juice";

export default async function Home() {
  ConnectDb();
  let caliingCat = await  Category.find();
  let callingJuice = await Juice.find();
  return (
    <>
    <div className="flex flex-1 bg-gradient-to-br to-white from-yellow-200 h-[350px] w-full justify-center items-center">
    <Image src="/Images/image (1).png" width={260} height={260}/>

      <div className="flex flex-col">
      <h1 className="text-slate-400 text-sm">Find your Fav Juice here...</h1>
      <div className="flex flex-1 items-center gap-2">
        <input type="search" className="border px-4 py-3 rounded-md" placeholder="Serach Juice...."/>
        <button type="submit" className="bg-yellow-400 hover:bg-yellow-500 rounded-md px-2 py-2 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.5" stroke="currentColor" className="size-6 text-white m-1">
  <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
</svg>
</button>
        </div>
      </div>
    </div>
    <div className="flex flex-1 gap-3 my-5 px-8">
      {caliingCat.map((cat, index) => <Link href="#" key={index} className=" rounded-full shadow-md px-3 py-1 border bg-slate-200 text-slate-600 capitalize text-md hover:bg-slate-600 hover:text-slate-200 ">{cat.catTitle}</Link>)}
    </div>
    <div className="grid grid-cols-5 gap-4 justify-center">
      {callingJuice.map((book, index) => (
        <div className="flex-1">
        <Image src="" width={} height={} className=""/>
        <div className="flex flex-col gap-2">
          <h2>title</h2>
          <h6>category</h6>
          <h4>price</h4>
          <h3>description</h3>
      ))}
        </div>
      </div>
    </div>
    </>
  );
}

"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useState } from "react";

const navLinks = [
  {
    path: "/",
    name: "Inicio"
  },
  {
    path: "/LivroLista",
    name: "Lista de Livros"
  },
  {
    path: "/LivroDados",
    name: "Dados de Livros"
  },
];

function Navbar(){

  const pathname = usePathname() || "/";
const [hoverLink, setHoverLink] = useState(pathname);

  return(
  <div className="mx-auto border w-[1000px] border-green-800/90  mb-12 sticky top-2 z-[100] bg-stone-800/100 backdrop-blur-md">
    <nav className="flex items-center justify-center gap-2 w-full z[100] rounded-lg">
      {
        navLinks.map((item, index) => {
          const isActive = item.path === pathname;

          return (
            <Link key={item.path} href={item.path} className={`px-4 py-2 rounded-full text-sm lg:text-3xl relative no-underline duration-300 ease-in ${isActive ? "text-zinc-200": "text-zinc-400"}`}>
              <span>{item.name}</span>
            </Link>
          )
        })
      }
    </nav>
  </div>
  )
  
}

export default Navbar;


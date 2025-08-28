import Image from "next/image";
import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <>
      <title>Pagina não encontrada!</title>
      <div className="px-4 flex flex-col md:flex-row items-center gap-2">
        <div className="flex flex-col max-w-2xl gap-4">
          <h1 className="text-3xl text-left font-bold text-slate-100 mb-4">
            Página não encontrada
          </h1>
          <p className="text-lg text-slate-200 mb-6 max-w-lg">
            A página que você procura não existe. Volte para a página principal
            e confira os novos posts! Clique no link abaixo para voltar.
          </p>
          <Link
            href="/"
            className="text-white font-medium hover:text-green-500"
          >
            Voltar para a página principal
          </Link>
        </div>
        <div className="h-full w-full hidden md:block mt-10">
          <Image
            src={"/notfound.png"}
            width={720}
            height={720}
            alt="notfound"
            className="object-cover object-center"
          />
        </div>
      </div>
    </>
  );
}

export default NotFound;

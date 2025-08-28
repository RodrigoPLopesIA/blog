"use client";

function error() {
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <h1 className="text-2xl text-left font-extrabold pt-8 md:text-6xl md:text-justify-center">
        Oops! Algo deu errado.
      </h1>
      <p className="mb-4 text-slate-300 italic">
        Recarregue a pagina e se não funcionar tente novamente mais tarde.
      </p>
    </div>
  );
}

export default error;

import Link from "next/link";
import React from "react";

function Header() {
  return (
    <header>
      <nav>
        <div className="max-w-screen-lg mx-auto px-4 py-4">
          <Link href="/">
            <h1 className="text-4xl/normal font-extrabold py-4 sm:text-5xl/normal sm:py-10 md:text-6xl/normal md:py-10">Bug2Fix Blog</h1>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;

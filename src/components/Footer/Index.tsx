import React from "react";

function Footer() {
  return (
    <div className="w-full h-40 py-8 flex items-center justify-center">
      <p className="text-center">
        &copy; {new Date().getFullYear()} Bug2Fix Blog. Todos os direitos
        reservados.
      </p>
    </div>
  );
}

export default Footer;

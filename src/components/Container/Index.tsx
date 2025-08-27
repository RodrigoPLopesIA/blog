import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="text-black bg-slate-100 min-h-screen dark:text-slate-100 dark:bg-black">
      {children}
    </div>
  );
}

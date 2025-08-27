import React from "react";

interface ContainerProps {
  children?: React.ReactNode;
}
export default function Container({ children }: ContainerProps) {
  return (
    <div className="text-slate-900 bg-slate-100 min-h-screen dark:text-slate-100 dark:bg-slate-900">
      {children}
    </div>
  );
}

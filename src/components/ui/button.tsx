//import React from 'react';

export function Button({ children, asChild = false, ...props }: any) {
  const Comp = asChild ? "span" : "button";
  return (
    <Comp
      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-xl hover:bg-blue-700 transition"
      {...props}
    >
      {children}
    </Comp>
  );
}

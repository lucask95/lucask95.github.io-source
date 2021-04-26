import React from "react";

export default function SectionHeader({ children }) {
  return (
    <h3 className='text-4xl mb-8 font-mono px-2 pb-4 border-b-2 border-black'>
      &gt; {children}
    </h3>
  );
}

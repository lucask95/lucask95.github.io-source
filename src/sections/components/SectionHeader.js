import React from "react";

export default function SectionHeader({ children }) {
  return <h3 className='text-4xl mb-8 font-mono px-2'>&gt; {children}</h3>;
}

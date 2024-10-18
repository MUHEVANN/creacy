import React from "react";

function SectionName({ number, children }) {
  return (
    <div>
      <span className="text-white/60">{number}</span>
      <h2 className="text-base">{children}</h2>
    </div>
  );
}

export default SectionName;

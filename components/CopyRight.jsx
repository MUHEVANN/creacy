import React from "react";

function CopyRight() {
  const date = new Date();
  const year = date.getFullYear();
  return <span className="text-white/60">&copy;Creacy{year}</span>;
}

export default CopyRight;

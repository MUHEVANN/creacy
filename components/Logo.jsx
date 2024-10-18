import Image from "next/image";

function Logo() {
  return (
    <div className="flex items-center gap-2  ">
      <Image src="/logo/logo.png" width={40} height={40} alt="logo-creacy" />
      <span className="text-[20px] font-semibold text-white">CREACY</span>
    </div>
  );
}

export default Logo;

import Image from "next/image";
import Logo from "../../../../assests/images/logo.png";

import { HiOutlineMenuAlt4 } from 'react-icons/hi';

export default function Nav() {
  return (
    <div className="w-full h-0 flex items-center justify-between max-md:px-0 max-sm:px-0">
      <div className="flex items-center justify-end">
        <Image className="mb-2 mr-1" src={Logo} width={100} height={100} />
         <p className="max-sm:block max-sm:text-[12px] max-md:block lg:block xl:block">/ mustafakaracuha</p>
      </div>
      <div className="flex item-center justify-center">
      <button className="w-32 h-12 border rounded-full p-3 mr-4 font-semibold max-sm:hidden max-md:hidden lg:block xl:block">Log In</button>
      <button className="w-36 h-12 bg-black text-white rounded-full p-3 font-semibold max-sm:hidden max-md:hidden lg:block xl:block">Get Started</button>
      <button className="lg:hidden xl:hidden md:hidden max-sm:block">
      <HiOutlineMenuAlt4 className="ml-12" size={30}/>
      </button>
      </div>
    </div>
  );
}

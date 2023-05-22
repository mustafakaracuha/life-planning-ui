import { IoSend } from 'react-icons/io5';


export default function Main() {
  return (
    <div className="w-full h-4/4 mb-4 pt-12">
     <p className="font-bold max-sm:text-[40px] text-[65px] text-center">Life Plannig, Making </p>
     <p className="font-bold  max-sm:text-[40px] text-[65px] text-center"> Easy to Turn Dreams a Reality.</p>
     <p className=" max-sm:text-[18px] xl:text-[25px] lg:text-[25px] text-[25px] text-center mt-5 font-light">Get Exclusive offers on pursche of any plans</p>
     <div className=" max-sm:block max-md:flex lg:flex md:flex items-center justify-center mt-12 max-sm:p-4">
    <span className='relative'>
     <IoSend className='absolute left-7 right-0 lg:-top-2 xl:-top-2 max-sm:top-4 max-md:-top-2 md:-top-2 bottom-0 -rotate-45'/>
    </span>
     <input className=" lg:w-96 xl:w-96 max-sm:w-full max-md:w-96 h-12 mr-5 rounded-full border border-black text-black pl-14 placeholder:font-semibold max-sm:mb-5" placeholder="Your Email"/>
     <button className="lg:w-32 xl:w-32 max-sm:w-full h-12 bg-black flex items-center justify-center text-white rounded-full p-3 font-semibold transition-all duration-200 active:scale-105">Sign Up</button>
     </div>
    </div>
  )
}

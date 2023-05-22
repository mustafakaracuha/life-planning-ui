import { data } from "../../../Data/FooterData";
import { FiArrowRight } from 'react-icons/fi';

export default function Footer() {
  return (
    <div className="w-full h-4/4">
      <div className="w-full h-4/4 flex items-center max-sm:justify-center max-md:justify-center justify-between max-sm:px-0 px-20 mt-7">
        <p className="text-[27px] max-sm:mt-5 max-md:mt-5 font-semibold max-sm:text-center">
          Featured Plans
        </p>
        <p className="text-[19px] font-light xl:block lg:block max-sm:hidden sm:hidden md:block">
          Expoler All
        </p>
      </div>
      <div className="w-full h-full grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 max-sm:grid-cols-1 gap-x-10 gap-y-10 xl:px-20 lg:px-20 pt-6">
        {data.map((x, index) => (
          <div
            style={{background: x.background}}
            className="max-sm:w-full max-md:w-full w-80 h-72 grid-cols-1 rounded-2xl p-7 transition-all duration-300 hover:shadow-xl hover:shadow-gray-300 hover:-translate-y-5">
            <p className=" font-semibold text-gray-500">{x.head}</p>
            <p className=" font-semibold text-2xl text-black mt-3" style={ x.background === "#000" ? {color: "white"} : {}}>{x.title}</p>
            <p className=" font-sm text-sm text-black mt-3" style={ x.background === "#000" ? {color: "gray"} : {}}>{x.Description}</p>
            <hr className="mt-9" style={ x.background === "#000" ? {borderColor: "#ffffff2e"} : {borderColor:"#00000024"}}/>
            <p className=" text-sm font-medium text-gray-500 mt-5" style={ x.background === "#ffffff2e" ? {color: "white"} : {}}>{x.year}</p>
            <div className="w-full flex items-center justify-between">
            <p className=" text-2xl font-bold text-gray-500 mt-2" style={ x.background === "#000" ? {color: "white"} : {color:"black"}}>{x.percentage}</p>
             <button  className="w-8 h-8 bg-black rounded-md flex items-center justify-center" style={ x.background === "#000" ? {background: "white", color:"black"} : {color:"white"}}>
              <FiArrowRight size={20}/>
             </button>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full xl:px-20 lg:px-20">
      <hr className="mt-9" style={{border: "1.5px solid #00000024"}}/>
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center justify-center mt-7 mb-7">
          <p>Terms Policy</p>
          <p className="ml-5">·</p>
          <p className="ml-5">Customer Story</p>
        </div>
        <button className="w-12 h-10 border border-black flex items-center justify-center rounded-full">
        <FiArrowRight size={20}/>
        </button>
      </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import HorizontalLine from '../horizontalline/HorizontalLine';

const FeaturedAcademyComponent = ({ image, text }) => {
  return (
    <div className="bg-white p-4 m-2 rounded-[10%] flex flex-col items-center w-full relative">
      <div className="h-[200px] w-full relative overflow-hidden rounded-[10%]">
        <Image src={image} alt="Small Card Image" className="w-full h-full" fill={true} />
        <div className="absolute inset-0 flex items-center justify-center">
          <img src="" alt="Overlay Image" className="top-4 left-6  z-10" />
        </div>
      </div>
      

      <div className="w-full mt-4">
        <p className="font-bold text-lg mb-1">All INDIA Kyokush, New Town, Kolkata</p>
        <p>Karate</p>
        <p>Dum Dum, Kolkata, West Bengal</p>
      </div>
      <HorizontalLine color="red" />
      <div className="flex items-center justify-between w-full mt-2">
        <div>
          <p className="text-sm">coach</p>
          <p className="text-sm">courts</p>
          <p className="text-sm">courts</p>
          <p className="text-sm">couch</p>
        </div>
        <div className="flex items-center">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2">Call</button>
          <button className="px-4 py-2 bg-green-500 text-white rounded-md">WhatsApp</button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedAcademyComponent;

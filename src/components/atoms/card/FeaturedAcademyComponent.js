import Image from "next/image";
import HorizontalLine from '../horizontalline/HorizontalLine';
import Heart from "../heart/Heart";

const FeaturedAcademyComponent = ({ image, text }) => {
  return (
    <div className="bg-white m-2 rounded-3xl flex flex-col items-center w-full relative">
      <div className="h-[200px] w-full relative overflow-hidden rounded-3xl">
        <Image src={image} alt="Small Card Image" className=' object-fit: "cover" w-full h-full' fill={true} />
        <div className="top-4 left-4 z-10 absolute w-full ">
          <Image src='/assets/image 2.png' height={60} width={60} alt="Overlay Image" className="rounded-full" />

        </div>
      </div>
      

      <div className="w-full p-4">
        <p className="font-bold text-lg mb-1">All INDIA Kyokush, New Town, Kolkata</p>
        <p>Karate</p>
        <p>Dum Dum, Kolkata, West Bengal</p>
      </div>
      {/* <HorizontalLine color="red" /> */}
      <div className="flex items-center justify-between w-full p-4">
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

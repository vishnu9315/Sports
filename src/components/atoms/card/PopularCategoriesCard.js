import Image from "next/image";

const PopularCategoriesCard = ({ image, text }) => {
  return (
    <div className="bg-white m-2 rounded-md flex items-center justify-center flex-col p-6">
      <Image src={image} alt="Small Card Image" height = {100} width = {100} className="mb-2" />
      <p className="text-sm font-semibold p-4">{text}</p>
    </div>
  );
};

export default PopularCategoriesCard;
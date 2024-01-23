

const PopularCategoriesCard = ({ image, text }) => {
  return (
    <div className="bg-white p-2 m-2 rounded-md flex items-center justify-center flex-col">
      <img src={image} alt="Small Card Image" className="w-full h-[150px] mb-2" />
      <p className="text-sm">{text}</p>
    </div>
  );
};

export default PopularCategoriesCard;
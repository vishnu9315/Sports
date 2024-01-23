import Card from '../atoms/card/PopularCategoriesCard'

const CardComponent = () => {
    const sports = [
      { text: "Cricket", image: "path" },
      { text: "Football", image: "path_to_football_image.jpg" },
      { text: "Badminton", image: "path_to_badminton_image.jpg" },
      { text: "Badminton", image: "path_to_badminton_image.jpg" },
      { text: "Badminton", image: "path_to_badminton_image.jpg" },
      { text: "Badminton", image: "path_to_badminton_image.jpg" },
      { text: "Badminton", image: "path_to_badminton_image.jpg" },
    ];
  
    return (
      <div className="flex flex-row justify-between mt-[30px] space-x-2">
        {sports.map((sport, index) => (
          <Card key={index} text={sport.text} image={sport.image} />
        ))}
      </div>
    );
  };
  
  export default CardComponent;
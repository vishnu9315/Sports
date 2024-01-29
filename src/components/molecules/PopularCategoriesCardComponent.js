import Card from '../atoms/card/PopularCategoriesCard'

const CardComponent = () => {
    const sports = [
      { text: "Cricket", image: "/assets/cricket.png" },
      { text: "Football", image: "/assets/football.png" },
      { text: "Chess", image: "/assets/chess.png" },
      { text: "Karate", image: "/assets/karate.png" },
      { text: "Badminton", image: "/assets/badminton.png" },
      { text: "Swimming", image: "/assets/swimming.png" },
      { text: "Table-tennis", image: "/assets/table-tennis.png" },
      { text: "Shooting", image: "/assets/shooting.png" }
    ];
  
    return (
      <div className='flex flex-col items-center'>
      
        <h1 className="font-bold mt-6 text-[30px]">Popular <span className="text-red-500">Categories</span></h1>
        <div className="flex flex-wrap flex-row justify-between mt-[30px] space-x-2">
        {sports.map((sport, index) => (
          <Card key={index} text={sport.text} image={sport.image} />
        ))}
      </div>
      </div>
    );
  };
  
  export default CardComponent;
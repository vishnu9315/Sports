import Button from "@/components/atoms/button/Button";
import Card from '../components/atoms/Card'
import CardComponent from "../components/molecules/PopularCategoriesCardComponent";
import FeauturedAcademies from '../components/molecules/FeauturedAcadamies'
import PopularCities from '../components/molecules/PopularCities'
import PopularAcademies from '../components/molecules/PopularAcademies'
import UpcomingEvents from '../components/molecules/UpcomingEvents'

export default function Home() {
  return (
    <>
    <main className="flex min-h-screen flex-col items-center bg-[#f2e8f0] p-24 max-w-screen">
      <div className="text-center w-full">
        <h1 className="text-3xl font-bold mb-4">
          Discover the best sports academies & events <span className="text-red-500">in your city </span>
        </h1>
        <div className="flex items-center justify-center space-x-2 mt-2">
          <select className="p-2 text-lg w-1/6">
            <option value="academies">Academies</option>
            <option value="events">Events</option>
          </select>
          <input
            type="text"
            className="p-2 text-lg border border-gray-300 h-10 w-2/3"
            placeholder="Search..."
          />
          <Button label = "Search" />
        </div>
      </div>

      {/* <Card /> */}
      <div className="flex flex-row justify-between mt-[50px] w-full ">
      <div className="bg-blue-200 p-4 mr-4 flex-grow w-1/2 h-[300px] flex justify-center flex-col rounded-xl">
        {/* First card with more width */}
        <h3 className="text-xl font-bold mb-2">Best Badminton</h3>
        <p>Academies in Your area.</p>
      </div>
        <div className='flex flex-row justify-between'>
        <div className="bg-green-200 p-4 w-1/4 flex-grow mr-2 rounded-xl">
        {/* Other cards with regular width */}
        <h3 className="text-xl font-bold mb-2">Card 2</h3>
        <p>Shorter card content.</p>
      </div>
      <div className="bg-yellow-200 p-4 w-1/4 flex-grow mr-2 rounded-xl">
        <h3 className="text-xl font-bold mb-2">Card 3</h3>
        <p>Another shorter card content.</p>
      </div>
      <div className="bg-yellow-200 p-4 w-1/4 flex-grow mr-2 rounded-xl">
        <h3 className="text-xl font-bold mb-2">Card 4</h3>
        <p>Yet another shorter card content.</p>
      </div>
        </div>
    </div>
    <h1 className="font-bold mt-6 text-[30px]">Popular <span className="text-red-500">Categories</span></h1>
    <CardComponent />
    
    </main>
    <FeauturedAcademies />
    <PopularCities />
    <PopularAcademies />
    <UpcomingEvents />
    </>
  );
}

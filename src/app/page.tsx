import Card from '../components/atoms/Card'
import PopularCategoriesCardComponent from "../components/molecules/PopularCategoriesCardComponent";
import {FeauturedAcademies, PopularCities,PopularAcademies,UpcomingEvents,PopularPersonalities} from '../components/molecules/index'
import DiscoverComponent from '../components/atoms/card/DiscoverComponent'
import { Button, DownloadAppComponent } from '../components/atoms/index'


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
            <Button label="Search" onClick={"Clikced"}/>
          </div>
        </div>

        {/* <Card /> */}

        <DiscoverComponent />
        
        
        <PopularCategoriesCardComponent />

      </main>
      <FeauturedAcademies />
      <PopularCities />
      <PopularAcademies />
      <UpcomingEvents />
      <PopularPersonalities />
      <DownloadAppComponent />
    </>
  );
}

import FeaturedAcademyComponent from '../atoms/card/FeaturedAcademyComponent';
import Card from '../atoms/card/FeaturedAcademyComponent'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';  
import imc from '../atoms/card/vall.jpg'

const FeauturedAcademies = () => {
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
     <div className="w-full bg-blue-800 h-[500px]">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-[2%] flex justify-between"> 
        <div>
        <h1 className="text-white text-2xl font-bold mb-4 ">Featured  <br />Academies</h1>
          <p className='text-white'>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p> 
          <div className='flex mt-[30%]'>
            <button className='text-red-600' >
              
              <FontAwesomeIcon icon={faArrowLeft} height={30} width={30} className='rounded-[50%]'/>  {/* Use the correct FontAwesome icon */}
            </button>
            <button className='text-red-600 ml-4'>
              <FontAwesomeIcon icon={faArrowRight} height={30} width={30} />
            </button>
          </div>
        </div>
            <FeaturedAcademyComponent image = {imc}/>
            <FeaturedAcademyComponent />
            
            
      </div>
    </div>
    );
  };
  
  export default FeauturedAcademies;
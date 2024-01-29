'use client'
import {Button} from "../atoms/index";
import ItemsContainer from '../molecules/ItemsContainer'



const Footer = () => {
  return (
    <footer className="bg-[#2b2e73] text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#fffffff19] py-7">
        <h1 className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold md:w-2/5">
          Get in Touch with us <br />
          Contact for more enquiry

        </h1>
        <div>
        <Button label = "Contact Us"></Button>
        </div>
      </div>


      <ItemsContainer />

      <div className='text-center p-3 bg-[#2a2a2a]'>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-dark' href='https://mdbootstrap.com/'>
          Fusion Data Solutions. Rights Reserved
        </a>
      </div>

    </footer>
  );
}

export default Footer;

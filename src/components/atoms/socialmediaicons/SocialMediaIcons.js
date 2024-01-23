import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs';

const SocialMediaIcons = () => {
  return (
    <div className='flex flex-row justify-center items-center gap-5'>
      <BsFacebook />
      <BsInstagram />
      <BsLinkedin />
      <BsTwitter />
    </div>
  );
};

export default SocialMediaIcons;

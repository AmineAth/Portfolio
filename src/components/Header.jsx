import React from 'react';
import '../styles/Header.css';

export default function Header() {
  return (
    <div className='flex fade-in'>
      <div className='st-half flex justify-center items-center mt-24'>
        <h1 className='text-white text-4xl p-10 w-fit'> <span className='writing'>Hi there!👋</span><br/> I'm Amine Ath and I'm a <span className='text-purple-600'>Software Engineer</span> based in Morocco, specifically in Rabat</h1>
        <img className='-ml-[200px] head--image' src={process.env.PUBLIC_URL + '/images/me.png'} alt="Oops!" />
      </div>

      <div className='nd-half'>
        <p className='head--text text-white text-2xl text-purple-600 flex justify-center items-center'>
          ❝ Fueling innovation and driving progress. Passionate about leveraging technology to create meaningful websites. <br/> Let's embark on a journey of innovation together! 💻 ❞
        </p>
      </div>
    </div>
  );
}

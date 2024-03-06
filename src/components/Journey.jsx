import React from 'react';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import '../styles/Journey.css'
import Study from './journeyComps/Study'; // Import your Study component
import Code from './journeyComps/Code'; // Import your Code component
import Life from './journeyComps/Life'; // Import your Life component
import '../styles/Projects.css'

export default function Journey() {
  return (
    <>
    <div className='flex justify-center'>
    <div className='text-white h-12/12 w-11/12 mt-32 cardd p-9'>
    <h1 className='text-2xl text-white text-center mb-10'>The portfolio outlines my skills as a web developer and a little bit about my personal life.</h1>
      <BrowserRouter >
      <div className='flex justify-center w-12/12 '>
        <ul className='h-32 flex justify-between w-6/12'> 
          <li ><button className='button2 w-32'><Link className="block text-center" to="/journey/study">📓Study</Link></button></li>
          <li ><button className='button2 w-32'><Link className="block text-center" to="/journey/code">&lt;/&gt;  Code</Link></button></li>
          <li ><button className='button2 w-32'><Link className="block text-center" to="/journey/life">☼<br/>Life</Link></button></li>
        </ul>
      </div>
      <div className='flex justify-center '>

        <section className='flex justify-center items-center'>
          <Routes>
            <Route path="/journey/study" element={<Study />} />
            <Route path="/journey/code" element={<Code />} />
            <Route path="/journey/life" element={<Life />} />
          </Routes>
        </section>
      </div>
      </BrowserRouter>
    </div>
    </div>
    </>
  );
}

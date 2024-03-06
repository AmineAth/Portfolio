import React from 'react'
import '../../styles/Study.css'
const Study = () => {
  return (
    <div className='w-8/12 p-10'>
      <ol className="border-s-2 border-primary dark:border-primary-500">
      {/* First item */}
      <li className=" fadeIn" style={{ animationDelay: `${1 * 0.4}s` }}>
        <div className="flex-start flex items-center">
          <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
          <h4 className="-mt-2 text-xl font-semibold">Web developement - Full-Stack</h4>
        </div>
        <div className="mb-6 ms-6 pb-6">
          <a
            href="#!"
            className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
             Ista Ntic Rabat - Hay ryad | September, 2022
          </a>
          <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-300">
            I started my formation in 2022 and still in process, I'm supposed to finish in june 2024.</p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            Read more
          </button>
        </div>
      </li>

      {/* Second item */}
      <li className=" fadeIn" style={{ animationDelay: `${2 * 0.4}s` }}>
        <div className="flex-start flex items-center">
          <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
          <h4 className="-mt-2 text-xl font-semibold">Baccalaureat</h4>
        </div>
        <div className="mb-6 ms-6 pb-6">
          <a
            href="#!"
            className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            Al Nassim High School | September, 2020
          </a>
          <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
            With my honor i got my baccalaureate in 2021 </p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            Read more
          </button>
        </div>
      </li>

      {/* Third item */}
      <li className=" fadeIn" style={{ animationDelay: `${3 * 0.4}s` }}>
        <div className="flex-start flex items-center">
          <div className="-ms-[9px] -mt-2 me-3 flex h-4 w-4 items-center justify-center rounded-full bg-primary dark:bg-primary-500"></div>
          <h4 className="-mt-2 text-xl font-semibold">Junior High School</h4>
        </div>
        <div className="mb-6 ms-6 pb-6">
          <a
            href="#!"
            className="text-sm text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            september, 2016
          </a>
          <p className="mb-4 mt-2 text-neutral-600 dark:text-neutral-200">
          The stage before high school, often referred to as middle school or junior high school, marks a critical transition period in a student's educational journey.           </p>
          <button
            type="button"
            className="inline-block rounded bg-primary px-4 pb-[5px] pt-[6px] text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
            data-twe-ripple-init
            data-twe-ripple-color="light"
          >
            Read more
          </button>
        </div>
      </li>
    </ol>
    </div>
  )
}

export default Study

import React from 'react'
// import { TbPlaneTilt } from "react-icons/tb";

type Props = {}

const CardHeader = (props: Props) => {
    return (
        <div className="flex absolute top-60 left-[259.6px] w-[1000px] justify-between">
            <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300 relative">
                <div className="flex flex-col items-center pb-5 pt-5 ">
                    <button className="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-phone text-gray-700 hover:text-blue-500"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
                    </button>

                    <h5 className="mb-1 text-xl font-medium text-gray-700 dark:text-white hover:text-blue-500">PHONE NUMBER</h5>
                    <span className="text-sm text-gray-500 dark:text-gray-400 hover:text-blue-500">234-5876-5400</span>

                </div>
            </div>
            <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center pb-5 pt-5 ">
                    <button className="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-linkedin text-gray-700 hover:text-blue-500"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                        {/* <Phone /> */}
                    </button>
                    <h5 className="mb-1 text-xl font-medium text-gray-700 dark:text-white hover:text-blue-500">LINKEDIN</h5>
                    {/* <span className="text-sm text-gray-500 dark:text-gray-400">www.linkedin.com</span> */}
                    <a className="text-sm text-gray-500 dark:text-gray-400 hover:underline hover:text-blue-500" href="https://www.linkedin.com/in/your-profile-url" target="_blank" rel="noopener noreferrer">Visit our LinkedIn profile</a>

                </div>
            </div>
            <div className="max-w-sm w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center pb-5 pt-5">
                    <button className="w-24 h-24 mb-3 rounded-full shadow-lg flex items-center justify-center hover:text-blue-500">
                        <svg xmlns="http://www.w3.org/2000/svg" width="46" height="46" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-mail text-gray-700 hover:text-blue-500"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg>
                        {/* <Phone /> */}
                    </button>
                    <h5 className="mb-1 text-xl font-medium text-gray-700 dark:text-white hover:text-blue-500">EMAIL</h5>
                    {/* <span className="text-sm text-gray-500 dark:text-gray-400">sayitright1234@gmail.com</span> */}
                    {/* <a href="#">sayitright1234@gmail.com</a> */}
                    <a href="mailto: abc@example.com" className="text-sm text-gray-500 dark:text-gray-400 hover:underline hover:text-blue-500">sayitright1234@gmail.com</a>
                </div>
            </div>

        </div>

    )
}

export default CardHeader;
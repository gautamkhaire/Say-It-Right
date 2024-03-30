import React from 'react'

type Props = {}

const HelpHeader = (props: Props) => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="500" viewBox="0 0 1500 600" preserveAspectRatio="none">
        <defs>
          {/* <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="10%" stop-color="#4f46e5" />
            <stop offset="90%" stop-color="#93c5fd" />
          </linearGradient> */}
          <linearGradient id="myGradient" gradientTransform="rotate(90)">
            <stop offset="10%" stop-color="#4f46e5" />
            <stop offset="90%" stop-color="#93c5fd" />
          </linearGradient>
        </defs>
        <path d="M 0,0
                L 0,300
                Q 750,600 1500,300
                L 1500, 0
                Z" fill="url('#myGradient')" />
      </svg>
      <div className='absolute left-[624.6px] top-[50px] w-[285px]'>
        <h1 className="text-5xl font-semibold text-gray-300">Help Center</h1>
        <p className='text-xl pt-4 text-gray-300 font-medium'>How can we help you today?</p>
      </div>
    </div>
  )
}

export default HelpHeader
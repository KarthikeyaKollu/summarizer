import React from 'react'
import {Loader} from "./Loader"
export const Output = () => {
  
    const response="Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate.Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facere, voluptates modi perferendis officia pariatur quidem iste dolores animi optio reprehenderit error ea sint tempora vel nobis, quas cum. Voluptate."
  return (
    <div>
      <div className='my-10 max-w-full flex justify-center items-center'>
        {false ? (
          <Loader/>
        ) : false ? (
          <p className='font-inter font-bold text-black text-center'>
            Well, that wasn't supposed to happen...
            <br />
            <span className='font-satoshi font-normal text-gray-700'>
              {}
            </span>
          </p>
        ) : (
          response && (
            <div className='flex flex-col gap-3'>
              <h2 className='font-satoshi font-bold text-gray-600 text-xl'>
                Article <span className='blue_gradient'>Summary</span>
              </h2>
              <div className='summary_box'>
                <p className='font-inter font-medium text-sm text-gray-700'>
                  {response}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </div>
  )
}



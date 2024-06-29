import React from 'react'
import burger from '/src/assets/burger.jpg';
import chick from '/src/assets/chicken.webp';
import paneer from '/src/assets/paneer.jpeg';
function Home() {

  return (
    <>
     <div 
     className="homeSection 
     flex p-2 gap-2">

        <div className="left bg-white h-full w-2/3 rounded-xl 
        flex items-center justify-center shadow-lg">
          <img src={burger} alt="..." className='h-full w-full  rounded-xl '/>
        </div>

        <div  className="right bg-white h-full w-1/3 rounded-xl 
        flex flex-col p-3 shadow-lg text-cyan-600">
            <div className="item flex items-center border-solid border-gray-300 border-b-2  h-24 gap-10">
              <div className="image h-20 w-20 ">
                <img src={burger} alt="" className='w-full h-full rounded-xl' />
              </div>
              <div className="details">
              <h3 className='font-semibold text-2xl'>Wild Potato Burger - $20</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>

            <div className="item flex items-center border-solid border-gray-300 border-b-2  h-24 gap-10">
              <div className="image h-20 w-20 ">
                <img src={chick} alt="" className='w-full h-full rounded-xl' />
              </div>
              <div className="details">
              <h3 className='font-semibold text-2xl'>Chicken Crispy Burger - $19</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
              </div>

              <div className="item flex items-center border-solid border-gray-300 border-b-2  h-24 gap-10">
              <div className="image h-20 w-20 ">
                <img src={paneer} alt="" className='w-full h-full rounded-xl' />
              </div>
              <div className="details">
              <h3 className='font-semibold text-2xl'>Paneer Makhani Burger- $12</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
              </div>

              <div className="item flex items-center border-solid border-gray-300 border-b-2  h-24 gap-10">
                <div className="image h-20 w-20 ">
                  <img src={burger} alt="" className='w-full h-full rounded-xl' />
                </div>
                <div className="details">
                <h3 className='font-semibold text-2xl'>Wild Potato Burger - $20</h3>
                <p>Lorem ipsum dolor sit amet.</p>
                </div>
                </div>

                <div className="item flex items-center border-solid border-gray-300 border-b-2  h-24 gap-10">
              <div className="image h-20 w-20 ">
                <img src={chick} alt="" className='w-full h-full rounded-xl' />
              </div>
              <div className="details">
              <h3 className='font-semibold text-2xl'>Chicken Crispy Burger - $19</h3>
              <p>Lorem ipsum dolor sit amet.</p>
              </div>
              </div>

              <button className=' mt-4 w-full bg-gradient-to-tr from-cyan-600 to-cyan-700
       text-indigo-100 py-2 rounded-md text-lg tracking-wide'>Order Now</button>
        </div>

     </div>
    
     </>
  )
}

export default Home
import React from 'react'
import profile from '/src/assets/profile.png';
import dash from '/src/assets/dash.jpg';
import chick from '/src/assets/chicken.webp';
import paneer from '/src/assets/paneer.jpeg';

function Dashboard() {

  return (
    <>
     <div 
     className="dashSection 
     flex items-center justify-between p-2 gap-2">

       
        <div className="dasleft bg-white h-full w-2/3 rounded-xl flex items-center justify-center shadow-lg">
        <img src={dash} alt="..." className='h-full w-full  rounded-xl '/>
        </div>

        <div className="dashright h-full w-1/3 flex flex-col gap-3">

            <div  className="up bg-white h-2/3 w-full rounded-xl  px-2 shadow-lg flex justify-center items-center flex-col">  
                <div className="profile bg-gray-100 h-72 w-72 rounded-full mb-2"> 
                  <img src={profile} alt="" className='h-full w-full'/>
                </div>
                <div className="username text-4xl font-bold text-cyan-600">Khushi</div>
            </div>

            <div className="down bg-white h-1/3 w-full rounded-xl px-2 shadow-lg text-cyan-600"> 
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
             </div>
        </div>

     </div>
    
     
     
     </>
  )
}

export default Dashboard
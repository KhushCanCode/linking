import React from 'react'


function Signin() {

  return (
    <>
  <div className='signinsection flex justify-center items-center'>
    <div class="bg-white px-10 py-8 rounded-xl w-screen shadow-lg max-w-sm">
      <div class="space-y-4">
        <h1 class="text-center text-2xl font-semibold text-cyan-600">Sign In</h1>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Username</label>
          <input type="text" class="bg-gray-100 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Email</label>
          <input type="text" class="bg-gray-100 px-4 py-2 outline-none rounded-md w-full" />
        </div>
        <div>
          <label for="email" class="block mb-1 text-gray-600 font-semibold">Password</label>
          <input type="text" class="bg-gray-100 px-4 py-2 outline-none rounded-md w-full" />
        </div>
      </div>
      <button class="mt-4 w-full bg-gradient-to-tr from-cyan-600 to-cyan-700
       text-indigo-100 py-2 rounded-md text-lg tracking-wide">Sign In</button>
    </div>
  </div>
    
     
     
     </>
  )
}

export default Signin
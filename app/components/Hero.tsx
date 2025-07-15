import React from 'react'

const Hero = () => {
  return (
    <section className="w-full bg-white py-16 px-6 md:px-20"
    style={{ backgroundImage: `url('./bg.jpg')` }}>
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mb-6">
            Shop Smart. <span className="text-blue-600">Live Better.</span>
          </h1>
          <p className="text-gray-600 text-lg md:text-xl mb-6">
            Discover thousands of top-quality products at unbeatable prices. 
            Enjoy fast delivery, secure payments, and 24/7 support — all in one place.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition duration-300">
            Start Shopping
          </button>
        </div>

        <div className="w-full md:w-1/2">
          <img 
            src='/hero.jpg'
            alt="Shopping illustration" 
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

import React from 'react'

export default function Dolako() {
  return (
    <div>
            <div className="relative h-screen bg-[url('/images/hero.jpg')] bg-cover bg-center bg-no-repeat mt-[-25px]">  
    <div className="absolute inset-0 bg-black/60"></div>

      <h1 className='flex justify-center font-extrabold text-white text-4xl mt-5'><span className='mt-10'>Trade Crypto and Giftcard with</span>
        <span className='text-[#B9A7FF] ml-2 mt-10'>
           confidence 
        </span>
      </h1>
      <p className="text-center font-serif text-white text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-7">
  <span className="block">
    VaultX makes cryptocurrency trading simple and secure for everyone.
  </span>
       <span className="block">
    Buy, sell, and manage Bitcoin, Ethereum, and more with Naira.
       </span>
      </p>
      <div className='flex justify-center items-center mt-15 pr-75'>
      <div className=' bg-[#B9A7FF] flex items-center justify-center text-white ml-90 mt-10 h-14 font-serif rounded-3xl w-65 cursor-pointer transition-transform transition-shadow duration-300
  hover:scale-105 hover:shadow-lg hover:-translate-y-1'>
        <strong className='font-extrabold text-[#F8FAFC]'>Start Trading Now</strong>
        <img src="/images/right icon.png" alt="" />
      </div>
      <div className='bg-gray-800 flex justify-center items-center text-white gap-10 mt-10 h-14 font-serif rounded-3xl w-60  mx-auto cursor-pointer transition-transform transition-shadow duration-300
  hover:scale-105 hover:shadow-lg hover:-translate-y-1'>
        <strong className='font-extrabold'>Learn More</strong>
      </div>
      </div>

      <div className='flex justify-center mt-20 gap-10'>
        <p className='flex items-center text-white mr-50'>
          <img src="/images/done.png" className="h-7" />
          <span> Regulated Platform</span>
        </p>
        <h5 className='flex pr-15 text-white'>
          <img src="/images/done.png" className="h-7" />
          <span>&#8358;50+ Traded</span>
          <p className='flex text-white ml-50 '>
            <img src="/images/done.png" className="h-7 " />
            <span>100K+ Users</span>
          </p>
        </h5>
      </div>
    </div>
    <div className='bg-black h-20 flex justify-center  items-center text-white text-2xl '>
      <h1 className='font-extrabold font-serif mt-25'>Live Crypto Prices</h1>
    </div>
    <div className='bg-black h-20 flex justify-center  items-center text-white'>
      <p className='font-serif'>Real-time cryptocurrency prices in Nigerian Naira</p>
    </div>


    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto bg-black ">

        <div className="rounded-3xl bg-gradient-to-br from-[#0b0f19] to-[#020617] p-6 border border-white/5 shadow-xl transition-transform transition-shadow duration-300
  hover:scale-105 hover:shadow-lg hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                ₿
              </div>
              <div>
                <h3 className="text-white font-semibold">Bitcoin</h3>
                <p className="text-gray-400 text-sm">BTC</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-white font-bold text-lg">₦45,230,000</p>
              <p className="text-green-400 text-sm flex items-center gap-1 justify-end">
                ↗ +2.34%
              </p>
            </div>
          </div>

          <div className="mt-6 h-15 rounded-2xl bg-gradient-to-r from-[#1e2340] to-[#111827] flex items-center justify-center text-gray-400 text-sm">
            Chart placeholder
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-[#0b0f19] to-[#020617] p-6 border border-white/5 shadow-xl transition-transform transition-shadow duration-300
  hover:scale-105 hover:shadow-lg hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
                ◇
              </div>
              <div>
                <h3 className="text-white font-semibold">Ethereum</h3>
                <p className="text-gray-400 text-sm">ETH</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-white font-bold text-lg">₦2,890,000</p>
              <p className="text-green-400 text-sm flex items-center gap-1 justify-end">
                ↗ +5.67%
              </p>
            </div>
          </div>

          <div className="mt-6 h-15 rounded-2xl bg-gradient-to-r from-[#1e2340] to-[#111827] flex items-center justify-center text-gray-400 text-sm ">
            Chart placeholder
          </div>
        </div>

        
        <div className="rounded-3xl bg-gradient-to-br from-[#0b0f19] to-[#020617] p-6 border border-white/5 shadow-xl transition-transform transition-shadow duration-300
  hover:scale-105 hover:shadow-lg hover:-translate-y-1">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#111827] flex items-center justify-center text-white font-bold">
                ADA
              </div>
              <div>
                <h3 className="text-white font-semibold">Cardano</h3>
                <p className="text-gray-400 text-sm">ADA</p>
              </div>
            </div>

            <div className="text-right">
              <p className="text-white font-bold text-lg">₦780</p>
              <p className="text-red-400 text-sm flex items-center gap-1 justify-end">
                ↘ -1.23%
              </p>
            </div>
          </div>

          <div className="mt-6 h-15 rounded-2xl bg-gradient-to-r from-[#1e2340] to-[#111827] flex items-center justify-center text-gray-400 text-sm">
            Chart placeholder
          </div>
        </div>
      </div>
      <div className='bg-black flex justify-center items-center text-white '>
        <h1 className='mt-15 text-4xl font-serif font-extrabold'>Why Choose Vaultx?</h1>
      </div>
      <div className='bg-black flex justify-center items-center text-white'>
        <p className='mt-2 font-serif'>Built specifically for the Nigerian market with features that matters most to African crypto traders.</p>
      </div>

       <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
        
          <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-2xl p-10 shadow-lg border border-white/5">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-500/10 mb-6">
            <img src="/images/shield.png" className="justify-center item-center " />
            </div>
            <h3 className="text-white text-xl font-semibold mb-4">
              Bank-Level Security
            </h3>

            <p className="text-gray-400 font-serif leading-relaxed">
              Your funds are protected with military-grade encryption and
              multi-factor authentication.
            </p>
          </div>

          <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-2xl p-10 shadow-lg border border-white/5">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-500/10 mb-6">
            <img src="/images/flash.png" alt="" />
            
            </div>

            <h3 className="text-white text-xl font-semibold mb-4">
              Instant Transactions
            </h3>

            <p className="text-gray-400 font-serif leading-relaxed">
              Buy and sell crypto in seconds with our lightning-fast trading
              engine.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#0f172a] to-[#020617] rounded-2xl p-10 shadow-lg border border-white/5">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-indigo-500/10 mb-6">
            <img src="/images/world 2.png" alt="" /> 
            </div>

            <h3 className="text-white text-xl font-semibold mb-4">
              Nigerian-Friendly
            </h3>

            <p className="text-gray-400 font-serif leading-relaxed">
              Seamlessly trade with Naira and get local support in your
              timezone.
            </p>
          </div>

        </div>
      </div>
    </section>


    <section className="bg-black py-24 px- ">
      <div className="max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#0f172a] via-[#020617] to-[#020617] px-6 py-20 text-center shadow-xl border border-white/5">

          {/* Heading */}
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-6">
            Ready to Start Trading?
          </h2>

          {/* Subtext */}
          <p className="text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-10 font-serif">
            Join thousands of Nigerians who trust VaultX for their
            cryptocurrency needs.
          </p>

          {/* Button */}
          <button className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold px-8 py-4 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-indigo-500/40">
            Create Free Account
            <span className="text-xl">→</span>
          </button>

        </div>
      </div>
    </section>

    </div>
  )
}


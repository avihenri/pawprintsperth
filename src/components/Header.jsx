'use client';
import React, { useState } from 'react';
import 'material-icons/iconfont/material-icons.css'
import Menu from './Menu';

function Header () {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClickGetInTouch = () => {
    const element = document.getElementById('get-in-touch');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMenuOpen(false);
  };

  return (
    <section className="flex min-h-screen flex-col items-center justify-between bg-brand-primary bg-overlay md:bg-walking-paws bg-no-repeat bg-cover">
      <div className="z-10 w-full items-center justify-between font-mono text-sm">
        <div className="flex-1 flex justify-between">
          <div className="ml-1 pt-1 mb-1 relative">
            <button 
                className={`p-4 text-brand-secondary cursor-pointer hover:scale-105 focus:border-transparent focus:ring-0 focus:!outline-none`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <span className="material-icons" style={{ fontSize: '45px !important' }}>
                  menu
                </span>
            </button>

            {menuOpen && (
              <Menu handleClickGetInTouch={handleClickGetInTouch} setMenuOpen={setMenuOpen} />
            )}
          </div>
          <div className="flex mr-3 mt-1">
            <a href="https://www.facebook.com/PawPrintsPerthUK/" className="cursor-pointer mt-3" target="_blank">
                <img className='m-1 p-1 h-auto w-10 md:w-12 2xl:w-20 hover:scale-105' src='/facebook.svg' alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/pawprintsperth/" className="cursor-pointer mt-3" target="_blank">
                <img className='m-1 p-1 h-auto w-10 md:w-12 2xl:w-20 hover:scale-105' src="/instagram.svg" alt="instagram" />
            </a>
          </div>
        </div>
      </div>

      <div className="relative">
        <h1 className="hidden">Paw Prints Perth</h1>
        <img className="h-auto w-96 2xl:w-[38rem] px-8 md:p-2" src="/logo-tight-transparent.png" alt="Paw Prints Perth Logo" />
      </div>

      <div className="my-3 text-center lg:flex">
        <h2 className="text-brand-sand uppercase text-lg xl:text-2xl 2xl:text-5xl font-extralight mx-3 md:mx-0 2xl:mx-3">fully insured</h2>
        <div className='w-full lg:w-10 flex justify-center items-center'>
          <img className="h-6 w-6 2xl:h-16 2xl:w-16 m-1 text-center" src="/paw.svg" alt="Dog paw" />
        </div>
        <h2 className="text-brand-sand uppercase text-lg xl:text-2xl 2xl:text-5xl font-extralight mx-3 md:mx-0 2xl:mx-3">canine first aid trained</h2>
        <div className='w-full lg:w-10 flex justify-center items-center'>
          <img className="h-6 w-6 2xl:h-16 2xl:w-16 m-1 text-center" src="/paw.svg" alt="Dog paw" />
        </div>
        <h2 className="text-brand-sand uppercase text-lg xl:text-2xl 2xl:text-5xl font-extralight mx-3 md:mx-0 2xl:mx-3">Passionate and Reliable</h2>
      </div>

      <div className="mb-12 md:mb-20 grid text-center">
        <button 
            className={`px-5 py-3 2xl:py-5 w-44 2xl:w-80 text-lg 2xl:text-4xl rounded-lg uppercase font-bold text-brand-primary bg-brand-eggShell hover:bg-brand-sand hover:scale-105`}
            onClick={handleClickGetInTouch}
        >
            Get in touch
        </button>
      </div>
    </section>
  )
}

export default Header;

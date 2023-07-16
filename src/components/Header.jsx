import Image from 'next/image'
import 'material-icons/iconfont/material-icons.css'

function Header () {
  return (
    <section className="flex min-h-screen flex-col items-center justify-between bg-brand-primary bg-overlay lg:bg-walking-paws bg-no-repeat bg-cover">
      <div className="z-10 w-full items-center justify-between font-mono text-sm">
        <div className="flex-1 flex justify-between">
          <div className="ml-1 pt-1 mb-1">
              <button 
                  className={`p-4 text-brand-secondary hover:text-brand-primaryDark cursor-pointer`}
              >
                  <span className="material-icons" style={{ fontSize: '40px !important' }}>
                    menu
                  </span>
              </button>
          </div>
          <div className="flex mr-3">
                <Image
                  className="relative m-1 fill-current text-brand-primaryDark cursor-pointer"
                  src="/facebook.svg"
                  alt="Facebook"
                  width={40}
                  height={40}
                  priority
                />
                <Image
                  className="relative m-1 cursor-pointer"
                  src="/instagram.svg"
                  alt="Instagram"
                  width={40}
                  height={40}
                  priority
                />
            </div>
        </div>
      </div>

      <div className="relative">
        <h1 className="hidden">Paw Prints Perth</h1>
        <Image
          className="relative px-8 md:p-2"
          src="/logo-tight-transparent.png"
          alt="Paw Prints Perth Logo"
          width={400}
          height={250}
          priority
        />
      </div>

      <div className="my-3 text-center lg:flex">
        <h2 className="text-brand-sand uppercase text-lg md:text-2xl font-extralight">fully insured</h2>
        <div className='px-2 flex justify-center'>
          <Image
            className="relative m-1 "
            src="/paw.svg"
            alt="Dog paw"
            width={20}
            height={20}
            priority
          />
        </div>
        <h2 className="text-brand-sand uppercase text-lg md:text-2xl font-extralight">canine first aid trained</h2>
        <div className='px-2 flex justify-center'>
          <Image
            className="relative m-1 text-center"
            src="/paw.svg"
            alt="Dog paw"
            width={20}
            height={20}
            priority
          />
        </div>
        <h2 className="text-brand-sand uppercase text-lg md:text-2xl font-extralight">Passionate and Reliable</h2>
      </div>

      <div className="mb-12 md:mb-20 grid text-center">
        <button 
            className={`px-5 py-3 w-44 text-lg rounded-lg uppercase font-bold text-brand-primary bg-brand-eggShell hover:bg-brand-sand`}
        >
            Get in touch
        </button>
      </div>
    </section>
  )
}

export default Header;

import Image from 'next/image'
import 'material-icons/iconfont/material-icons.css'

function Services () {
  return (
    <section className="flex min-h-screen flex-col items-center bg-brand-primary bg-overlay md:bg-walking-paws bg-no-repeat bg-cover">
        <div className="z-10 w-full items-center justify-center font-mono mt-8 flex">
            <div className='px-2 flex justify-center'>
                <Image
                    className="relative m-1 text-center"
                    src="/paw.svg"
                    alt="Dog paw"
                    width={30}
                    height={30}
                    priority
                />
            </div>
            <h3 className='uppercase text-2xl sm:text-3xl text-center text-brand-eggShell font-mono font-bold py-4 2xl:text-7xl'>Our Services</h3>
            <div className='px-2 flex justify-center'>
                <Image
                    className="relative m-1 text-center"
                    src="/paw.svg"
                    alt="Dog paw"
                    width={30}
                    height={30}
                    priority
                />
            </div>
        </div>

        <div className="mt-8 w-full my-8">
            <img className='w-10/12 m-auto sm:w-6/12 lg:w-1/2 shadow-2xl lg:mt-8 2xl:mt-10 2xl:pt-10 border-8 border-brand-secondary' src='/price-list.jpg' />
        </div>
    </section>
  )
}

export default Services;

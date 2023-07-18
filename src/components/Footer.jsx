import Image from 'next/image'
import 'material-icons/iconfont/material-icons.css'

function Footer () {
  return (
    <section className="flex min-h-screen h-full flex-col bg-brand-eggShell bg-overlay bg-walking-paws-light bg-no-repeat bg-cover border-8 border-brand-primary" id='get-in-touch'>
        <div className="w-full items-center justify-center font-mono mt-8 flex 2xl:pb-10">   
            <img className="h-6 w-6 2xl:h-16 2xl:w-16 m-1 text-center mt-2 2xl:pt-6" src="/paw.svg" alt="Dog paw" />
            <h3 className='uppercase text-center text-brand-primaryDark font-mono font-bold py-4 2xl:py-10 px-2 text-2xl sm:text-3xl lg:text-4xl 2xl:text-7xl 2xl:mt-10'>Get in touch</h3>
            <img className="h-6 w-6 2xl:h-16 2xl:w-16 m-1 text-center mt-2 2xl:pt-6" src="/paw.svg" alt="Dog paw" />
        </div>

        <div className="w-full h-full mt-8 min-h-full">
            <div className="w-full flex flex-col justify-between">
                {/* contact details */}
                <div className='flex flex-col justify-center items-center mt-3 grow'>
                    <div className="text-center border-4 2xl:border-8 border-brand-secondary md:w-7/12 lg:w-1/2 rounded-xl bg-brand-eggShell shadow-xl">
                        <p className='uppercase text-center text-brand-primaryDark font-mono font-bold py-4 2xl:py-10 px-2 text-2xl 2xl:text-6xl 2xl:mt-10'>email</p>
                        <a className="text-brand-primaryDark font-mono font-bold text-lg sm:text-xl xl:text-2xl 2xl:text-5xl block mb-6 px-2" href='mailto:info@pawprintsperth.co.uk'>info@pawprintsperth.co.uk</a>
                        <p className='uppercase text-center text-brand-primaryDark font-mono font-bold py-4 2xl:py-10 px-2 text-2xl 2xl:text-6xl 2xl:mt-10'>phone</p>
                        <a className="text-brand-primaryDark font-mono font-bold text-lg sm:text-xl xl:text-2xl 2xl:text-5xl block mb-6" href='tel:07450292096'>07450292096</a>
                        <div className='h-1 w-8/12 bg-brand-secondary m-auto mt-7 rounded-lg'></div>
                        {/* follow us */}
                        <div>
                            <p className='uppercase text-center text-brand-primaryDark font-mono font-bold py-4 2xl:py-10 px-2 text-xl sm:text-2xl lg:text-3xl 2xl:text-6xl mt-10'>Follow us</p>
                            <div className="flex justify-center items-center">
                                <img className='m-1 p-1 h-auto w-12 2xl:w-20 cursor-pointer' src="/facebook.svg" alt="Facebook" />
                                <img className='m-1 p-1 h-auto w-12 2xl:w-20 cursor-pointer' src="/instagram.svg" alt="instagram" />
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Footer;

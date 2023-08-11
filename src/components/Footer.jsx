'use client';
import 'material-icons/iconfont/material-icons.css'
import PawTitle from './common/PawTitle';
import SocialMediaIcons from './common/SocialMediaIcons';

function Footer () {
  return (
    <section className="min-h-screen h-full flex flex-col justify-between bg-brand-eggShell bg-overlay bg-walking-paws-light bg-no-repeat bg-cover" id='get-in-touch'>
        <div className='flex flex-col mb-4'>
            <PawTitle title='Get in touch' classnames='2xl:pb-10' titleClassnames='text-brand-primaryDark py-4 2xl:py-10 px-2' />

            <div className="w-full h-full mt-6 lg:mt-10 min-h-full">
                <div className="w-full flex flex-col justify-between">
                    {/* contact details */}
                    <div className='flex flex-col justify-center items-center'>
                        <div className="text-center border-4 2xl:border-8 border-brand-secondary md:w-7/12 lg:w-1/2 rounded-xl bg-neutral-200 shadow-xl">
                            <p className='uppercase text-center text-brand-primaryDark font-mono font-bold py-4 2xl:py-10 px-2 text-2xl 2xl:text-4xl 2xl:mt-10'>email</p>
                            <a className="text-brand-primaryDark font-mono font-bold text-lg sm:text-xl xl:text-2xl 2xl:text-3xl block mb-6 px-2" target="_top" href='mailto:info@pawprintsperth.co.uk'>info@pawprintsperth.co.uk</a>
                            <p className='uppercase text-center text-brand-primaryDark font-mono font-bold py-4 2xl:py-10 px-2 text-2xl 2xl:text-4xl 2xl:mt-10'>phone</p>
                            <a className="text-brand-primaryDark font-mono font-bold text-lg sm:text-xl xl:text-2xl 2xl:text-3xl block mb-6" href='tel:07450292096'>07450292096</a>
                            <div className='h-1 w-8/12 bg-brand-secondary m-auto mt-7 rounded-lg'></div>
                            {/* follow us */}
                            <div>
                                <p className='uppercase text-center text-brand-primaryDark font-mono font-bold py-4 2xl:py-10 px-2 text-xl sm:text-2xl lg:text-3xl 2xl:text-4xl mt-10'>Follow us</p>
                                <SocialMediaIcons
                                    classnames='flex justify-center items-center mt-4'
                                    iconClassnames='m-1 p-1 h-auto w-12 md:w-16 2xl:w-20 hover:scale-105'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-3 bg-brand-primaryDark shadow-2xl">
            <p className="text-center text-brand-eggShell font-extralight text-sm md:text-base">Copyright &copy; {new Date().getFullYear()} Paw Prints Perth. All Rights Reserved.</p>
        </div>
    </section>
  )
}

export default Footer;

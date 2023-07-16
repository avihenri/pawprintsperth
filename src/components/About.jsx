import Image from 'next/image'
import 'material-icons/iconfont/material-icons.css'

function About () {
  return (
    <section className="flex min-h-screen flex-col items-center bg-brand-eggShell bg-overlay md:bg-walking-paws-light bg-no-repeat bg-cover">
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
            <h3 className='uppercase text-3xl text-center text-brand-primary font-mono font-bold py-4'>about us</h3>
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
            <div className="md:w-8/12 2xl:w-7/12 m-auto md:bg-brand-eggShell md:shadow-2xl md:mt-4 pb-8">
                <div className="flex flex-col md:flex-row justify-center items-center pb-4">
                    <img
                        className="h-52 w-52 md:h-60 md:w-60 lg:h-72 lg:w-72 2xl:h-96 2xl:w-96 rounded-full border-4 border-brand-primary shadow-2xl md:mt-[-30px] md:ml-[-75px]"
                        src="/lee-eden.jpg"
                        alt="Paw Prints Perth Logo"
                    />
                   <div className='px-2 md:px-0'>
                        <h4 className="text-brand-primaryDark font-mono pt-6 font-bold text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-6xl">
                            Woof… I mean hello!
                        </h4>
                        <h4 className="text-brand-primary font-mono pl-3 pr-4 pt-3 font-extralight sm:text-sm lg:text-base xl:text-xl 2xl:text-4xl lg:pt-8">
                            <span className="text-brand-primaryDark font-bold">I'm Leanne</span>, a dog walker and self-proclaimed "dog whisperer" with a knack for tailoring walks to each pup's unique needs. Whether it's a high-energy sprint or a leisurely sniffing session, I'm dedicated to providing a safe, engaging, and fun-filled experiences for your beloved canine.  🐾 
                        </h4>
                   </div>
                </div>
                <div className="px-2 md:px-4">
                    <h4 className="text-brand-primary font-mono pt-3 font-extralight pl-3 sm:text-sm lg:text-base xl:text-xl 2xl:text-4xl">
                    I recently discovered a newfound love for photography, and capturing the beauty and unique personalities of our furry friends has become a passion. Each dog has their own character, and I am eager to showcase their individuality &amp; charm through captivating photographs.
                    </h4>
                    <h4 className="text-brand-primary font-mono pt-3 font-extralight pl-3 sm:text-sm lg:text-base xl:text-xl 2xl:text-4xl lg:pt-8">
                        Choose me for tailored walks and captivating photos! 📸
                    </h4>
                </div>
            </div>
        </div>

    </section>
  )
}

export default About;

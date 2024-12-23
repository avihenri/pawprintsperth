import 'material-icons/iconfont/material-icons.css'
import PawTitle from './common/PawTitle';
import SocialMediaIcons from './common/SocialMediaIcons';

function About () {
  return (
    <section className="flex min-h-screen flex-col items-center bg-brand-eggShell bg-overlay md:bg-walking-paws-light bg-no-repeat bg-cover" id='about'>
        <PawTitle title='about' classnames='2xl:pb-10' titleClassnames='text-brand-primaryDark py-4 2xl:py-10 px-2' />

        <div className="mt-8 w-full my-8 2xl:pt-10">
            <div className="md:w-8/12 2xl:w-8/12 m-auto md:bg-neutral-200 md:border-4 md:border-brand-secondary md:rounded-xl md:shadow-2xl md:mt-4 pb-4">
                <div className="flex flex-col md:flex-row justify-center items-center pb-4">
                    <img
                        className="h-52 w-52 md:h-60 md:w-60 lg:h-72 lg:w-72 2xl:h-[30rem] 2xl:w-[30rem] rounded-full border-4 border-brand-primary shadow-2xl md:mt-[-30px] md:ml-[-75px]"
                        src="/lee-eden.jpg"
                        alt="Paw Prints Perth Logo"
                    />
                   <div className='px-2 md:px-0'>
                        <h4 className="text-brand-primaryDark font-mono pt-6 font-bold text-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl sm:ml-[-50px] 2xl:ml-[-75px]">
                            Woof… I mean hello!
                        </h4>
                        <p className="text-brand-primary font-mono pl-3 pr-4 pt-3 font-extralight sm:text-sm lg:text-base 2xl:text-xl lg:pt-8">
                            <span className="text-brand-primaryDark font-bold">I'm Leanne</span>, a dog walker and self-proclaimed "dog whisperer" based in Perth. Dogs have always been a big part of my life and growing up, we have always had a lot in our family! I honestly couldn&apos;t think of a better way to spend my days than surrounded by 4 legged, furry friends 😁 After over a year of running my dog walking business full-time, I can confidently say it's been one of the best decisions I've ever made. I love every moment, from meeting new furry friends to helping busy pet owners, and I'm more passionate than ever about what I do.  🐾 
                        </p>
                   </div>
                </div>
                <div className="px-2 md:px-4">
                    <p className="text-brand-primary font-mono pt-3 font-extralight pl-3 sm:text-sm lg:text-base 2xl:text-xl">
                        I also recently discovered a newfound love for photography, and capturing the beauty and unique personalities of our furry friends has become a passion. Each dog has their own character, and I am eager to showcase their individuality &amp; charm through captivating photographs.
                    </p>
                    <p className="text-brand-primary font-mono pt-3 font-extralight pl-3 sm:text-sm lg:text-base 2xl:text-xl lg:pt-8">
                        Choose me for tailored walks and captivating photos! 📸
                    </p>
                    <div className='h-1 w-1/2 bg-brand-secondary m-auto mt-7 rounded-lg'></div>
                    <p className="text-brand-primary font-mono pt-2 font-extralight pl-3 sm:text-sm lg:text-base 2xl:text-xl lg:pt-8 text-center">
                        Check out our Facebook &amp; Instagram for photos and updates!
                    </p>

                    <SocialMediaIcons
                        classnames='flex justify-center items-center mt-4'
                        iconClassnames='m-1 p-1 h-auto w-12 md:w-16 2xl:w-20 hover:scale-105'
                    />
                </div>
            </div>
        </div>

    </section>
  )
}

export default About;

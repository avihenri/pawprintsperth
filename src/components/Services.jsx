import 'material-icons/iconfont/material-icons.css'
import PawTitle from './common/PawTitle';

function Services () {
  return (
    <section className="flex min-h-screen flex-col items-center bg-brand-primary bg-overlay md:bg-walking-paws bg-no-repeat bg-cover" id="services">
        <PawTitle title='our services' classnames='2xl:pb-10' titleClassnames='text-brand-eggShell py-4 px-2' />

        <div className="w-full mb-8 p-2">
            <h5 className="text-brand-sand text-center w-11/12 m-auto sm:w-full text-xl sm:text-2xl lg:text-3xl 2xl:text-6xl pb-1 my-6">We offer group walks, solo walks and pup visits.</h5>
            <p className="text-brand-eggShell text-center sm:w-9/12 md:7/12 lg:w-6/12 m-auto my-6 text-sm sm:text-lg lg:text-xl 2xl:text-5xl py-4">Before we go on any walks or do any visits with your pup, we can organise a meet &amp; greet with yourself so we can get to know each other first.</p>
            <img className='w-11/12 m-auto sm:w-1/2 lg:w-1/3 2xl:w-1/2 shadow-2xl my-8 lg:mt-8 2xl:mt-10 border-8 border-brand-secondary' src='/price-list.png' />
            <p className="text-brand-secondary text-center sm:w-7/12 m-auto text-sm lg:text-lg 2xl:text-3xl my-5 py-4">*Prices are subject to change. <br />*We may need to do Solo Walks if no other clients in your area.</p>
        </div>
    </section>
  )
}

export default Services;

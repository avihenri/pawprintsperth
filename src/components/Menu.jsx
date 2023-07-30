import useOutsideClick from "@/hooks/useOutsideClick";
import React from "react";

function Menu ({ handleClickGetInTouch, setMenuOpen }) {
    const menuRef = React.useRef();

    const handleClickAbout = () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    const handleClickServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    }

    useOutsideClick(menuRef, () => setMenuOpen(false));

    return (
        <>
            <div className='absolute top-16 left-6 rounded-lg w-56 h-auto bg-brand-primaryDark p-4 shadow-2xl border-4 border-brand-primary'>
                <ul className=''>
                    <li className='text-brand-primaryDark font-bold text-lg bg-brand-secondary rounded-xl px-2 py-1 my-2 hover:scale-105 shadow-2xl'>
                        <button className='w-full text-start' onClick={() => handleClickAbout()}>About</button>
                    </li>
                    <li className='text-brand-primaryDark font-bold text-lg bg-brand-secondary rounded-xl px-2 py-1 my-2 hover:scale-105 shadow-2xl'>
                        <button className='w-full text-start' onClick={() => handleClickServices()}>Services</button>
                    </li>
                    <li className='text-brand-primaryDark font-bold text-lg bg-brand-secondary rounded-xl px-2 py-1 my-2 hover:scale-105 shadow-2xl'>
                        <button className='w-full text-start' onClick={() => handleClickGetInTouch()}>Get in touch</button>
                    </li>
                    <li className='text-brand-primaryDark font-bold text-lg bg-brand-secondary rounded-xl px-2 py-1 my-2 hover:scale-105 shadow-2xl'>
                        <a className='w-full text-start' href='/pdf/pawprintsperth_terms.pdf' target='_blank'>
                            T&amp;C&apos;s
                            <span class="material-icons float-right">
                                open_in_new
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default Menu;
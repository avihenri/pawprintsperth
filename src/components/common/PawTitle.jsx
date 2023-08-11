
export default function PawTitle({ title, classnames, titleClassnames }) {
    return (
        <div className={`z-10 w-full items-center justify-center font-mono mt-8 flex ${classnames}`}>   
            <img className="titlePaw" src="/paw.svg" alt="Dog paw" />
            <h3 className={`uppercase text-center font-mono font-bold text-2xl sm:text-3xl lg:text-4xl 2xl:text-5xl 2xl:mt-10 ${titleClassnames}`}>{title}</h3>
            <img className="titlePaw" src="/paw.svg" alt="Dog paw" />
        </div>
    );
}
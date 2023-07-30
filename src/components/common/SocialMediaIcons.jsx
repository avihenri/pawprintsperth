export default function SocialMediaIcons({ classnames, iconClassnames }) {
    return (
        <div className={`${classnames}`}>
            <a href="https://www.facebook.com/PawPrintsPerthUK/" className="cursor-pointer" target="_blank">
                <img className={`${iconClassnames}`} src='/facebook.svg' alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/pawprintsperth/" className="cursor-pointer" target="_blank">
                <img className={`${iconClassnames}`} src="/instagram.svg" alt="instagram" />
            </a>
        </div>
    );
};
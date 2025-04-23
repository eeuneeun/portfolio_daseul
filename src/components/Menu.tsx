import * as React from 'react';

export interface IMenuProps {
    isMenuOpen : boolean;
    setIsMenuOpen:React.Dispatch<React.SetStateAction<boolean>>
}

export default function Menu ({isMenuOpen, setIsMenuOpen}: IMenuProps) {

    return (
        // Menu
        <nav id="menu" className={`menu ${isMenuOpen?'menu-visible':''}`} onClick={()=>{setIsMenuOpen(false)}}>
            <ul className="links">
                <li><a href="index.html">Home</a></li>
                <li><a href="portolio.html">Portfolio</a></li>
                <li><a href="process.html">Process</a></li>
                <li><a href="blog.html">Blog</a></li>
            </ul>
            {/* <ul className="actions stacked">
                <li><a href="#" className="button primary fit">Get Started</a></li>
                <li><a href="#" className="button fit">Log In</a></li>
            </ul> */}
        </nav>
    );
}

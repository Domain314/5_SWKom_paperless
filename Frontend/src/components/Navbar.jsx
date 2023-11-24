import React from "react";

import Logo from "../assets/img/logo/logo.svg";
import PlaceholderProfilPic from "../assets/img/placeholder/dominik.jpg";

function Navbar({ }) {

    const clickHandler = () => {
        console.log('click');
    }

    return (
        <div className="debug-1 w-full z-[10000]">
            <div className="w-full flex justify-center">
                <nav className="w-full flex justify-between items-center max-w-full p-4">
                    {/* Logo */}
                    <button
                        aria-label="scroll to top"
                        href="#hero"
                        className="navigation-scroll"
                    >
                        <img className="h-[45px] md:h-[55px] lg:h-[60px]" src={Logo} alt="Logo Doc" />
                    </button>

                    <div className="flex items-center gap-4">
                        <button>
                            <p className="underline font-extrabold">Logout</p>
                        </button>

                        <button>
                            <img className="rounded-full w-[40px] md:w-[45px] lg:w-[50px] h-[40px] md:h-[45px] lg:h-[50px]" src={PlaceholderProfilPic} alt="Profile Picture" />
                        </button>
                    </div>

                </nav>
            </div>


        </div>


    );
}

export default Navbar;
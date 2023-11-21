import React from "react";
import ButtonStandard from "./standards/ButtonStandard";


function Navbar({ }) {

    const clickHandler = () => {
        console.log('click');
    }

    return (
        <div className="debug-1 w-full z-[10000]">
            <div className="w-full flex justify-center">
                <nav className="w-full flex items-center max-w-full relative">
                    {/* Logo */}
                    <button
                        aria-label="scroll to top"
                        href="#hero"
                        className="navigation-scroll"
                    >
                        <img className="h-[45px] md:h-[55px] lg:h-[60px]" src="" alt="Logo" />
                    </button>

                    {/* className optional for overwriting classes (zB color) */}
                    <ButtonStandard content="hello" onClick={clickHandler} className="bg-red-300" />

                    <div className="flex gap-2 items-center ml-auto">



                    </div>


                </nav>
            </div>


        </div>


    );
}

export default Navbar;
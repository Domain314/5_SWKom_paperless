import React from "react";

import Logo from "../assets/img/logo/logo.svg";
import PlaceholderProfilPic from "../assets/img/icons/person.svg";
import Container from "./features/container/Container";

function Navbar({ }) {

    const clickHandler = () => {
        console.log('click');
    }

    return (
        <div className="z-[10000]">
            <Container>

                <nav className="w-full flex justify-between items-center">
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
                            <img className="rounded-full w-[30px] md:w-[35px] lg:w-[40px] h-[30px] md:h-[35px] lg:h-[40px]" src={PlaceholderProfilPic} alt="Profile Picture" />
                        </button>
                    </div>

                </nav>

            </Container>



        </div>


    );
}

export default Navbar;
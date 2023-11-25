import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo/logo.svg";
import Container from "./features/container/Container";

function Footer({ }) {

    const navigate = useNavigate();

    return (

        <Container>
            <footer className="debug-3">

                <div className="sm:flex sm:items-center sm:justify-between">
                    <a href="#" className="flex items-center mb-4 sm:mb-0">
                        <img src={Logo} className="mr-3 h-10" alt="Logo" />
                    </a>

                    <ul className="flex flex-wrap items-center mb-6 text-sm sm:mb-0">
                        <li>
                            <button value="about"
                                className="navigationButton hover:cursor-pointer mr-4 hover:text-white md:mr-6 ">About</button>
                        </li>
                        <li>
                            <button value="datenschutz"
                                className="navigationButton hover:cursor-pointer mr-4 hover:text-white md:mr-6 "
                                onClick={() => navigate('/datenschutz')}
                            >Datenschutz</button>
                        </li>
                        <li>
                            <button
                                value="impressum"
                                className="navigationButton hover:cursor-pointer hover:text-white"
                                onClick={() => navigate('/impressum')}
                            >Impressum</button>
                        </li>
                    </ul>
                </div>
                <hr className="my-6 border-[#F3F3F4] border-opacity-40 sm:mx-auto lg:my-8" />
                <span className="block text-sm sm:text-center">© 2023 <a href="#" className="hover:underline">Siebenundzwanzigvier Development OG</a>. All Rights Reserved.
                </span>
                <span className="block text-sm font-bold sm:text-center pt-2"> Entwicklung @ <a href="https://27vier.com"
                    className="hover:underline">27 | vier
                    Development</a>
                </span>
            </footer>
        </Container>


    );
}

export default Footer;
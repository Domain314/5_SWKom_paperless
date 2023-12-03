import React from "react";
import Logo from "../../../assets/img/logo/logo.svg";

import "./SplashScreen.css";

const SplashScreen = () => {
    return (
        <div className="bg-[#15161D] w-full h-full fixed top-0 left-0 flex flex-col items-center justify-center z-[30000] p-4 debug-3">
            <img className="w-full max-w-[200px] splash-logo" src={Logo} alt="Logo Doc" />
        </div>
    )
}

export default SplashScreen;
import React, { useEffect, useState, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LazyComponent from "./optimization/LazyComponent";

const Navbar = lazy(() => import("./components/Navbar"));
const Footer = lazy(() => import("./components/Footer"));

const Impressum = lazy(() => import("./components/pages/Impressum"));
const Datenschutz = lazy(() => import("./components/pages/Datenschutz"));

// import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

// import Impressum from "./components/Impressum";
// import Datenschutz from "./components/Datenschutz";

// import { initObserver } from "./scrollObserver";

import { consoleAsciiArt } from "./utility/consoleLogger"

function App() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        // initObserver();
    })


    return (
        <div>
            <BrowserRouter>
                <Routes>

                    <Route path="/">
                        <Route index element={
                            <>
                                <div className="">
                                    <Suspense fallback={<div></div>}>
                                        <Navbar />
                                    </Suspense>
                                </div>

                                {/* <div className="w-full flex justify-center bg-[#f8f9fa] dark:bg-[#000000]">
                                    <div className="w-full max-w-[1600px] px-4 md:px-12 2xl:px-4 my-[150px]">
                                        <Suspense fallback={<div></div>}>
                                            <LazyComponent children={<Start />} fallback={<div></div>} />

                                        </Suspense>
                                    </div>
                                </div> */}

                                {/* Footer */}
                                <div className="w-full flex justify-center bg-[#f8f9fa] dark:bg-[#000000] py-10">
                                    <div className="w-full max-w-[1600px] px-4 md:px-12 2xl:px-4">
                                        <Suspense fallback={<div></div>}>
                                            <Footer />
                                        </Suspense>
                                    </div>
                                </div>

                                {/* GoUp Button */}
                                <button
                                    onClick={scrollToTop}
                                    className="fixed bottom-5 right-5 px-3 py-4 bg-[#000000] hover:bg-[#01abff] transition-all"
                                    aria-label="scroll to top"
                                >
                                    <img src="" alt="Arrow up" />
                                </button>

                            </>
                        } />

                        <Route path="impressum" element={
                            <Suspense fallback={<div></div>}><Impressum /></Suspense>
                        } />

                        <Route path="datenschutz" element={
                            <Suspense fallback={<div></div>}><Datenschutz /></Suspense>
                        } />

                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
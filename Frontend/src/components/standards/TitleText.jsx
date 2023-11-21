import React from "react";
import { motion } from "framer-motion";

export default function TitleText(probs) {
    return (
        <div className="pb-12">
            <div className={probs.class}>

                {(<motion.div
                    initial={{
                        scale: 0.97,
                        opacity: 0.3
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1
                    }}
                    viewport={{
                        once: false
                    }}
                    transition={{
                        duration: 2,
                        type: "easeInOut"
                    }}
                >
                    <h3 className="text-center font-extrabold text-4xl md:text-5xl xl:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#00abff] to-[#0085c8] pb-2">{probs.title}</h3>
                </motion.div>
                )}


                {(<motion.div
                    initial={{
                        scale: 0.97,
                        opacity: 0.3
                    }}
                    whileInView={{
                        scale: 1,
                        opacity: 1
                    }}
                    viewport={{
                        once: false
                    }}
                    transition={{
                        duration: 2,
                        type: "easeInOut"
                    }}
                >
                    <div className="flex justify-center">
                        <h4 className="text-justify md:text-center text-lg pt-8 max-w-[800px]">{probs.text}</h4>
                    </div>
                </motion.div>
                )}


            </div>
        </div>
    );
}
import React from 'react';
import { useNavigate } from "react-router-dom";

const Impressum = () => {

    const navigate = useNavigate();

    return (
        <div className='w-full flex justify-center bg-white text-black'>

            <div className='w-full max-w-[1600px] px-4 md:px-8 pb-20'>

                <div className='w-full flex justify-between items-center'>
                    <button onClick={() => navigate('/')}>
                        <img className='w-[160px]' src="" alt="Logo" />
                    </button>


                    <button className='p-4 bg-black text-white' onClick={() => navigate('/')}>Go Home</button>
                </div>

                <h2 className='text-4xl font-bold pt-20 pb-10'>Impressum</h2>

            </div>

        </div>
    );
};

export default Impressum;

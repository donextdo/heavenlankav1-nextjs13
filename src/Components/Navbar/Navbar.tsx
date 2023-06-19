'use client'

import Image from "next/image";
import logo from '../../../assets/Logo/logo.png'
import { useState } from "react";

const Navbar = () => {

    const [selected, setSelected] = useState(1);

    const handleChange = (id: any) => {
        console.log(id)
        setSelected(id);

    }

    return (
        <div className="">
            <div className="flex justify-between">
                <div className="h-16 w-auto">
                    <Image
                        src={logo}
                        alt="item1"
                        style={{
                            objectFit: "contain",
                            backgroundColor: "",
                            width: "100%",
                            height: "100%",
                        }}
                        width={450}
                        height={400}
                    />

                </div>
                <div className="flex">
                    <div className="mr-8">

                        <button
                            className={`px-4 py-2 border-b-2 border-transparent text-white  ${selected === 1 ? 'border-white' : ''}`}
                            onClick={() => handleChange(1)}
                        >
                            Home
                        </button>
                        <button
                            className={`px-4 py-2 border-b-4 border-transparent text-white  ${selected === 2 ? 'border-white' : ''}`}
                            onClick={() => handleChange(2)}
                        >
                            Tours
                        </button>
                        <button
                            className={`px-4 py-2 border-b-2 border-transparent text-white  ${selected === 3 ? 'border-white' : ''}`}
                            onClick={() => handleChange(3)}
                        >
                            About
                        </button>
                        <button
                            className={`px-4 py-2 border-b-2 border-transparent text-white  ${selected === 4 ? 'border-white' : ''}`}
                            onClick={() => handleChange(4)}
                        >
                            Contact
                        </button>
                    </div>

                    <div className="flex flex-col items-center">
                        <h1 className="text-white text-base">+971 588 781 993</h1>
                        <h3 className="text-white text-sm">Call now</h3>
                    </div>

                </div>
            </div>

        </div>
    );
}

export default Navbar;
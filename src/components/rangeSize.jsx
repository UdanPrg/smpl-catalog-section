import React, { useState, useContext } from "react";
import { Cog6ToothIcon } from '@heroicons/react/24/outline'

export default function Range({ currentSize, funChangeSize, label }) {
    const [active, setActive] = useState(true);

    return (
        <div className={`fixed h-40 w-3/4 md:w-2/3 xl:w-1/3 transition-all duration-500 ${active ? '-right-3/4 md:-right-2/3 xl:-right-1/3 ' : 'right-0'} top-0 bg-gray-100 border border-gray-300`}>
            <div className="relative w-full h-full ">
                <Cog6ToothIcon
                    onClick={() => setActive(!active)}
                    className={`absolute ${active ? ' top-2 right-full mr-2 bg-gray-50 stroke-gray-800' : 'top-2 right-2 mr-0 bg-gray-800 stroke-gray-50'} stroke-2 transition-all duration-500 rounded-full w-12 h-12 p-3 border border-slate-800 cursor-pointer`}
                />

                <div className="w-full h-full p-4 lg:pr-24 lg:pl-10 flex flex-col justify-center">
                    <label htmlFor="sizeRange" className="font-bold text-sm"> Size of product titles </label>
                    <input
                        type="range"
                        value={currentSize}
                        min={10}
                        max={50}
                        step={2}
                        onChange={funChangeSize}
                        htmlFor="sizeRange"
                        className="my-2"
                    />
                    <span className="text-sm text-gray-500">{label} <b> {currentSize}px</b></span>
                </div>
            </div>
        </div>


    )
}

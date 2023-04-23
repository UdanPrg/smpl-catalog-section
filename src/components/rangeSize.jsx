import React, {useState} from "react";

export default function Range({ currentSize, funChangeSize }){
    // const [textSize, setTextSize] = useState(14)
    // console.log(textSize)
    return (
        <div>
            <input
                type="range"
                value={currentSize}
                min={10}
                max={50}
                step={2}
                onChange={funChangeSize}
                htmlFor="sizeRange"
            />
            <label htmlFor="sizeRange"> Text Size: {currentSize} </label>
            {/* <h4 style={{ fontSize: `${textSize}px` }}> Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni laborum soluta expedita hic veniam? Corporis, explicabo incidunt eum quasi nemo eveniet impedit blanditiis ab beatae quo pariatur ratione error ad.</h4> */}
        </div>

    )
}

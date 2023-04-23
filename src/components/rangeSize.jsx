import React, {useState} from "react";

export default function Range(){
    const [size, setSize] = useState(12)
    return (
        <div>
            <input
                type="range"
                value={size}
                onChange={reSize => setCountProducts(reSize.target.value)}
            />
            {/* <h3 style={{font-size: {size}px}}></h3> */}
        </div>

    )
}

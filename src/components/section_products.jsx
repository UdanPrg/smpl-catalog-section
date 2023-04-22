import React from "react"

export default function SectionProducts({ child }){
    return (
        <div className="grid grid-cols-4 gap-5">
            {child}
        </div>
    )
}
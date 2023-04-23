import React from "react"

export default function SectionProducts({ child }){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-4">
            {child}
        </div>
    )
}
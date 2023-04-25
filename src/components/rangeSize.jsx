export default function Range({ currentSize, funChangeSize, label }){
    return (
        <div className="flex flex-col justify-center">
            <label htmlFor="sizeRange" className="font-bold text-xl"> {label}: {currentSize}px </label>
            <input
                type="range"
                value={currentSize}
                min={10}
                max={50}
                step={2}
                onChange={funChangeSize}
                htmlFor="sizeRange"
            />
        </div>
    )
}

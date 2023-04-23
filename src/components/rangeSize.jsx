export default function Range({ currentSize, funChangeSize, label }){
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
            <label htmlFor="sizeRange"> {label}: {currentSize}px </label>
        </div>
    )
}

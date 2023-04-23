export default function InputTitle({currentTitle, funChangeTitle}){
    return(
        <div>
            <input
                type="text"
                value={currentTitle}
                onChange={funChangeTitle}
                className="border-2 border-zinc-500 pl-2 my-2 rounded-md w-full"
            />
        </div>
    )
}
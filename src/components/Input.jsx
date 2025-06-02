export default function Input({label, isTextarea, ...props}, ref) {
    return (
        <>
            <label htmlFor="" className="text-neutral-500 uppercase font-semibold">{label}</label>
            {isTextarea ? <textarea ref={ref} {...props} className="bg-neutral-300 px-1 py-1 font-light border-b-2 border-neutral-400 focus:border-neutral-600 outline-none" /> :
            <input ref={ref} {...props} className="bg-neutral-300 px-1 py-1 font-light border-b-2 border-neutral-400 focus:border-neutral-600 outline-none" />}
            
        </>
    )
}
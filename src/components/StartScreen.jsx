import logo from '../../public/logo.png';

export default function StartScreen({onCreate}) {
    return (
        <div className='flex flex-col items-center w-8/12 gap-6'>
            <img className='w-16' src={logo} alt="Logo" />
            <h2 className='font-semibold text-2xl text-neutral-600'>No Project Selected</h2>
            <p className='text-neutral-400'>Select a project or get started with a new one</p>
            <button onClick={onCreate} className='py-2 px-4 bg-neutral-900 rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-600'>Create new project</button>
        </div>
    )
}
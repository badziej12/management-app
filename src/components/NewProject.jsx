import { useRef } from "react";
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onClose, onCreate}) {
    const modalRef = useRef();

    const titleRef = useRef();
    const descriptionRef = useRef();
    const dateRef = useRef();


    function handleSaveProject() {
        const newTitle = titleRef.current.value;
        const newDescription = descriptionRef.current.value;
        const newDate = dateRef.current.value;

        if (!newTitle || !newDescription || !newDate) {
            modalRef.current.open();
            return;
        }

        const newProject = {
            title: newTitle,
            description: newDescription,
            date: newDate,
        };

        onCreate(newProject);
    }

    return (
        <>
            <Modal ref={modalRef} buttonCaption={"Close"}>
                <h2 className='font-semibold text-2xl text-neutral-600'>Invalid Input</h2>
                <p className='text-neutral-400 mb-4'>Oops ... looks like you forgot to enter a value.</p>
                <p className='text-neutral-400'>Please make sure you provide a valid value for every input field.</p>
            </Modal>
            <div className='flex flex-col items-center w-10/12 gap-6'>
                <div className="w-full flex justify-end gap-4">
                    <button onClick={onClose} className="text-neutral-800 py-2 px-6">Cancel</button>
                    <button onClick={handleSaveProject} className="text-neutral-200 bg-neutral-800 py-2 px-6 rounded-lg">Save</button>
                </div>
                <div className="flex flex-col gap-4 w-full">
                    <Input ref={titleRef} label={"Title"} type={'text'} />
                    <Input ref={descriptionRef} label={"Description"} isTextarea type={'text'} />
                    <Input ref={dateRef} label={"Due date"} type={'date'} />
                </div>
            </div>
        </>
    )
}
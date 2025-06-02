import { useImperativeHandle, forwardRef, useRef } from "react";
import { createPortal } from "react-dom";

const Modal = forwardRef(function Modal({children, buttonCaption}, ref) {

    const dialog = useRef();

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });

    return createPortal(
        <dialog ref={dialog} className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md">
            {children}
            <form action="dialog" className="mt-4">
                <button className='py-2 px-4 bg-neutral-900 rounded-lg text-neutral-500 hover:text-neutral-200 hover:bg-neutral-600'>{buttonCaption}</button>
            </form>
        </dialog>, document.getElementById("modal-root")
    );
});

export default Modal;
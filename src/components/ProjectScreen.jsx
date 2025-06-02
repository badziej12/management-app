import { useRef, useState } from "react"

export default function ProjectScreen({projectData, tasks, onDelete, onAddTask, onDeleteTask}) {
    const taskNameRef = useRef();

    const formattedDate = new Date(projectData.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
    });
    
    function handleAddTask() {
        const taskName = taskNameRef.current.value;

        if (taskName.trim() === "") {
            return;
        }
        onAddTask(taskName);
        taskNameRef.current.value = "";
    }
    
    console.log(projectData)

    const taskList = tasks.filter((task) => task.projectId === projectData.id);

    return (
        <div className='flex flex-col items-center w-10/12 gap-6'>
            <div className="w-full flex flex-col border-b-4 border-neutral-200 pb-4">
                <div className="flex w-full justify-between  mb-2">
                    <h1 className="font-semibold text-3xl text-neutral-800">{projectData.title}</h1>
                    <button onClick={onDelete} className="text-neutral-800 py-2 px-6">Delete</button>
                </div>
                <p className="text-neutral-400 mb-8">{formattedDate}</p>
                <p className="text-neutral-800 whitespace-pre-wrap">{projectData.description}</p>
            </div>
            <div className="flex flex-col gap-4 w-full">
                <h2 className="font-semibold text-2xl text-neutral-800">Tasks</h2>
                <div>
                    <input ref={taskNameRef} type="text" className="bg-neutral-300 w-2/5 p-1 outline-none" />
                    <button onClick={handleAddTask} className="text-neutral-800 py-2 px-6">Add task</button>
                </div>
                { taskList.length > 0 ? (
                    <div className="flex flex-col gap-2 bg-neutral-200 px-2 py-8 rounded-md">
                        {taskList.map((task) => (
                            <div key={task.id} className="flex justify-between items-center px-2 py-1">
                                <p className="">{task.text}</p>
                                <button onClick={() => onDeleteTask(task.id)} className="text-neutral-800 py-2 px-6">Clear</button>
                            </div>
                        ))}
                    </div>
                ) : <p>This project does not have any tasks yet.</p> }
            </div>
        </div>
    )
}
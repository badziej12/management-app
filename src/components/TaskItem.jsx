export default function TaskItem({task}) {
    return (
        <div className="flex">
            <p>{task}</p>
            <button>Clear</button>
        </div>
    )
}

export default function Sidebar({onCreate, onShowProject, projects, selectedScreen}) {

    return (
        <aside className="bg-neutral-900 h-full rounded-tr-2xl min-w-96">
            <div className="py-24 px-12">
                <h2 className="text-neutral-200 uppercase font-semibold text-2xl mb-8">Your projects</h2>
                <button onClick={onCreate} className="text-neutral-100 bg-neutral-700 py-2 px-4 rounded-lg font-light opacity-50 hover:opacity-100">
                    + Add Project
                </button>
                <ul className="flex flex-col gap-2 mt-12">
                    {projects.map((project) => { 
                            let cssClasses = "font-light opacity-50 px-2 py-1 cursor-pointer";

                            if (project.id === selectedScreen.selectedProjectId) {
                                cssClasses += ' bg-stone-800 text-stone-200';
                            } else {
                                cssClasses += ' text-stone-400';
                            }

                            return (
                                <li onClick={() => onShowProject(project.id)} className={cssClasses} key={project.id}>
                                    {project.title}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </aside>
    );
}
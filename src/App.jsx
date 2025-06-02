import { useState } from "react";
import NewProject from "./components/NewProject";
import Sidebar from "./components/Sidebar";
import StartScreen from "./components/StartScreen";
import ProjectScreen from "./components/ProjectScreen";

function App() {
  const [selectedScreen, setSelectedScreen] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: [],
  });

  function handleCreateProject() {
    setSelectedScreen((prevSelection) => {
      return {
        ...prevSelection,
        selectedProjectId: null,
      };
    });
  }

  function handleCancelProject() {
    setSelectedScreen((prevSelection) => {
      return {
        ...prevSelection,
        selectedProjectId: undefined,
      };
    });
  }

  function handleShowProject(id) {
    setSelectedScreen((prevSelection) => {
      return {
        ...prevSelection,
        selectedProjectId: id,
      };
    });
  }

  function handleSaveProject(projectData) {
    setSelectedScreen((prevSelection) => {
      const newProject = {
        ...projectData,
        id: Math.random()
      }

      return {
        ...prevSelection,
        selectedProjectId: undefined,
        projects: [...prevSelection.projects, newProject]
      }
    });
  }

  function handleDeleteProject() {
    setSelectedScreen((prevSelection) => {
      const updatedProjects = prevSelection.projects.filter((project) => project.id !== selectedScreen.selectedProjectId);

      return {
        ...prevSelection,
        selectedProjectId: undefined,
        projects: updatedProjects,
      }
    })
  }

  function handleDeleteTask(taskId) {
    setSelectedScreen((prevSelection) => {
      return {
        ...prevSelection,
        tasks: prevSelection.tasks.filter((task) => task.id !== taskId)
      }
    })
  }

  function handleAddTask(text) {
    setSelectedScreen((prevSelection) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: prevSelection.selectedProjectId,
        id: taskId,
      }

      return {
        ...prevSelection,
        selectedProjectId: prevSelection.selectedProjectId,
        tasks: [newTask, ...prevSelection.tasks],
      };
    });
  }

  let content;

  if (selectedScreen.selectedProjectId === null) {
    content = <NewProject onClose={handleCancelProject} onCreate={handleSaveProject} />;
  } else if (selectedScreen.selectedProjectId === undefined) {
    content = <StartScreen onCreate={handleCreateProject} />;
  } else {
    const projectData = selectedScreen.projects.find((project) => project.id === selectedScreen.selectedProjectId);
    content = <ProjectScreen projectData={projectData} tasks={selectedScreen.tasks} onDelete={handleDeleteProject} onAddTask={handleAddTask} onDeleteTask={handleDeleteTask} />;
  }

  return (
    <>
      <div className={"pt-8 flex h-screen bg-neutral-100"}>
        <Sidebar onCreate={handleCreateProject} onShowProject={handleShowProject} selectedScreen={selectedScreen} projects={selectedScreen.projects} />
        <div className='flex-grow flex-col flex justify-center items-center'>
          {content}
        </div>
      </div>
    </>
  );
}

export default App;

import { useState } from 'react'
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import projectsData from './data/data';


function App() {
    const[projects, setProjects] = useState(projectsData);
    const[title, setTitle] = useState("");
    const[description, setDescription] = useState("");
    const[searchTerm, setSearchTerm] = useState("");

    function handleSubmit(e) {
        e.preventDefault ();

        if (!title.trim() || !description.trim()) {
            alert("Please fill in all fields");
            return;
        }

        const newProject = {
            id: Date.now(),
            title: title,
            description: description,
        };

        setProjects([...projects, newProject]);

        setTitle("");
        setDescription("");
    }

    const filteredProjects = projects.filter((project) =>
        project.title.toLowerCase().includes(searchTerm.toLowerCase()))
    
    return(
        <div className= "app">
            <Header />
            <ProjectForm
                title= {title}
                description= {description}
                setTitle={setTitle}
                setDescription={setDescription}
                handleSubmit={handleSubmit} 
            />
            <SearchBar
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
            />
            <ProjectList projects= {filteredProjects} />
            
        </div>
    );
}

export default App;

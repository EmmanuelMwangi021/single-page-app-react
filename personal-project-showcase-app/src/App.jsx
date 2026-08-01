import { useState } from 'react'
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';
import projectsData from './data/data';


function App() {
    const[projects, setProjects] = useState(projectsData);
    
    return(
        <div className= "app">
            <Header />
            <ProjectForm />
            <SearchBar />
            <ProjectList projects= {projects} />
            
        </div>
    );
}

export default App

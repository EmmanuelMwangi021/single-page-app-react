import { useState } from 'react'
import Header from "./components/Header";
import ProjectForm from "./components/ProjectForm";
import SearchBar from './components/SearchBar';
import ProjectCard from './components/ProjectCard';


function App() {
    return(
        <div className= "app">
            <Header />
            <ProjectForm />
            <SearchBar />
            
        </div>
    );
}

export default App

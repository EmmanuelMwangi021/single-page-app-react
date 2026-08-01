function ProjectForm({title, description, setTitle, setDescription, handleSubmit}) {
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Project</h2>

      <label htmlFor="title">Project Title</label>
      <input
        type="text"
        id="title"
        value= {title}
        onChange={(e) => 
          setTitle(e.target.value)}
        placeholder="Enter the project title"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) =>
          setDescription(e.target.value)}
        placeholder="Enter project description">
      </textarea>

      <button type="submit">
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;
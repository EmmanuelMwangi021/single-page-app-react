function ProjectForm() {
  return (
    <form>
      <h2>Add Project</h2>

      <label htmlFor="title">Project Title</label>
      <input
        type="text"
        id="title"
        placeholder="Enter project title"
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        placeholder="Enter project description"
      ></textarea>

      <button type="submit">
        Add Project
      </button>
    </form>
  );
}

export default ProjectForm;
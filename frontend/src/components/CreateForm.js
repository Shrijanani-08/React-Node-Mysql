import React, { useState } from 'react';
import axios from 'axios';
import { useQueries } from '@tanstack/react-query';
import DynamicInputs from './DynamicInputs';

const fetchProjects = async () => {
    const res = await axios.get("http://localhost:8000/project");
    return res.data;
  };
  
  const fetchRoles = async () => {
    const res = await axios.get("http://localhost:8000/role");
    return res.data;
  };
  
const CreateForm = () => {
  const [selectedProject, setSelectedProject] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  
  // Fetch projects and roles concurrently
  const queries = useQueries({
    queries: [
      {
        queryKey: ['projects'],
        queryFn: fetchProjects,
      },
      {
        queryKey: ['roles'],
        queryFn: fetchRoles,
      }
    ]
  });

  const [projectsQuery, rolesQuery] = queries;

  if (projectsQuery.isLoading || rolesQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (projectsQuery.error || rolesQuery.error) {
    return <div>Error: {projectsQuery.error?.message || rolesQuery.error?.message}</div>;
  }

  const projects = projectsQuery.data || [];
  const roles = rolesQuery.data || [];
//   const handleSelectedProject=(e)=>{
//     console.log(e.target.value)
//     setSelectedProject(e.target.value)
//   }

  return (
    <div className='p-3'>
      <div className='mb-3'>
      <label htmlFor="selectProject" className='me-3 text-white'>Select Project</label>
      <select
        name="selectProject"
        value={selectedProject}
        // onChange={ handleSelectedProject}
        onChange={(e) => setSelectedProject(e.target.value)}
        className="p-2 rounded-lg"
      >
        <option value="" disabled>Select a project</option>
        {projects.map((item) => (
          <option key={item.id} value={item.id}>
            {item.name}
          </option>
        ))}
      </select>
      </div>
      <div>
      <label htmlFor="selectRole" className='me-3 text-white'>Select Role</label>
      <select
        name="selectRole"
        value={selectedRole}
        onChange={(e) => setSelectedRole(e.target.value)}
        className="p-2 rounded-lg"
      >
        <option value="" disabled>Select a role</option>
        {roles.map((item) => (
          <option key={item.id} value={item.id}>
            {item.role}
          </option>
        ))}
      </select>
      </div>
      <DynamicInputs selectedRole={selectedRole} selectedProject={selectedProject} />
    </div>
  );
};

export default CreateForm;

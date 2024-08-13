import React,{useState, useRef} from 'react';
import { useMutation, useQueryClient,useQuery } from '@tanstack/react-query'; // Updated import
import axios from 'axios';

const fetchUniqueId = async () => {
  const response = await axios.get('http://localhost:8000/uniqueid');
  return response.data;
};
const postProject = async (project) => {
  const res = await axios.post("http://localhost:8000/project", project);
  return res.data;
};
const CreateProject = () => {
  const [showForm, setShowForm] = useState(false);

  // const [projectCode, setProjectCode] = useState('');
  // const [projectName, setProjectName] = useState('');
  const projectCodeRef = useRef();
  const projectNameRef = useRef();
  const queryClient = useQueryClient();

  const { data , isLoading, error } = useQuery({
    queryKey: ['uniqueId'],
    queryFn: fetchUniqueId,
    
  });
  
 
  const mutation = useMutation({
    mutationFn: postProject,
    onSuccess: () => {
      queryClient.invalidateQueries(['projects']);
      projectCodeRef.current.value = '';
      projectNameRef.current.value = '';
    },
  });
  const handleSubmit = (e) => {
    e.preventDefault();

    const project = {
      projectName:projectCodeRef.current.value,
      projectCode:projectNameRef.current.value
    };
    // try {
  //     await postProject(project);
  //     // alert('Project created successfully!');
  //     // setProjectName('');
  //     // setProjectCode('');
  //   } catch (error) {
  //     console.error('Error creating project:', error);
  //   }
  // };
  mutation.mutate(project);

    if (mutation.isSuccess) {
      projectCodeRef.current.value = '';
      projectNameRef.current.value = '';
    }
  }
  const project = data || [] 

  // const handleInputChange = (e) => {
    // if (e.target.name === 'projectName') {
    //   setProjectName(e.target.value);
    // } else if (e.target.name === 'projectCode') {
    //   setProjectCode(e.target.value);
    // }
  // };

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error fetching unique ID</p>;
  
  const handleCreateProjectClick = () => {
    setShowForm(true);
  };
  return (
    <div className='p-3'>
      <button className='text-white bg-teal-500 text-sm p-2 rounded-lg mb-4' type="submit" onClick={handleCreateProjectClick}>Create Project</button>
      {showForm && (
        <>
      <div className='mb-4'>
        <label htmlFor="projectName" className='me-3 text-white'> Project Name</label>
        <input
          type="text"
          name="projectName"
          defaultValue={project.proName}  
          className="p-2 rounded-lg"
          // onChange={ handleInputChange}
          ref={projectNameRef}
        />
      </div>
      <div>
        <label htmlFor="projectCode" className='me-3 text-white'> Project Code</label>
        <input
          type="text"
          name="projectCode"
          defaultValue={project.proCode}  
          className="p-2 rounded-lg"
          // onChange={handleInputChange}
          ref={projectCodeRef}
        />
      </div>
      <button className='text-white bg-teal-500 text-sm p-2 rounded-lg mt-3' type="submit" onClick={handleSubmit}>Submit</button>
      </>
      )}
     
    </div>
  );
};

export default CreateProject;

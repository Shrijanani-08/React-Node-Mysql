import React, { useState, useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query'; 
import axios from 'axios';

// Function to post a new role
const postRole = async (role) => {
  const res = await axios.post("http://localhost:8000/role", role);
  return res.data;
};

const CreateRole = () => {
  const [showForm, setShowForm] = useState(false);
  const roleRef = useRef();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postRole,
    onSuccess: () => {
      queryClient.invalidateQueries(['roles']); // Invalidate roles query if it exists
      roleRef.current.value = '';
      setShowForm(false); // Optionally hide the form after successful submission
    },
    onError: (error) => {
      console.error('Error posting role:', error);
    }
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const role = {
      role: roleRef.current.value,
    };
    mutation.mutate(role);
  };

  const handleCreateRoleClick = () => {
    setShowForm(true);
  };

  return (
    <div className='p-3'>
      <button 
        className='text-white bg-teal-500 text-sm p-2 rounded-lg mb-4'
        onClick={handleCreateRoleClick}
      >
        Create Role
      </button>
      {showForm && (
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <label htmlFor="role" className='me-3 text-white'>Role</label>
            <input
              type="text"
              name="role"
              defaultValue="" 
              className="p-2 rounded-lg"
              ref={roleRef}
            />
          </div>
          <button 
            className='text-white bg-teal-500 text-sm p-2 rounded-lg mt-3'
            type="submit"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default CreateRole;

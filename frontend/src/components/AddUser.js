import React, { useRef } from 'react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

const postUser = async (newUser) => {
  const res = await axios.post("http://localhost:8000/test", newUser);
  return res.data;
};

const AddUser = () => {
  const usernameRef = useRef();
  const emailRef = useRef();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: postUser,
    onSuccess: () => {
      queryClient.invalidateQueries(['users']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newUser = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
    };
    mutation.mutate(newUser);

    if (mutation.isSuccess) {
      usernameRef.current.value = '';
      emailRef.current.value = '';
    }
  };

  return (
    <>
      <h1 className='text-center text-white py-3'>Add User</h1>
      <form className='text-white p-5' onSubmit={handleSubmit}>
        <div className='flex justify-between mb-3'>
          <label for="username"> User Name</label>
          <input
            type="text"
            placeholder="name"
            name="username"
            ref={usernameRef}
          />
        </div>
        <div className='flex justify-between'>
          <label for="email">Email</label>
          <input
            type="email"
            placeholder="email"
            name="email"
            ref={emailRef}
          />
        </div>
        <div className='flex justify-center mt-5'>
          <button className='text-white bg-teal-500 text-sm p-2 rounded-lg' type="submit">Add User</button>
        </div>
      </form>
      {mutation.isLoading && <div>Loading...</div>}
      {mutation.isError && <div>Error: {mutation.error.message}</div>}
      {mutation.isSuccess && <div>User added successfully!</div>}
    </>
  );
};

export default AddUser;

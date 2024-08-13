// // import React from 'react';
// // import { useQuery } from '@tanstack/react-query';
// // import axios from 'axios';
// // import UpdateUser from './UpdateUser';

// // const fetchUsers = async ()=>{
// //   const res = await axios.get("http://localhost:8000/test");
// //   return res.data;
// // }
// // const deleteUser=async(id)=>{
// //   console.log(id)
// //   const res = await axios.delete(`http://localhost:8000/test/${id}`);
// //   window.location.reload();
// //   return res.data;
// // }

// // const ShowUser = () => {
// //   const { data, error, isLoading } = useQuery({
// //     queryKey: ['users'],
// //     queryFn: fetchUsers
// //   });

// //   if (isLoading) return <div>Loading...</div>;
// //   if (error) return <div>Error: {error.message}</div>;
  
 
// // return (
// // <>
// //   <h1>Users</h1>
// //   <ul>
// //     {data.map(user => (
// //       <li key={user.id}  className='flex justify-between'><p>{user.id}{user.name}</p> <span><UpdateUser/><button className='bg-rose-400 p-1 rounded-xl text-xs text-white'  onClick={()=>deleteUser(user.id)}>Delete</button></span></li>
// //     ))}
// //   </ul>
// // </>
// // )
// // }


// // export default ShowUser
// import React from 'react';
// import { useQuery, useQueryClient } from '@tanstack/react-query';
// import axios from 'axios';

// // Function to fetch users
// const fetchUsers = async () => {
//   const res = await axios.get("http://localhost:8000/test");
//   return res.data;
// };

// // Function to delete a user
// const deleteUser = async (id) => {
//   await axios.delete(`http://localhost:8000/test/${id}`);
// };

// const ShowUser = () => {
//   const queryClient = useQueryClient();

//   // Fetch users
//   const { data, error, isLoading, refetch } = useQuery({
//     queryKey: ['users'],
//     queryFn: fetchUsers
//   });

//   // Handle delete action
//   const handleDelete = async (id) => {
//     try {
//       await deleteUser(id);
//       // Refetch users after deletion
//       refetch();
//     } catch (error) {
//       console.error('Error deleting user:', error);
//     }
//   };

//   if (isLoading) return <div>Loading...</div>;
//   if (error) return <div>Error: {error.message}</div>;

//   return (
//     <>
//       <h1>Users</h1>
//       <ul>
//         {data.map((user,index) => (
//           <li key={user.id} className='flex justify-between'>
//             <p>{index+1} {user.name}</p>
//             <span>
//               <button
//                 className='bg-rose-400 p-1 rounded-xl text-xs text-white'
//                 onClick={() => handleUpdate(user.id)}
//               >
//                 Update
//               </button>
//               <button
//                 className='bg-rose-400 p-1 rounded-xl text-xs text-white'
//                 onClick={() => handleDelete(user.id)}
//               >
//                 Delete
//               </button>
//             </span>
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// };

// export default ShowUser;

import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';

// Function to fetch users
const fetchUsers = async () => {
  const res = await axios.get("http://localhost:8000/test");
  return res.data;
};

// Function to update a user
const updateUser = async (id, updatedUser) => {
  await axios.put(`http://localhost:8000/test/${id}`, updatedUser);
};

// Function to delete a user
const deleteUser = async (id) => {
  await axios.delete(`http://localhost:8000/test/${id}`);
};

const ShowUser = () => {
  const queryClient = useQueryClient();
  const [editUserId, setEditUserId] = useState(null);
  const [newUserName, setNewUserName] = useState("");

  // Fetch users
  const { data, error, isLoading, refetch } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  });

  // Handle delete action
  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      refetch();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  // Handle update action
  const handleUpdate = (id, name) => {
    setEditUserId(id);
    setNewUserName(name);
  };

  // Handle save action
  const handleSave = async (id) => {
    try {
      await updateUser(id, { username: newUserName });
      refetch();
      setEditUserId(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      <h1  className='text-center text-white py-3'>Users</h1>
      <ul className='p-5'>
        {data.map((user, index) => (
          <li key={user.id} className='flex justify-between'>
            <div>
              {editUserId === user.id ? (
                <input
                  type="text"
                  value={newUserName}
                  onChange={(e) => setNewUserName(e.target.value)}
                />
              ) : (
                <p className='text-white'>{index + 1}. {user.name}</p>
              )}
            </div>
            <span>
              {editUserId === user.id ? (
                <button
                  className='bg-green-400 p-1 rounded-xl text-xs text-white'
                  onClick={() => handleSave(user.id)}
                >
                  Save
                </button>
              ) : (
                <button
                  className='bg-lime-700 p-1 rounded-xl text-xs text-white'
                  onClick={() => handleUpdate(user.id, user.name)}
                >
                  Update
                </button>
              )}
              <button
                className='bg-rose-500 p-1 rounded-xl text-xs text-white'
                onClick={() => handleDelete(user.id)}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowUser;

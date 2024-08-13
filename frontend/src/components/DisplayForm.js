// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DisplayForm=({projectId,roleId})=> {
//   const [formData, setFormData] = useState(null);
// //   const projectId=19;
// //   const roleId=5;
//   useEffect(() => {
//     axios.get(`http://localhost:8000/getform/${projectId}/${roleId}`)
//     .then((response) => {
//       const data = JSON.parse(response.data);
//       setFormData(data);
//     })
//     .catch((error) => {
//       console.error('There was an error fetching the form data!', error);
//     });
//   }, [projectId, roleId]);

//   if (!formData) return <p>Loading form...</p>;

//   return (
//       <>
//       {roleId === 5 && 
//         <h4 className='text-white text-center pt-3'>Coder</h4>}
//       {roleId === 4 && 
//         <h4 className='text-white text-center pt-3'>Auditor</h4>}
//     <form>
//       {formData.inputs.map((input, index) => (
//         <div key={index} className='p-3'>
//           <label className='text-white me-4'>{input.label}</label>
//           {input.type === 'select' && (
//             <select>
//               {input.options.map((option, idx) => (
//                 <option key={idx} value={option}>{option}</option>
//               ))}
//             </select>
//           )}
//           {input.type === 'checkbox' && (
//             <>
//               {input.options.map((option, idx) => (
//                 <div key={idx}>
//                   <input type="checkbox" id={`checkbox-${idx}`} name={input.label} value={option} />
//                   <label htmlFor={`checkbox-${idx}`}>{option}</label>
//                 </div>
//               ))}
//             </>
//           )}
//           {input.type === 'radio' && (
//             <>
//               {input.options.map((option, idx) => (
//                 <div key={idx}>
//                   <input type="radio" id={`radio-${idx}`} name={input.label} value={option} />
//                   <label className='text-white me-4' htmlFor={`radio-${idx}`}>{option}</label>
//                 </div>
//               ))}
//             </>
//           )}
//           {['text', 'textarea', 'date', 'email'].includes(input.type) && (
//             <input
//               type={input.type}
//               placeholder={input.placeholder || ''}
//             />
//           )}
//           {/* Handle other input types as needed */}
//         </div>
//       ))}
//       <div className='flex justify-center mb-4'>
//         <button className='text-white bg-teal-500 text-sm p-2 rounded-lg mt-3' type="submit">Submit</button>
//       </div>
//     </form>
//       </>
//   );
// }

// export default DisplayForm;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const DisplayForm = ({ projectId, roleId }) => {
//   const [formData, setFormData] = useState(null);
//   const [formValues, setFormValues] = useState({});

//   useEffect(() => {
//     axios.get(`http://localhost:8000/getform/${projectId}/${roleId}`)
//       .then((response) => {
//         const data = JSON.parse(response.data);
//         setFormData(data);
//       })
//       .catch((error) => {
//         console.error('There was an error fetching the form data!', error);
//       });
//   }, [projectId, roleId]);

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8000/saveformdata', {
//       projectId,
//       roleId,
//       formValues,
//     })
//       .then((response) => {
//         console.log('Form data saved successfully:', response.data);
//       })
//       .catch((error) => {
//         console.error('There was an error saving the form data!', error);
//       });
//   };

//   if (!formData) return <p>Loading form...</p>;

//   return (
//     <>
//       {roleId === 5 && <h4 className='text-white text-center pt-3'>Coder</h4>}
//       {roleId === 4 && <h4 className='text-white text-center pt-3'>Auditor</h4>}
//       <form onSubmit={handleSubmit}>
//         {formData.inputs.map((input, index) => (
//           <div key={index} className='p-3'>
//             <label className='text-white me-4'>{input.label}</label>
//             {input.type === 'select' && (
//               <select name={input.label} onChange={handleChange}>
//                 {input.options.map((option, idx) => (
//                   <option key={idx} value={option}>{option}</option>
//                 ))}
//               </select>
//             )}
//             {input.type === 'checkbox' && (
//               <>
//                 {input.options.map((option, idx) => (
//                   <div key={idx}>
//                     <input
//                       type="checkbox"
//                       id={`checkbox-${idx}`}
//                       name={input.label}
//                       value={option}
//                       onChange={handleChange}
//                     />
//                     <label htmlFor={`checkbox-${idx}`}>{option}</label>
//                   </div>
//                 ))}
//               </>
//             )}
//             {input.type === 'radio' && (
//               <>
//                 {input.options.map((option, idx) => (
//                   <div key={idx}>
//                     <input
//                       type="radio"
//                       id={`radio-${idx}`}
//                       name={input.label}
//                       value={option}
//                       onChange={handleChange}
//                     />
//                     <label className='text-white me-4' htmlFor={`radio-${idx}`}>{option}</label>
//                   </div>
//                 ))}
//               </>
//             )}
//             {['text', 'textarea', 'date', 'email'].includes(input.type) && (
//               <input
//                 type={input.type}
//                 name={input.label}
//                 placeholder={input.placeholder || ''}
//                 onChange={handleChange}
//               />
//             )}
//           </div>
//         ))}
//         <div className='flex justify-center mb-4'>
//           <button className='text-white bg-teal-500 text-sm p-2 rounded-lg mt-3' type="submit">Submit</button>
//         </div>
//       </form>
//     </>
//   );
// };

// export default DisplayForm;
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayForm = ({ projectId, roleId }) => {
  const [formData, setFormData] = useState(null);
  const [formValues, setFormValues] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:8000/getform/${projectId}/${roleId}`)
      .then((response) => {
        const data = JSON.parse(response.data);
        setFormData(data);

        // Initialize formValues based on formData
        const initialValues = {};
        data.inputs.forEach(input => {
          initialValues[input.label] = ''; // Default value for each input
        });
        setFormValues(initialValues);
      })
      .catch((error) => {
        console.error('There was an error fetching the form data!', error);
      });
  }, [projectId, roleId]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/saveformdata', {
      projectId,
      roleId,
      formValues,
    })
      .then((response) => {
        console.log('Form data saved successfully:', response.data);
        // Reset form values after successful submission
        const resetValues = {};
        for (const key in formValues) {
          resetValues[key] = '';
        }
        setFormValues(resetValues);
      })
      .catch((error) => {
        console.error('There was an error saving the form data!', error);
      });
  };

  if (!formData) return <p>Loading form...</p>;

  return (
    <>
      {roleId === 5 && <h4 className='text-white text-center pt-3'>Coder</h4>}
      {roleId === 4 && <h4 className='text-white text-center pt-3'>Auditor</h4>}
      <form onSubmit={handleSubmit}>
        {formData.inputs.map((input, index) => (
          <div key={index} className='p-3'>
            <label className='text-white me-4'>{input.label}</label>
            {input.type === 'select' && (
              <select
                name={input.label}
                value={formValues[input.label] || ''}
                onChange={handleChange}
              >
                {input.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            )}
            {input.type === 'checkbox' && (
              <>
                {input.options.map((option, idx) => (
                  <div key={idx}>
                    <input
                      type="checkbox"
                      id={`checkbox-${idx}`}
                      name={input.label}
                      value={option}
                      checked={formValues[input.label] && formValues[input.label].includes(option)}
                      onChange={handleChange}
                    />
                    <label htmlFor={`checkbox-${idx}`}>{option}</label>
                  </div>
                ))}
              </>
            )}
            {input.type === 'radio' && (
              <>
                {input.options.map((option, idx) => (
                  <div key={idx}>
                    <input
                      type="radio"
                      id={`radio-${idx}`}
                      name={input.label}
                      value={option}
                      checked={formValues[input.label] === option}
                      onChange={handleChange}
                    />
                    <label className='text-white me-4' htmlFor={`radio-${idx}`}>{option}</label>
                  </div>
                ))}
              </>
            )}
            {['text', 'textarea', 'date', 'email'].includes(input.type) && (
              <input
                type={input.type}
                name={input.label}
                value={formValues[input.label] || ''}
                placeholder={input.placeholder || ''}
                onChange={handleChange}
              />
            )}
          </div>
        ))}
        <div className='flex justify-center mb-4'>
          <button className='text-white bg-teal-500 text-sm p-2 rounded-lg mt-3' type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default DisplayForm;

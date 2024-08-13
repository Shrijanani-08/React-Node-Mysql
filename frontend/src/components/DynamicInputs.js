// import React, { useState } from 'react';
// import InputSpecificationModal from './InputSpecificationModal'; // Import the modal component

// function DynamicInputs() {
//   const [inputs, setInputs] = useState([]);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const handleAddInput = () => {
//     setIsModalOpen(true);
//   };

//   const handleSaveInput = (specifications) => {
//     setInputs([...inputs, { id: Date.now(), ...specifications }]);
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     console.log(inputs);
//     // You can send `inputs` to the backend using fetch or axios
//   };

//   return (
//     <>
//       <h1 className='text-center text-white py-3'>Dynamic Form</h1>
//       <form className='p-3' onSubmit={handleSubmit}>
//         {inputs.map(input => (
//           <div key={input.id} className='text-white my-3'>
//             <label htmlFor={`input-${input.id}`} className='me-3'>
//               {input.label}
//             </label>
//             {input.inputType === 'select' ? (
//               <select
//                 id={`input-${input.id}`}
//                 placeholder={input.placeholder}
//                 className='p-2 rounded-lg text-black'
//               >
//                 {input.options.map((option, index) => (
//                   <option key={index} value={option} className='text-black'>
//                     {option}
//                   </option>
//                 ))}
//               </select>
//             ) : input.inputType === 'textarea' ? (
//               <textarea
//                 id={`input-${input.id}`}
//                 placeholder={input.placeholder}
//                 className='p-2 rounded-lg'
//               />
//             ) : input.inputType === 'checkbox' || input.inputType === 'radio' ? (
//               input.options.map((option, index) => (
//                 <div key={index} className='flex items-center'>
//                   <input
//                     type={input.inputType}
//                     id={`input-${input.id}-${index}`}
//                     className='mr-2'
//                   />
//                   <label htmlFor={`input-${input.id}-${index}`} className='mr-4'>
//                     {option}
//                   </label>
//                 </div>
//               ))
//             ) : input.inputType === 'file' ? (
//               <input
//                 type={input.inputType}
//                 id={`input-${input.id}`}
//                 className='p-2 rounded-lg'
//               />
//             ) : (
//               <input
//                 type={input.inputType}
//                 id={`input-${input.id}`}
//                 placeholder={input.placeholder}
//                 className='p-2 rounded-lg'
//               />
//             )}
//           </div>
//         ))}
//         <div className='flex justify-around mt-5'>
//           <button
//             type="button"
//             className='text-white bg-teal-500 text-sm p-2 rounded-lg'
//             onClick={handleAddInput}
//           >
//             Add Input Field
//           </button>
//           <button
//             className='text-white bg-teal-500 text-sm p-2 rounded-lg'
//             type="submit"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//       <InputSpecificationModal
//         isOpen={isModalOpen}
//         onClose={() => setIsModalOpen(false)}
//         onSave={handleSaveInput}
//       />
//     </>
//   );
// }

// export default DynamicInputs;
// import React, { useState } from 'react';
// import axios from 'axios';

// function DynamicInputs() {
//   const [inputType, setInputType] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [inputs, setInputs] = useState([]);
//   const [role, setRole] = useState('');
//   const [roles, setRoles] = useState(['manager', 'project head', 'project lead', 'auditor', 'coder']); // Example roles

//   const inputTypes = [
//     'text', 'number', 'select', 'radio', 'checkbox', 'range',
//     'date', 'file', 'button', 'email', 'image', 'reset',
//     'submit', 'textarea', 'datetime-local', 'week'
//   ];

//   const handleInputTypeSelect = (type) => {
//     setInputType(type);
//     setShowPopup(true);
//   };

//   const handleAddInput = (inputConfig) => {
//     setInputs([...inputs, inputConfig]);
//     setShowPopup(false);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:5000/api/submit-form', { inputs, role })
//       .then((response) => {
//         alert('Form submitted successfully');
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error('There was an error submitting the form!', error);
//       });
//   };

//   return (
//     <div className='p-3'>
//       <button 
//         className='text-white bg-teal-500 text-sm p-2 rounded-lg mb-4' 
//         onClick={() => setShowPopup(true)}
//       >
//         Create Form
//       </button>

//       <form onSubmit={handleSubmit}>
//         <label className='text-white'>Select Role</label>
//         <select 
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="">--Select Role--</option>
//           {roles.map(role => (
//             <option key={role} value={role}>{role}</option>
//           ))}
//         </select>

//         {showPopup && (
//           <div className="popup">
//             <h3 className='text-white'>Select Input Type</h3>
//             <select 
//               value={inputType} 
//               onChange={(e) => handleInputTypeSelect(e.target.value)}
//             >
//               <option value="">--Select Input Type--</option>
//               {inputTypes.map(type => (
//                 <option key={type} value={type}>{type}</option>
//               ))}
//             </select>

//             {inputType && (
//               <PopupForm 
//                 inputType={inputType} 
//                 onSubmit={handleAddInput} 
//                 onCancel={() => setShowPopup(false)}
//               />
//             )}
//           </div>
//         )}

//         {inputs.map((input, index) => (
//           <div key={index} className="generated-input">
//             <label className='text-white'>{input.label}</label>
            
//             {input.type === 'select' && (
//               <select>
//                 {input.options.map((option, idx) => (
//                   <option key={idx} value={option}>{option}</option>
//                 ))}
//               </select>
//             )}

//             {input.type === 'checkbox' && (
//               <>
//                 {input.options.map((option, idx) => (
//                   <div key={idx}>
//                     <input type="checkbox" id={`checkbox-${idx}`} name={input.label} value={option} />
//                     <label htmlFor={`checkbox-${idx}`}>{option}</label>
//                   </div>
//                 ))}
//               </>
//             )}

//             {input.type === 'radio' && (
//               <>
//                 {input.options.map((option, idx) => (
//                   <div key={idx}>
//                     <input type="radio" id={`radio-${idx}`} name={input.label} value={option} />
//                     <label htmlFor={`radio-${idx}`}>{option}</label>
//                   </div>
//                 ))}
//               </>
//             )}

//             {['text', 'textarea', 'date', 'email'].includes(input.type) && (
//               <input className='text-white'
//                 type={input.type} 
//                 placeholder={input.placeholder || ''} 
//                 {...input.additionalProps} 
//               />
//             )}

//             {input.type !== 'select' && input.type !== 'checkbox' && input.type !== 'radio' && !['text', 'textarea', 'date', 'email'].includes(input.type) && (
//               <input className='text-white'
//                 type={input.type} 
//                 {...input.additionalProps} 
//               />
//             )}
//           </div>
//         ))}
//         <button className='text-white bg-teal-500 text-sm p-2 rounded-lg' type="submit">Submit Form</button>
//       </form>
//     </div>
//   );
// }

// function PopupForm({ inputType, onSubmit, onCancel }) {
//   const [label, setLabel] = useState('');
//   const [placeholder, setPlaceholder] = useState('');
//   const [options, setOptions] = useState(['']);

//   const handleSubmit = () => {
//     const inputConfig = { type: inputType, label };

//     if (['text', 'textarea', 'date', 'email'].includes(inputType)) {
//       inputConfig.placeholder = placeholder;
//     }

//     if (inputType === 'select' || inputType === 'checkbox' || inputType === 'radio') {
//       inputConfig.options = options;
//     }

//     onSubmit(inputConfig);
//   };

//   const handleAddOption = () => {
//     setOptions([...options, '']);
//   };

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...options];
//     newOptions[index] = value;
//     setOptions(newOptions);
//   };

//   return (
//     <div className="popup-form">
//       <h3>Configure {inputType}</h3>
//       <input className='text-white'
//         type="text" 
//         placeholder="Label" 
//         value={label} 
//         onChange={(e) => setLabel(e.target.value)} 
//       />

//       {['text', 'textarea', 'date', 'email'].includes(inputType) && (
//         <input className='text-white'
//           type="text" 
//           placeholder="Placeholder" 
//           value={placeholder} 
//           onChange={(e) => setPlaceholder(e.target.value)} 
//         />
//       )}

//       {(inputType === 'select' || inputType === 'checkbox' || inputType === 'radio') && (
//         <>
//           <h4 className='text-white'>Options</h4>
//           {options.map((option, index) => (
//             <input className='text-white'
//               key={index} 
//               type="text" 
//               placeholder={`Option ${index + 1}`} 
//               value={option} 
//               onChange={(e) => handleOptionChange(index, e.target.value)} 
//             />
//           ))}
//           <button className='text-white' onClick={handleAddOption}>Add Option</button>
//         </>
//       )}

//       <div>
//         <button className='text-white' onClick={handleSubmit}>Submit</button>
//         <button className='text-white' onClick={onCancel}>Cancel</button>
//       </div>
//     </div>
//   );
// }

// export default DynamicInputs
// import React, { useState } from 'react';
// import axios from 'axios';

// function DynamicInputs({selectedRole,selectedProject}) {
//   const [inputType, setInputType] = useState('');
//   const [showPopup, setShowPopup] = useState(false);
//   const [inputs, setInputs] = useState([]);

//   const inputTypes = [
//     'text', 'number', 'select', 'radio', 'checkbox', 'range',
//     'date', 'file', 'button', 'email', 'image', 'reset',
//     'submit', 'textarea', 'datetime-local', 'week'
//   ];
// console.log(selectedRole,selectedProject)
//   const handleInputTypeSelect = (type) => {
//     setInputType(type);
//     setShowPopup(true);
//   };

//   const handleAddInput = (inputConfig) => {
//     setInputs([...inputs, inputConfig]);
//     setShowPopup(false);
//   };
//   const data={
//     selectedRole,selectedProject
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post('http://localhost:8000/submitform',data, { inputs },)
//       .then((response) => {
//         alert('Form submitted successfully');
//         console.log(response.data);
//       })
//       .catch((error) => {
//         console.error('There was an error submitting the form!', error);
//       });
//   };

//   return (
//     <div className='p-3'>
//       <button 
//         className='text-white bg-teal-500 text-sm p-2 rounded-lg mb-4' 
//         onClick={() => setShowPopup(true)}
//       >
//         Create Form
//       </button>

//       <form onSubmit={handleSubmit}>
//         {showPopup && (
//           <div className="popup">
//             <h3 className='text-white'>Select Input Type</h3>
//             <select 
//               value={inputType} 
//               onChange={(e) => handleInputTypeSelect(e.target.value)}
//             >
//               <option value="">--Select Input Type--</option>
//               {inputTypes.map(type => (
//                 <option key={type} value={type}>{type}</option>
//               ))}
//             </select>

//             {inputType && (
//               <PopupForm 
//                 inputType={inputType} 
//                 onSubmit={handleAddInput} 
//                 onCancel={() => setShowPopup(false)}
//               />
//             )}
//           </div>
//         )}

//         {inputs.map((input, index) => (
//           <div key={index} className="generated-input">
//             <label className='text-white'>{input.label}</label>
            
//             {input.type === 'select' && (
//               <select>
//                 {input.options.map((option, idx) => (
//                   <option key={idx} value={option}>{option}</option>
//                 ))}
//               </select>
//             )}

//             {input.type === 'checkbox' && (
//               <>
//                 {input.options.map((option, idx) => (
//                   <div key={idx}>
//                     <input type="checkbox" id={`checkbox-${idx}`} name={input.label} value={option} />
//                     <label htmlFor={`checkbox-${idx}`}>{option}</label>
//                   </div>
//                 ))}
//               </>
//             )}

//             {input.type === 'radio' && (
//               <>
//                 {input.options.map((option, idx) => (
//                   <div key={idx}>
//                     <input type="radio" id={`radio-${idx}`} name={input.label} value={option} />
//                     <label htmlFor={`radio-${idx}`}>{option}</label>
//                   </div>
//                 ))}
//               </>
//             )}

//             {['text', 'textarea', 'date', 'email'].includes(input.type) && (
//               <input className='text-white'
//                 type={input.type} 
//                 placeholder={input.placeholder || ''} 
//                 {...input.additionalProps} 
//               />
//             )}

//             {input.type !== 'select' && input.type !== 'checkbox' && input.type !== 'radio' && !['text', 'textarea', 'date', 'email'].includes(input.type) && (
//               <input className='text-white'
//                 type={input.type} 
//                 {...input.additionalProps} 
//               />
//             )}
//           </div>
//         ))}
//         <button className='text-white bg-teal-500 text-sm p-2 rounded-lg' type="submit">Submit Form</button>
//       </form>
//     </div>
//   );
// }

// function PopupForm({ inputType, onSubmit, onCancel }) {
//   const [label, setLabel] = useState('');
//   const [placeholder, setPlaceholder] = useState('');
//   const [options, setOptions] = useState(['']);

//   const handleSubmit = () => {
//     const inputConfig = { type: inputType, label };

//     if (['text', 'textarea', 'date', 'email'].includes(inputType)) {
//       inputConfig.placeholder = placeholder;
//     }

//     if (inputType === 'select' || inputType === 'checkbox' || inputType === 'radio') {
//       inputConfig.options = options;
//     }

//     onSubmit(inputConfig);
//   };

//   const handleAddOption = () => {
//     setOptions([...options, '']);
//   };

//   const handleOptionChange = (index, value) => {
//     const newOptions = [...options];
//     newOptions[index] = value;
//     setOptions(newOptions);
//   };

//   return (
//     <div className="popup-form">
//       <h3 className='text-white'>Configure {inputType}</h3>
//       <input className='text-black'
//         type="text" 
//         placeholder="Label" 
//         value={label} 
//         onChange={(e) => setLabel(e.target.value)} 
//       />

//       {['text', 'textarea', 'date', 'email'].includes(inputType) && (
//         <input className='text-black'
//           type="text" 
//           placeholder="Placeholder" 
//           value={placeholder} 
//           onChange={(e) => setPlaceholder(e.target.value)} 
//         />
//       )}

//       {(inputType === 'select' || inputType === 'checkbox' || inputType === 'radio') && (
//         <>
//           <h4 className='text-white'>Options</h4>
//           {options.map((option, index) => (
//             <input className='text-black'
//               key={index} 
//               type="text" 
//               placeholder={`Option ${index + 1}`} 
//               value={option} 
//               onChange={(e) => handleOptionChange(index, e.target.value)} 
//             />
//           ))}
//           <button className='text-white' onClick={handleAddOption}>Add Option</button>
//         </>
//       )}

//       <div>
//         <button className='text-white' onClick={handleSubmit}>Submit</button>
//         <button className='text-white' onClick={onCancel}>Cancel</button>
//       </div>
//     </div>
//   );
// }

// export default DynamicInputs;

import React, { useState } from 'react';
import axios from 'axios';

function DynamicInputs({ selectedRole, selectedProject }) {
  const [inputType, setInputType] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [inputs, setInputs] = useState([]);

  const inputTypes = [
    'text', 'number', 'select', 'radio', 'checkbox', 'range',
    'date', 'file', 'button', 'email', 'image', 'reset',
    'submit', 'textarea', 'datetime-local', 'week'
  ];

  const handleInputTypeSelect = (type) => {
    setInputType(type);
    setShowPopup(true);
  };

  const handleAddInput = (inputConfig) => {
    setInputs([...inputs, inputConfig]);
    setShowPopup(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Collect form data
    const formData = {
      project: selectedProject,
      role: selectedRole,
      formdata:{inputs}
    };

    axios.post('http://localhost:8000/submitform', formData)
      .then((response) => {
        alert('Form submitted successfully');
        console.log(response.data);
      })
      .catch((error) => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <div className='p-3'>
      <button 
        className='text-white bg-teal-500 text-sm p-2 rounded-lg mb-4' 
        onClick={() => setShowPopup(true)}
        type="button"  // Added type="button" here
      >
        Create Form
      </button>

      <form onSubmit={handleSubmit}>
        {showPopup && (
          <div className="popup">
            <h3 className='text-white'>Select Input Type</h3>
            <select 
              value={inputType} 
              onChange={(e) => handleInputTypeSelect(e.target.value)}
            >
              <option value="">--Select Input Type--</option>
              {inputTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>

            {inputType && (
              <PopupForm 
                inputType={inputType} 
                onSubmit={handleAddInput} 
                onCancel={() => setShowPopup(false)}
              />
            )}
          </div>
        )}

        {inputs.map((input, index) => (
          <div key={index} className="generated-input">
            <label className='text-white'>{input.label}</label>
            
            {input.type === 'select' && (
              <select id={`input-${input.label}`}>
                {input.options.map((option, idx) => (
                  <option key={idx} value={option}>{option}</option>
                ))}
              </select>
            )}

            {input.type === 'checkbox' && (
              <>
                {input.options.map((option, idx) => (
                  <div key={idx}>
                    <input type="checkbox" id={`checkbox-${input.label}-${idx}`} name={input.label} value={option} />
                    <label  className="text-white" htmlFor={`checkbox-${input.label}-${idx}`}>{option}</label>
                  </div>
                ))}
              </>
            )}

            {input.type === 'radio' && (
              <>
                {input.options.map((option, idx) => (
                  <div key={idx}>
                    <input type="radio" id={`radio-${input.label}-${idx}`} name={input.label} value={option} />
                    <label  className="text-white" htmlFor={`radio-${input.label}-${idx}`}>{option}</label>
                  </div>
                ))}
              </>
            )}

            {['text', 'textarea', 'date', 'email', 'number', 'range', 'datetime-local', 'week'].includes(input.type) && (
              <input
                id={`input-${input.label}`}
                className='text-white'
                type={input.type} 
                placeholder={input.placeholder || ''} 
                {...input.additionalProps} 
              />
            )}

            {input.type === 'file' && (
              <input
                id={`input-${input.label}`}
                className='text-white'
                type="file" 
                {...input.additionalProps} 
              />
            )}

            {/* Handle other input types as needed */}
          </div>
        ))}
        <button className='text-white bg-teal-500 text-sm p-2 rounded-lg' type="submit">Submit Form</button>
      </form>
    </div>
  );
}

function PopupForm({ inputType, onSubmit, onCancel }) {
  const [label, setLabel] = useState('');
  const [placeholder, setPlaceholder] = useState('');
  const [options, setOptions] = useState(['']);

  const handleSubmit = () => {
    if (!label) {
      alert('Please provide a label for the input.');
      return;
    }

    const inputConfig = { type: inputType, label };

    if (['text', 'textarea', 'date', 'email', 'number', 'range', 'datetime-local', 'week'].includes(inputType)) {
      inputConfig.placeholder = placeholder;
    }

    if (inputType === 'select' || inputType === 'checkbox' || inputType === 'radio') {
      inputConfig.options = options.filter(option => option.trim() !== '');
    }

    onSubmit(inputConfig);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <div className="popup-form">
      <h3 className='text-white'>Configure {inputType}</h3>
      <input className='text-black'
        type="text" 
        placeholder="Label" 
        value={label} 
        onChange={(e) => setLabel(e.target.value)} 
      />

      {['text', 'textarea', 'date', 'email', 'number', 'range', 'datetime-local', 'week'].includes(inputType) && (
        <input className='text-black'
          type="text" 
          placeholder="Placeholder" 
          value={placeholder} 
          onChange={(e) => setPlaceholder(e.target.value)} 
        />
      )}

      {(inputType === 'select' || inputType === 'checkbox' || inputType === 'radio') && (
        <>
          <h4 className='text-white'>Options</h4>
          {options.map((option, index) => (
            <input className='text-black'
              key={index} 
              type="text" 
              placeholder={`Option ${index + 1}`} 
              value={option} 
              onChange={(e) => handleOptionChange(index, e.target.value)} 
            />
          ))}
          <button className='text-white' onClick={handleAddOption} type="button">Add Option</button>
        </>
      )}

      <div>
        <button className='text-white' onClick={handleSubmit} type="button">Submit</button>
        <button className='text-white' onClick={onCancel} type="button">Cancel</button>
      </div>
    </div>
  );
}

export default DynamicInputs;

import React, { useState } from 'react';

const InputSpecificationModal = ({ isOpen, onClose, onSave }) => {
  const [inputType, setInputType] = useState('text');
  const [placeholder, setPlaceholder] = useState('');
  const [label, setLabel] = useState('');
  const [options, setOptions] = useState(['']); // For select, radio, checkbox
  const [newOption, setNewOption] = useState('');

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption.trim()]);
      setNewOption('');
    }
  };

  const handleSave = () => {
    onSave({ inputType, placeholder, label, options });
    setInputType('text');
    setPlaceholder('');
    setLabel('');
    setOptions(['']);
    setNewOption('');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 '>
      <div className='bg-white p-5 rounded-lg shadow-lg'>
        <h2 className='text-xl mb-4'>Input Specifications</h2>
        <div className='mb-4'>
          <label className='block mb-2'>Type</label>
          <select
            value={inputType}
            onChange={(e) => setInputType(e.target.value)}
            className='p-2 border border-gray-300 rounded'
          >
            <option value='text'>Text</option>
            <option value='number'>Number</option>
            <option value='email'>Email</option>
            <option value='password'>Password</option>
            <option value='select'>Select</option>
            <option value='radio'>Radio</option>
            <option value='checkbox'>Checkbox</option>
            <option value='range'>Range</option>
            <option value='date'>Date</option>
            <option value='file'>File</option>
            <option value='button'>Button</option>
            <option value='image'>Image</option>
            <option value='reset'>Reset</option>
            <option value='submit'>Submit</option>
            <option value='textarea'>Textarea</option>
            <option value='datetime-local'>Datetime Local</option>
            <option value='week'>Week</option>
          </select>
        </div>
        {inputType !== 'button' && inputType !== 'submit' && inputType !== 'reset' && (
          <>
            <div className='mb-4'>
              <label className='block mb-2'>Label</label>
              <input
                type='text'
                value={label}
                onChange={(e) => setLabel(e.target.value)}
                className='p-2 border border-gray-300 rounded'
              />
            </div>
            <div className='mb-4'>
              <label className='block mb-2'>Placeholder</label>
              <input
                type='text'
                value={placeholder}
                onChange={(e) => setPlaceholder(e.target.value)}
                className='p-2 border border-gray-300 rounded'
              />
            </div>
          </>
        )}
        {(inputType === 'select' || inputType === 'radio' || inputType === 'checkbox') && (
          <>
            <div className='mb-4'>
              <label className='block mb-2'>Options</label>
              {options.map((option, index) => (
                <div key={index} className='flex mb-2'>
                  <input
                    type='text'
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                    className='p-2 border border-gray-300 rounded mr-2'
                  />
                  <button
                    type='button'
                    onClick={() => setOptions(options.filter((_, i) => i !== index))}
                    className='text-red-500'
                  >
                    Remove
                  </button>
                </div>
              ))}
              <div className='flex mb-4'>
                <input
                  type='text'
                  value={newOption}
                  onChange={(e) => setNewOption(e.target.value)}
                  className='p-2 border border-gray-300 rounded mr-2'
                  placeholder='New option'
                />
                <button
                  type='button'
                  onClick={handleAddOption}
                  className='bg-teal-500 text-white px-4 py-2 rounded'
                >
                  Add Option
                </button>
              </div>
            </div>
          </>
        )}
        <div className='flex justify-end'>
          <button
            type='button'
            onClick={handleSave}
            className='bg-teal-500 text-white px-4 py-2 rounded mr-2'
          >
            Save
          </button>
          <button
            type='button'
            onClick={onClose}
            className='bg-gray-500 text-white px-4 py-2 rounded'
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default InputSpecificationModal;

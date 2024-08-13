import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DisplayTables = ({ projectId, roleId }) => {
  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/getformdata/${projectId}/${roleId}`)
      .then((response) => {
        setFormData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('There was an error fetching the form data!', error);
        setError(error);
        setLoading(false);
      });
  }, [projectId, roleId]);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error loading data: {error.message}</p>;

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg py-5">
        {roleId === 5 && <h4 className='text-white text-center pt-3'>Coder Form</h4>}
        {roleId === 4 && <h4 className='text-white text-center pt-3'>Auditor Form</h4>}
      {/* <h4 className='text-white text-center pt-3'>Form Data</h4> */}
      <table className='w-full text-sm text-left rtl:text-right text-white'>
        <thead>
          <tr>
            {Object.keys(formData[0] || {}).map((key, index) => (
              <th scope="col" key={index} className='px-4 py-2'>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {formData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {Object.keys(row).map((key, cellIndex) => (
                <td key={cellIndex} className='border px-4 py-2'>{row[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  );
};

export default DisplayTables;

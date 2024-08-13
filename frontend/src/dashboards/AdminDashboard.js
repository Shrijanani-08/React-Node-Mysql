import React from 'react'
import Header from '../components/Header'
import ShowUser from '../components/ShowUser';
import AddUser from '../components/AddUser';
import CreateProject from '../components/CreateProject';
import CreateForm from '../components/CreateForm';
import CreateRole from '../components/CreateRole';
import DisplayForm from '../components/DisplayForm';
import DisplayTables from '../components/DisplayTable';


const AdminDashboard = () => {
    
    return (
    <>
      <div className='w-full ps-4 mx-0'>
          <Header/>
          <div className='grid grid-cols-4 gap-4 w-full mb-4'>
            <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>
              <AddUser/>
            </div>
            <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>
              <ShowUser/>
            </div>
            <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>
              {/* <DynamicInputs/> */}
              <CreateProject/>
            </div>
            <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>
              <CreateRole/>
            </div>
          </div>
          <div className='grid grid-cols-3 gap-4 w-full mb-4'>
            <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>
              <CreateForm/>
            </div>
            <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>
              <DisplayForm roleId={5} projectId={19}/>
            </div>
            <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>
              <DisplayForm roleId={4} projectId={19}/>
            </div>
          </div>
          <div className='grid grid-cols-2 gap-4 w-full mb-4'>
            <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>
            <DisplayTables roleId={5} projectId={19}/>
            </div>
            <div className='bg-gradient-to-r from-light-blue to-grey-blue rounded-lg'>
              <DisplayTables roleId={4} projectId={19}/>
            </div>
          </div>
        </div>
       
    </>    
  )
}

export default AdminDashboard

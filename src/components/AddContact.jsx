import React, { useState } from 'react';

const AddContact = (props) => {

  const [data,setData]=useState({
    name:'',
    email:'',
    number:""
  })




  const changeHandler=(e)=>{
    setData({...data,
      [e.target.name]:e.target.value
    })
   
  }

  const submitHandler=(e)=>{
    e.preventDefault()
    if(data.name==='' || data.email===''){
      alert('Fill the fields first')
    }
    else{
      props.getData(data) 
      setData({
        name:'',
        email:'',
        number:''
      })
    }
   
  }
  return (
    <>
   
    <div className='ui main center container'>
    
        <form className='ui form' onSubmit={submitHandler} >
      <h1>Add contact</h1>
            <div className="field">
                <input type="text" name="name" id="name" placeholder='Name' value={data.name} onChange={changeHandler} />
            </div>
            <div className="field">
                <input type="email" name="email" id="email" placeholder='Email '  value={data.email} onChange={changeHandler} />
            </div>
            <div className="field">
                <input type="number" name="number" id="number" placeholder='Contact Number '  value={data.number} onChange={changeHandler} />
            </div>
            <button type='submit' className='ui button blue' > Add</button>
        </form>
      
    </div>
    </>
  );
}

export default AddContact;

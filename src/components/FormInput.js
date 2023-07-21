import './FormInput.css'
import React, {useState, useRef} from 'react';
import Button from './Button';
import ErrorModal from './ErrorModal';



const FormInput=(props)=>{

  const nameInputRef= useRef();
  const ageInputRef= useRef();
  const collegeInputRef= useRef();
  const [error, setError]= useState();


  const formSubmitHandler=(event)=>{
    event.preventDefault();
    const enteredName= nameInputRef.current.value;
    const enteredUserAge= ageInputRef.current.value;
    const enteredCollege= collegeInputRef.current.value;

    if(enteredName.trim().length===0 || enteredUserAge.trim().length===0 || enteredCollege.trim().length===0)
    {
      setError({
        title:'Invalid input',
        message:'Please enter a valid name, age and college'
      })
      return;
    }
    if(+enteredUserAge < 1){
      setError({
        title:'Invalid age',
        message:'Please enter a valid age (>0)'
      })
      return;
    }
    props.onAddUser(enteredName, enteredUserAge, enteredCollege);
    nameInputRef.current.value= '';
    ageInputRef.current.value ='';
    collegeInputRef.current.value ='';
   };

   const errorHandler=()=>{
    setError(null);
   }

    return (
    <React.Fragment>
    {error &&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}

    <form onSubmit={formSubmitHandler}> 
    <div className="form-control">
      <label htmlFor='username'>Username</label>
      <input id='username' 
      type='text' 
      ref={nameInputRef} />

      <label htmlFor='age'>Age(years)</label>
      <input id='age' 
      type='number'
      ref={ageInputRef} />

      <label htmlFor='college'>College Name</label>
      <input id='college'
      type='text'
      ref={collegeInputRef} />
      </div>
      

      <div className='button-control'>
      <Button type='submit'>Add User</Button>
      </div>
    </form>
    </React.Fragment>
    )

}
export default FormInput;
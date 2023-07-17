import './FormInput.css'
import React, {useState} from 'react';
import Button from './Button';
import Error from './Error';


const FormInput=(props)=>{

  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEntererdAge]= useState('');

  const usernameChangeHandler= (event)=>{
    setEnteredUsername(event.target.value);
  }
  const ageChangeHandler= (event)=>{
  setEntererdAge(event.target.value);
  }
  const [error, setError]= useState();
  
  const formSubmitHandler=(event)=>{
    event.preventDefault();
    if(enteredUsername.trim().length===0 || enteredAge.trim().length===0)
    {
      setError({
        title:'Invalid input',
        message:'Please enter a valid name and age'
      })
      return;
    }
    if(+enteredAge < 1){
      setError({
        title:'Invalid age',
        message:'Please enter a valid age (>0)'
      })
      return;
    }
    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEntererdAge('');
   };

   const errorHandler=()=>{
    setError(null);
   }

    return (
    <div>
    {error &&<Error title={error.title} message={error.message} onConfirm={errorHandler} />}

    <form onSubmit={formSubmitHandler}> 
    <div className="form-control">
      <label htmlFor='username'>Username</label>
      <input id='username' 
      type='text' 
      value={enteredUsername}
      onChange={usernameChangeHandler} ></input>

      <label htmlFor='age'>Age(years)</label>
      <input id='age' 
      type='number'
      value={enteredAge}
      onChange={ageChangeHandler} ></input>
      </div>

      <div className='button-control'>
      <Button type='submit'>Add User</Button>
      </div>
    </form>
    </div>
    )

}
export default FormInput;
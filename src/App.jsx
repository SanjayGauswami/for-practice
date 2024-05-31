import { useRef } from 'react'
import './App.css'
import { useForm } from 'react-hook-form'

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors,isSubmitting,isSubmitted},
  } = useForm()
  


  const dealy = (d) =>{
    return new Promise((resolve,reject) =>{
      setTimeout(() => {
        resolve()
      }, d * 1000);
    })
  }
  
  const onSubmit = async (data) => {
    
    await dealy(2); 
    console.log(data)

  }

  

  return (
    <>
    {isSubmitting && <div>Loading....</div>}
    {/* {isSubmitted &&<div>Your data has been Submitted</div> } */}
     <form  dealy = {dealy}  onSubmit={handleSubmit(onSubmit)}>
  <label className='sanju'>Name:</label>
    <input type="text" {...register("Name",{required : { value : true , message : "Name is Required..."}})}  placeholder='Name' />
    {errors.Name  && <div className='red'>{errors.Name.message}</div>}
    <br/>
    <label  className='sanju'>Department:</label>
    <input type="text" {...register("Department",{required : {value:true, message:"Department is Required.."}, minLength:{value:3,message:"Min length is 3"}, maxLength:{
      value:7,message:"Max length is 7"
    } })} placeholder='Department' />
    {errors.Department && <div className='red'>{errors.Department.message}</div>}
    <br/>
    <label  className='sanju'>Age:</label>
    <input type="text" {...register("Age",{required : {value:true, message:"Department is Required.."} })} placeholder='Age' />
    {errors.Age && <div className='red'>{errors.Age.message}</div>}
    <br/>
    <label  className='sanju'>Salary:</label>
    <input type="text" {...register("Salary",{required : {value:true, message:"Salary is Required.."} })} placeholder='Salary' />
    {errors.Salary && <div className='red'>{errors.Salary.message}
    </div>}

    <br/>
    <br/>
    
    <button type='submit'>Submit</button>
    
     </form>
    </>
  )
}

export default App

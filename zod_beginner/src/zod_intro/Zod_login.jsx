import React, { useState } from 'react'
import { email, z, ZodError } from "zod";
import './LearnZod'

const Zod_login = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [errors, setErrors] = useState({});

    const zodSchema = z.object({
        email: z.string().trim().pipe(z.email("email is not valid bro")),
        password: z.string().trim().min(6,"minimum 6 chars are required").max(10,"maximum 10 chars are allowed")
    })

    function handleFormSubmit(e){
      e.preventDefault();
      try{
        const result = zodSchema.parse(data);
        console.log(result);
        //No more errors
        setErrors({});
    }catch(e){
        if(e instanceof ZodError){
            // console.log(e.issues)
            const newErrors = e.issues.reduce((acc, field) => {
                acc[field.path[0]] = field.message;
                return acc;
            },{});
            setErrors(newErrors);
            console.log(newErrors)
        }
    }
    //  const result = zodSchema.safeParse(data);
     /*const tree = z.treeifyError(result.error);
     console.log(tree.properties?.email?.errors[0]);*/
    /* const errors = z.flattenError(result.error).fieldErrors;
     console.log(errors)*/
    }



    function handleInputUpdate(e){
        const {name, value} = e.target;
        setData({...data, [name]: value});
    }
    // console.log(data);
  return (
    <div>
      <h1>Zod login</h1>
      <form onSubmit={handleFormSubmit} noValidate>
        <label>
            Email 
            <input 
            name="email" 
            type="email"
            value={data.email}
            onChange={handleInputUpdate} />
        </label>
        {errors.email && <p>{errors.email}</p>}
        <br />
        <label>
            Password
            <input 
            name='password' 
            type='password'
            value={data.password}
            onChange={handleInputUpdate}/>
        </label>
        {errors.password && <p>{errors.password}</p>}
        <br />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default Zod_login

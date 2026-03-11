import React, { useState } from 'react'
import '../index.css'
import FormRow from './FormRow';

const FormAssignment = () => {
    const [formData, setFormData] = useState({
        name: "",
        password: "",
        email: "",
        age: "",
        birthDate: "",
        time: "",
        range: 50,
        color: "#000000",
        gender: "",
        hobbies: [],
        country: "",
        message: ""
    });
    function handleChange(e){
        const {name, value, type, checked} = e.target;
        if(type === "checkbox"){
            let updatedHobbies = [...formData.hobbies];
            if(checked){
                updatedHobbies.push(value);
            }else{
                updatedHobbies = updatedHobbies.filter(h => h !== value);
            }
            setFormData({
                ...formData,
                hobbies: updatedHobbies
            })
        }else{
            setFormData({
                ...formData,
                [name]: value
            })
        }
    }
    function handleSubmit(e){
        e.preventDefault();
        console.log("Form Data ", formData);
    }

    function handleFocus(e){
        e.target.style.border = "2px solid red";
    }
    function handleBlur(e){
        e.target.style.border = "1px solid yellowgreen";
    }

  function handleReset() {
    setFormData({
      name: "",
      password: "",
      email: "",
      age: "",
      birthDate: "",
      time: "",
      range: 50,
      color: "#000000",
      gender: "",
      hobbies: [],
      country: "",
      message: ""
    });
  }
  return (
   <form onSubmit={handleSubmit} className='pl-4'>
    <h2>React form assignment</h2>
    <div className='flex flex-col gap-1'>
    <FormRow label="Name">
    <input className='border border-gray-500 p-0.5 focus:outline-none'
    type="text"
    name='name'
    value={formData.name}
    onFocus={handleFocus}
    onBlur={handleBlur}
    onChange={handleChange}
    placeholder='Enter name' />
    </FormRow>
    <FormRow label="Password">
      <input className = 'border border-gray-500 p-0.5 focus:outline-none'
      type="password"
      name='password'
      value={formData.password}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onChange={handleChange}
      placeholder='Enter password' />
    </FormRow>
    <FormRow label="Email">
        <input className = 'border border-gray-500 p-0.5 focus:outline-none'
        type="email"
        name='email'
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder='Enter email' />
    </FormRow>
    <FormRow label="Age" >
        <input className = 'border border-gray-500 p-0.5 focus:outline-none'
        type="number"
        name='age'
        value={formData.age}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder='Enter Age' />
    </FormRow>
    <FormRow label="Birth Date">
        <input 
        type="date"
        name='birthDate'
        value={formData.birthDate}
        onChange={handleChange}
        />
    </FormRow>
    <FormRow label="Time">
        <input 
        type="time"
        name='time'
        value={formData.time}
        onChange={handleChange} />
    </FormRow>
    <FormRow label="Range">
        <input 
        type="range"
        name='range'
        min='0'
        max='100'
        value={formData.range}
        onChange={handleChange} />
    </FormRow>
    <FormRow label="Form color">
        <input 
        type="color"
        name="color"
        value={formData.color}
        onChange={handleChange} />
    </FormRow>
    <FormRow label="Gender">
       <input 
        type="radio"
        name='gender'
        value="male"
        onChange={handleChange} />Male
                <input 
        type="radio"
        name='gender'
        value="female"
        onChange={handleChange} /> Female
    </FormRow>
    <FormRow label="Hobbies">
        <input 
        type="checkbox"
        value="sports"
        onChange={handleChange}/> Sports
        <input 
        type="checkbox"
        value="reading"
        onChange={handleChange}/> Reading
        <input 
        type="checkbox"
        value="music"
        onChange={handleChange}/> Music
    </FormRow>
    <FormRow label="Country">
    <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="india">India</option>
        <option value="usa">USA</option>
        <option value="uk">UK</option>
    </select>
    </FormRow>
    <FormRow label="Message">
        <textarea className = 'border border-gray-500 p-0.5 focus:outline-none'
        name="message" 
        value={formData.message} 
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}></textarea>
    </FormRow>
    </div>
    <div className='flex flex-row gap-2 mt-1'>
    <button className='px-3 py-2 bg-amber-300 rounded-md' type='submit'>Submit</button>
    <button className='px-3 py-2 bg-gray-500 text-white rounded-md' type='button' onClick={handleReset}>Reset</button>
    </div>
   </form>
  )
}

export default FormAssignment


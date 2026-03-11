import React from 'react'

const FormRow = ({label, children}) => {
  return (
<label className='flex items-center gap-2'>
    {label}
    {children}
</label>
  )
}

export default FormRow

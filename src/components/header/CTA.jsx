import React from 'react'

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

const notify = () => {
  // Calling toast method by passing string
  toast('Contact me!')
}

const CTA = () => {
  return (
    <div className='cta'>
        <a onClick={notify} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
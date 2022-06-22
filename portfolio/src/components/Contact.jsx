import React from 'react'

function Contact() {
  return (
    <div className='main contact'>
      <h2>Drop me a message</h2>  
      <form className='light' action="https://formsubmit.co/umasprung@gmail.com" method="POST">
        <div className="mb-4">
            <label for="email" className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" placeholder="name@example.com"/>
            </div>
            <div className="mb-4">
            <label for="message" className="form-label">Your message</label>
            <textarea className="form-control" id="message" rows="6"></textarea>
        </div>
        <button type="submit" className='btn btn-light'>send</button>
      </form>
    </div>

  )
}

export default Contact
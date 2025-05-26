import React, { useRef } from 'react';
import './Contact.css';
import emailjs from 'emailjs-com'
import mail_icon from '../../assets/mail_icon.svg';
import call_icon from '../../assets/call_icon.svg';
import location_icon from '../../assets/location_icon.svg';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            form.current,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then((result) => {
            alert('Message sent successfully!');
            form.current.reset();
        }, (error) => {
            alert('Failed to send message. Try again later');
            console.error(error);
            
        })
    }

    // const onSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    
    //     formData.append("access_key", "6667d836-0e25-46ba-8950-42654bf31954");
    
    //     const object = Object.fromEntries(formData);
    //     const json = JSON.stringify(object);
    
    //     const res = await fetch("https://api.web3forms.com/submit", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Accept: "application/json"
    //       },
    //       body: json
    //     }).then((res) => res.json());
    
    //     if (res.success) {
    //       alert(res.message);
    //     }
    //   };

  return (
    <div className='contact'id='contact'>
        <div className='contact-title'>
            <h1>Get in touch</h1>
        </div>
        <div className='contact-section'>
            <div className='contact-left'>
                <h1>Let's talk</h1>
                <p>Feel free to contact me anytime</p>
                <div className='contact-details'>
                    <div className='contact-detail'>
                        {/* <a href="mailto:arshiyasri21@gmail.com">
                            <img src={mail_icon} alt="Email" /> 
                            <p>arshiyasri21@gmail.com</p>
                        </a> */}
                        {/* <img src={mail_icon} alt="" /> <p>arshiyasri21@gmail.com</p> */}
                    </div>
                    <div className='contact-detail'>
                        <a href="mailto:arshiyasri21@gmail.com">
                            <img src={mail_icon} alt="Email" /> 
                            {/* <p>arshiyasri21@gmail.com</p> */}
                        </a>
                        <a href="https://github.com/Arshiya2112" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-github"></i>
                        </a>
                        <a href="https://www.linkedin.com/in/arshiya-srivastava" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                        </a>
                    </div>
                    {/* <div className='contact-detail'>
                        <img src={call_icon} alt="" /> <p>+91 9119474359</p>
                    </div> */}
                    {/* <div className='contact-detail'>
                        <img src={location_icon} alt="" /> <p>Delhi, India</p>
                    </div> */}
                </div>
            </div>
            <form  ref={form} onSubmit={sendEmail} className='contact-right'>
                <label>Name</label>
                <input type="text" placeholder='Enter your name' name='name' required />

                <label>Email</label>
                <input type="email" placeholder='Enter your email' name='email' />

                <label>Write your message here</label>
                <textarea name="message" rows="8" placeholder='Enter your message'></textarea>

                <button type='submit' className='contact-submit'>Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
import './Contact.css';
import React from 'react';

export default function Contact() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "2110b19f-afd4-4c73-a88d-fef4b17be2ac");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  
    return (
        <div className='main-container' id='contact'>
            <h1>Contact</h1>
            <div id='contact-container'>
            <div id='email-cont'>
                <h2>General Inquires</h2>
                <p>Email Address</p>
                <a href='mailto:ladybirdvoicestudios@gmail.com'>ladybirdvoicestudios@gmail.com</a>
                <h2>Social Media</h2>
                <a href="https://www.instagram.com/ladybirdvoicestudios/?utm_source=ig_embed&amp;utm_campaign=loading" target="_blank" rel='noreferrer'>
                    <img src='public\images\instagram.png' alt="Instagram" />
                </a>
            </div>
            <div id='contact-form'>
                <h2>Request a Quote</h2>
                <form onSubmit={onSubmit}>
                    <h3>Name:</h3>
                    <input type="text" name="name" required/>
                    <h3>Email:</h3>
                    <input type="email" name="email" required/>
                    <h3>What type of Voice Over do you need?</h3>
                    <select name="voiceoverType" required>
                        <option value="">Select One</option>
                        <option value="Radio / TV">Radio / TV</option>
                        <option value="Narration & Explainer Videos">Narration & Explainer Videos</option>
                        <option value="Internet/Online Video">Internet/Online Video</option>
                        <option value="Corporate Video">Corporate Video</option>
                        <option value="Animation & eLearning Video">Animation & eLearning Video</option>
                        <option value="Podcast Intros & Outros">Podcast Intros & Outros</option>
                        <option value="On Hold / IVR Phone Message">On Hold / IVR Phone Message</option>
                        <option value="Presentation/Powerpoint">Presentation/Powerpoint</option>
                        <option value="Youtube">Youtube</option>
                        <option value="Film / Movie">Film / Movie</option>
                        <option value="In Flight/Retail Announcer">In Flight/Retail Announcer</option>
                        <option value="Website Video">Website Video</option>
                        <option value="Other">Other</option>
                    </select>
                    <h3>Message:</h3>
                    <textarea name="message" required></textarea>
                    <button type="submit">Submit Form</button>
                </form>
                <span>{result}</span>
  
            </div>
            </div>
        </div>
    );
  }
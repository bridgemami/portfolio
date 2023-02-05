import { useState } from 'react'
import s from './contact.module.css'

export default function Contact () {
        const [email, setEmail]= useState('');
        const [name, setName]= useState('');
        const [subject, setSubject]= useState('');
        const [message, setMessage]= useState('');
        const handleSubmit = (e) => {
            //so the page does not refresh
            e.preventDefault();
            //the parts of the form or blog
            //Json file
                      };

    return (
        <section>
            <h2>Contact</h2>
            <p>Feel free to contact me, use any of the links on this page, or use the contact form below. I will get back to you as soon as possible. Thank you for taking the time to look at my portfolio.</p>
            <form onSubmit={handleSubmit}>
                <label for="email">Email:</label>
                <input type="email" 
                        name="email"
                        placeholder='email'
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        />
                <label for="name">Name:</label>
                <input type="text" 
                        name="name"
                        placeholder='name'
                        // required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        />
                <label for="Subject">Subject:</label>
                <input type="text" 
                        name="subject"
                        placeholder='subject'
                        // required
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        />
                <label for="name">Message/Inquiry:</label>
                <textarea 
                        placeholder='Your message or inquiry'
                        // required
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                <button type='submit'>Submit</button>
            </form>
            <p>{email}</p>
            <p>{name}</p>
            <p>{subject}</p>
            <p>{message}</p>
        </section>
    )
}
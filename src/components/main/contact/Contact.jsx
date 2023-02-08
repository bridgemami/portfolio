import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
// import { StyledParagraphFont } from "../../styled/style";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [state, handleSubmit] = useForm("xdovaqqg");
  if (state.succeeded) {
    return <p>Thank you for reaching out!</p>;
  }

  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>
        Feel free to contact me, use any of the links on this page, or use the
        contact form below. I will get back to you as soon as possible. Thank
        you for taking the time to look at my portfolio.
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <ValidationError prefix="email" field="email" errors={state.errors} />
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="name"
          // required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ValidationError prefix="name" field="name" errors={state.errors} />
        <label htmlFor="subject">Subject:</label>
        <input
          type="text"
          name="subject"
          id="subject"
          placeholder="subject"
          // required
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <ValidationError
          prefix="subject"
          field="subject"
          errors={state.errors}
        />
        <label htmlFor="message">Message/Inquiry:</label>
        <textarea
          placeholder="Your message or inquiry"
          id="message"
          name="message"
          // required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      <p>{email}</p>
      <p>{name}</p>
      <p>{subject}</p>
      <p>{message}</p>
    </section>
  );
}

import style from "../Contact/contact.module.css"
import { Link } from "react-router-dom";
const ContactPage = () => {
  return (
   <>
   <header>
    <Link to="/">Home</Link>
   </header>
    <div className={style.contactContainer}>
      <h2>Contact Us</h2>
      <form className={style.contactForm}>
      <p>
        <input type="text" id="name" name="name" required />
        <label>Name</label>
</p>
      <p>
        <input type="email" id="email" name="email" required />
        <label>Email</label>
</p>
  <p>
        <textarea id="message" name="message" required />
        <label>Message</label>
</p>
        <button type="submit">Send</button>
      </form>
    </div>

    <footer>
    <div className={style.copyright}>
            <p>Copyright &copy; 2024</p>
            <p>Designed and Built by <a href="https://arjuncvinod.me">Arjun C Vinod</a></p>
        </div>
    </footer>
    </>
  );
};

export default ContactPage;




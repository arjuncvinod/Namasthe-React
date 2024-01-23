import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "../About/About.module.css";

function About() {
 
  const [mail, setMail] = useState(" ");
  // const [display,setDisplay]=useState(false)
  const [condition,setCondition]=useState({
    error:true,
    display:false
  })
  const navigate = useNavigate()
  
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
const handlechange=(e)=>{
  setMail(e.target.value)
   isValidEmail(mail)?setCondition({error:false,display:false}):setCondition({error:true,display:true})
}
  const  proceedToContact = () => {
    
     !condition.error && navigate("/contact")
  };
  
  return (
    <main className={styles.main}>
      <h1>About</h1>
      <p>
        React Router is a robust library for managing navigation and routing in
        React applications. It empowers developers to create dynamic single-page
        applications (SPAs) by effortlessly determining which components should
        be displayed based on the URL, without necessitating a full-page reload.
        At its core, React Router introduces the concept of declarative routing,
        allowing developers to clearly articulate the application&apos;s
        structure based on URL patterns. The BrowserRouter component serves as
        the cornerstone, employing the HTML5 history API to keep the user
        interface in sync with the URL. Routing is established through the Route
        component, specifying the association between a URL path and the React
        component that should be rendered when that path is accessed. The Link
        component complements this, providing a means to create navigation links
        within the application. React Router accommodates nested routes,
        enabling developers to structure their components hierarchically based
        on the URL structure. This proves especially valuable for organizing
        complex applications in a clear and intuitive manner. In addition to
        static routing, React Router supports programmatic navigation. This
        allows developers to dynamically navigate between views based on user
        interactions or application logic. The useHistory hook, for example,
        facilitates programmatic navigation by providing access to the
        browser&apos;s history. In summary, React Router is an indispensable
        tool for crafting modern, client-side navigation in React applications.
        Its flexibility, declarative nature, and support for nested routes make
        it a key facilitator in creating seamless and interactive user
        experiences.
      </p>

      <div className={styles.container}>
        <h1>Subscribe to Our Newsletter</h1>
        <h2>Subscribe now to access the Contact page!</h2>
        <form id="">
        <p>
          
          <input
            type="email"
            required
            onChange={handlechange}
          />
          <label>Email</label>
          </p>
          <button type="button" onClick={proceedToContact}>
            Proceed to Contact
          </button>
        </form>
        {
        condition.display && <h5>Please enter a valid email address !</h5>
        }
       
      </div>
    </main>
  );

}

export default About;

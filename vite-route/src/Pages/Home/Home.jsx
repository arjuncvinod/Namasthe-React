import styles from  "../Home/Home.module.css";
import logo from  "../../assets/react-logo.png"
import { Link } from "react-router-dom";
function Home() {
  return (
    <main className={styles.main} >
    <img src={logo} alt="" />
        <h1>React Router</h1>
        <p>
          Simplifies navigation and dynamic component rendering in React
          applications, making it easy to create single-page applications.
        </p>
        <Link to="/about"><button >View More</button> </Link>
    </main>
  );
}

export default Home;

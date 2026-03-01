import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={styles.nav}>
      <h3 style={styles.logo}>MyApp</h3>

      <div>
        <Link to="/home" style={styles.link}>Home</Link>
        <Link to="/home/recipe" style={styles.link}>Recipe</Link>
        <Link to="/home/comment" style={styles.link}>Comment</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 30px",
    background: "#1e1e1e",
    color: "white"
  },
  logo: {
    margin: 0
  },
  link: {
    marginLeft: "20px",
    textDecoration: "none",
    color: "white",
    fontWeight: "500"
  }
};

export default Navbar;
import "./styles.css";
import 'bootstrap/dist/css/bootstrap.css'
import { Link } from 'react-router-dom';


const Home = () => {
  return (
    <div>
      <div className="home-content">
        <h1>Desafio Github API</h1>
      </div>
      <div className="home-content-text">
        <h3>Bootcamp Spring React - DevSuperior</h3>
      </div>
      <div className="home-button">
      <Link to="/mainpage">
        <button type="button" className="btn btn-primary">
          Começar
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;

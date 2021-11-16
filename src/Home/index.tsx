import "./styles.css";
import { Button } from 'react-bootstrap';

const Home = () => {
  return (
    <div>
      <div className="home-content">
        <h1>Desafio Github API</h1>
      </div>
      <div className="home-content-text">
        <h3>Bootcamp Spring React - DevSuperior</h3>
      </div>
      <div>
        <button type="button" className="btn btn-primary">
          Começar
        </button>
      </div>
    </div>
  );
};

export default Home;

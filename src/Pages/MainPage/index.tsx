import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";

const MainPage = () => {
  return (
    <div className="main-container">
      <div>
        <h1>Encontre um perfil Github</h1>
      </div>
      <div className="main-content-form">
        <>
          <Form.Control type="text" placeholder="Usuario github" className="input-git-user" />
        </>
      </div>
      <div>
        <button type="button" className="btn btn-primary">
          Encontrar
        </button>
      </div>
    </div>
  );
};

export default MainPage;

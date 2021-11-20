import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

import ResponseCard from '../../components/ResponseCard';
import './styles.css';

type FormData = {
  userName: string;
};

type GithubUser = {  
  login: string,  
  avatar_url: string, 
  url: string,   
  name: string,  
  location: string,  
  followers: number,  
}


const MainPage = () => {

  const [githubUser, setGithubUser] = useState<GithubUser>();
  

  const [formData, setFormData] = useState<FormData>({
    userName: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData.userName);

    axios.get(`http://api.github.com/users/${formData.userName}`)
    .then((response) => {
      setGithubUser(response.data)
      console.log(response.data)
    })
    .catch((error) => {
      setGithubUser(undefined);
      console.log(error)
    })
    
  
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.name;
    const value = event.target.value;

    setFormData({ ...formData, [name]:value });
  };

  return (
    <div>
      <div className="main-container">
        <div>
          <h1>Encontre um perfil Github</h1>
        </div>
        <form onSubmit={handleSubmit}>
        <div className="main-content-form">
          <>
            <input
              type="text"
              name="userName"
              value={formData.userName}
              placeholder="Usuario github"
              className="input-git-user"              
              onChange={handleChange}
            />
          </>
        </div>
        <div>
          <button type="submit" className="btn btn-primary">
            Encontrar
          </button>
        </div>
        </form>
      </div>
      {githubUser && 
      <>
      <ResponseCard login={githubUser.login} avatar_url={githubUser.avatar_url} url={githubUser.url} name={githubUser.name} location={githubUser.location} followers={githubUser.followers} />
      </>
      }
      
    </div>
  );
};

export default MainPage;

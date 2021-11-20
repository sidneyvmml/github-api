import './styles.css';
import UserImage from '../../assets/images/user.jpg';

type Props = {
  login: string;
  avatar_url: string;
  url: string;
  name: string;
  location: string;
  followers: number;
};

const ResponseCard = ( {login,avatar_url,url,name, location, followers } : Props ) => {
  return (
    <div className="base-card response-card">
      <div className="user-photo">
        <img src={avatar_url} alt="userphoto" />
      </div>
      <div className="user-data">
        <div className="user-data-title">Informações</div>
        <div className="user-data-information">Perfil: {url}</div>
        <div className="user-data-information">Seguidores: {followers} </div>
        <div className="user-data-information">Localidade: {location} </div>
        <div className="user-data-information">Nome: {name} - {login}</div>
      </div>
    </div>
  );
};

export default ResponseCard;

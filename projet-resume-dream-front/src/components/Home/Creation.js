import { Link } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import background from '../../assets/images/homev2.jpg';

const Creation = () => (

  <div
    className="home__creation"
    style={{ backgroundImage: `url(${background})` }}
  >

    {/* Call the link to upload image */}
    <img className="home__creation home__creation__logo" src={Logo} alt="Resume Dream Logo" />

    <h1 className="home__creation home__creation__title"> Créer votre CV en un clic ? Un rêve devenu réalité</h1>

    {/* Link to page create CV */}
    <Link to="/creer-mon-cv">
      <button className="home__creation__button home__creation__button--filled" type="button"> Commencer </button>
    </Link>

  </div>

);

export default Creation;

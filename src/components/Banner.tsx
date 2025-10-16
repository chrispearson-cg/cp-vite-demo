import logo from '../assets/prism.png';
import logoClass from './Banner.module.scss';

const Banner = () => {
    return (
        <>
        <header>
            <img src={logo} alt="Prism Logo" className={logoClass.logo}/>
        </header>
        </>
    );
}

export default Banner
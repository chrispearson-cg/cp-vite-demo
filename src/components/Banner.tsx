import logo from '../assets/prism.png';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <>
        <header className="row p-3">
            <img src={logo} alt="Prism Logo" className={styles.logo}/>
        </header>
        </>
    );
}

export default Banner
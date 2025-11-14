import logo from '../assets/prism.png';
import styles from './Banner.module.scss';
import { useNavigate } from 'react-router';

const Banner = () => {
  const nav = useNavigate();
  return (
    <>
      <div onClick={() => nav('/')}>
        <header className="p-3">
          <img src={logo} alt="Prism Logo" className={styles.logo} />
        </header>
      </div>
    </>
  );
};

export default Banner;

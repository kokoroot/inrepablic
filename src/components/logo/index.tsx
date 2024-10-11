import Image from 'next/image';
import logo from '../../../assets/logo.svg';
import styles from './Logo.module.css';

export const Logo = () => {
  return (
    <div className={styles.logo}>
      <Image src={logo} alt='' />
      inRepublic
    </div>
  );
};

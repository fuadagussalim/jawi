
// components/LogoCarousel.js
import styles from './LogoCarousel.module.css';

const LogoCarousel = ({ logos }) => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logoMarquee}>
        {logos.map((logo, index) => (
          <img src={logo.src} alt={logo.alt} key={index} className={styles.logo} />
        ))}
      </div>
    </div>
  );
};

export default LogoCarousel;

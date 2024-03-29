import styles from './starfield.module.scss';

const Starfield = () => {
  return (
    <div className={styles.starsClass}>
      {Array.from({ length: 100 }, (_, i) => (
        <div key={i} className={styles.starClass}></div>
      ))}
    </div>
  );
};

export default Starfield;
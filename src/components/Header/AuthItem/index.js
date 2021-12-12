import styles from "./AuthItem.module.scss";

const AuthItem = ({ icon, title }) => {
  return (
    <button className={styles.authItem}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>{title}</div>
    </button>
  );
};

export { AuthItem };

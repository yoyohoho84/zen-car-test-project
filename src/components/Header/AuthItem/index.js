import styles from "./AuthItem.module.scss";

const AuthItem = ({ icon, title }) => {
  return (
    <div className={styles.authItem}>
      <div className={styles.icon}>{icon}</div>
      <div className={styles.text}>{title}</div>
    </div>
  );
};

export { AuthItem };

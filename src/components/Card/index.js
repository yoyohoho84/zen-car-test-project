import styles from "./Card.module.scss";

const Card = ({ url, name, getData, data }) => {
  return (
    <div className={styles.card} onClick={() => getData(data)}>
      {url ? (
        <div className={styles.card_img}>
          <img src={url} alt={name} />
        </div>
      ) : (
        ""
      )}

      <div className={styles.card_name}>{name}</div>
    </div>
  );
};

export { Card };

import { RemoveIcon, BackIcon } from "../icons";
import styles from "./VehicleWorkItem.module.scss";

const VehicleWorkItem = ({ name, groupName, index, removeWork }) => {
  return (
    <div className={styles.work}>
      <div className={styles.work__number}>{index + 1}</div>
      <div className={styles.work__container}>
        <div className={styles.title}>
          {groupName} <BackIcon /> {name}
        </div>
        <div className={styles.description}></div>
      </div>
      <div className={styles.work__icon} onClick={removeWork}>
        <RemoveIcon />
      </div>
    </div>
  );
};

export { VehicleWorkItem };

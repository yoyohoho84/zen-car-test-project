import { useState } from "react";
import styles from "./ActionSwitcher.module.scss";

const ActionSwitcher = ({ setActiveTab, setCurrentVehicleWorks }) => {
  const [action, setAction] = useState([
    { name: "Выбрать услуги", active: true },
    {
      name: "Описать симптомы",
      active: false,
    },
  ]);

  const setActiveBtn = (name) => {
    setCurrentVehicleWorks([]);

    if (name === "Выбрать услуги") {
      setActiveTab("wizardWorks");
    } else {
      setActiveTab("wizardSymptoms");
    }

    setAction((prevState) =>
      prevState.map((item) =>
        item.name === name
          ? { ...item, active: true }
          : { ...item, active: false }
      )
    );
  };

  return (
    <div className={styles.switcher}>
      {action?.map((item, index) => {
        return (
          <div
            key={index}
            className={item.active ? styles.item__active : styles.item}
            onClick={() => setActiveBtn(item.name)}
          >
            {item.name}
          </div>
        );
      })}
    </div>
  );
};

export { ActionSwitcher };

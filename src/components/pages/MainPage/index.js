import { useEffect, useState } from "react";
import { ActionSwitcher, Works, Symptoms } from "../../index";
import styles from "./MainPage.module.scss";
import { useQuery } from "@apollo/react-hooks";
// import GetWorks from "../../../querys/GetWorks.graphql"; // так не работает
import { BackIcon } from "../../icons";

const MainPage = () => {
  const [currentData, setCurrentData] = useState(null);
  const [currentVehicleWorks, setCurrentVehicleWorks] = useState([]);
  const [headerData, setHeaderData] = useState(null);
  const [historySteps, setHistorySteps] = useState([]);
  const [activeTab, setActiveTab] = useState("wizardWorks");

  useEffect(() => {
    if (historySteps.length === 0 && currentData) {
      setHistorySteps((prevState) => [...prevState, currentData]);
    }
  }, [currentData]);

  const getData = (data) => {
    if (data?.children) {
      setHistorySteps((prevState) => [...prevState, data?.children]);
      setCurrentData(data?.children);
      setHeaderData({ name: data.name, question: data.question });
    }

    if (data?.vehicleWorks?.length) {
      setCurrentVehicleWorks(data?.vehicleWorks);
    }
  };

  const setCurrentDataByHistory = () => {
    if (currentVehicleWorks.length) {
      setCurrentVehicleWorks([]);
    }

    if (historySteps.length > 2) {
      setCurrentData(historySteps[historySteps.length - 2]);
    } else {
      setCurrentData(historySteps[0]);
    }

    if (historySteps.length > 1) {
      setHistorySteps((prevState) =>
        prevState.filter((item, index) => index !== prevState.length - 1)
      );
    }
  };

  const removeWork = (id) => {
    setCurrentVehicleWorks((prevState) =>
      prevState.filter((item) => item.id !== id)
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.title}>
          {headerData?.name && (
            <div
              className={styles.title__icon}
              onClick={setCurrentDataByHistory}
            >
              <BackIcon />
            </div>
          )}

          <div className={styles.title__text}>
            {headerData?.name
              ? headerData?.name
              : "Какой узел автомобиля нуждается в ремонте?"}
          </div>

          <ActionSwitcher setActiveTab={setActiveTab} />
        </div>
        <div className={styles.switcherContainer}></div>
      </div>
      <div className={styles.cards}>
        {activeTab === "wizardWorks" ? (
          <Works
            getData={getData}
            currentVehicleWorks={currentVehicleWorks}
            removeWork={removeWork}
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        ) : (
          <Symptoms
            getData={getData}
            currentVehicleWorks={currentVehicleWorks}
            removeWork={removeWork}
            currentData={currentData}
            setCurrentData={setCurrentData}
          />
        )}
      </div>
    </div>
  );
};

export { MainPage };

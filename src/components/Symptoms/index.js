import { useEffect, useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import { LOAD_SYMPTOMS } from "../../querys/GetSymptoms.js";
import { SpinnerIcon } from "../icons";
import { Card, VehicleWorkItem } from "../index";

const Symptoms = ({
  getData,
  currentVehicleWorks,
  removeWork,
  currentData,
  setCurrentData,
}) => {
  const { data, loading } = useQuery(LOAD_SYMPTOMS);

  useEffect(() => {
    setCurrentData(data?.wizardSymptoms);
  }, [loading]);

  const renderSymptoms = currentData?.map((item) => {
    return (
      <Card
        key={item.id}
        url={item?.image?.file?.url}
        name={item.name}
        getData={getData}
        data={item}
      />
    );
  });

  const renderVehicleWorks = currentVehicleWorks?.map((item, index) => {
    return (
      <VehicleWorkItem
        id={item.id}
        index={index}
        key={item.id}
        url={item?.image?.file?.url}
        groupName={item.group?.name}
        name={item.name}
        removeWork={() => removeWork(item.id)}
      />
    );
  });

  const renderContent = currentVehicleWorks.length
    ? renderVehicleWorks
    : renderSymptoms;

  return <>{loading ? <SpinnerIcon /> : renderContent}</>;
};

export { Symptoms };

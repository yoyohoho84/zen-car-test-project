import { useEffect } from "react";
import { useQuery } from "@apollo/react-hooks";
import { LOAD_WORKS } from "../../querys/GetWorks.js";
import { SpinnerIcon } from "../icons";
import { Card, VehicleWorkItem } from "../index";

const Works = ({
  getData,
  currentVehicleWorks,
  removeWork,
  currentData,
  setCurrentData,
}) => {
  const { data, loading } = useQuery(LOAD_WORKS);

  useEffect(() => {
    setCurrentData(data?.wizardWorks);
  }, [loading]);

  const renderWorks = currentData?.map((item) => {
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
    : renderWorks;

  return (
    <>
      {loading ? (
        <SpinnerIcon />
      ) : (
        <>
          {renderContent?.length ? (
            renderContent
          ) : (
            <textarea className="textarea"></textarea>
          )}
        </>
      )}
    </>
  );
};

export { Works };

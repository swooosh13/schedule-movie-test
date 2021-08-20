import { useSelector } from "react-redux";
import { ItemsProfile } from "./ItemProfile";

const Schedule = () => {
  const schedule = useSelector((state) => state.schedule);

  return (
    <div className="schedule">
      <ItemsProfile data={schedule} />
    </div>
  );
};

export { Schedule };

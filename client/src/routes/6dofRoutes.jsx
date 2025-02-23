import { Route } from "react-router-dom";
import PowerRobot from "../features/Control_6dof/PowerRobot/PowerRobot";
import Configuration from "../features/Control_6dof/Configuration/Configuration";

const Control6dofRoutes = () => {
  return (
    <>
      <Route path="/6dof/PowerRobot" element={<PowerRobot />} />
      <Route path="/6dof/Configuration" element={<Configuration />} />
    </>
  );
};

export default Control6dofRoutes;

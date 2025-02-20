import { Route } from "react-router-dom";
import Control6dof from "../features/Control_6dof/Control_6dof";
import PowerRobot from "../features/Control_6dof/PowerRobot/PowerRobot";

const Control6dofRoutes = () => {
  return (
    <>
      <Route path="/6dof" element={<Control6dof />} />
      <Route path="/6dof/PowerRobot" element={<PowerRobot />} />
    </>
  );
};

export default Control6dofRoutes;

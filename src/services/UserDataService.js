import Axios from "axios";

const getUserData = () => {
  return Axios.get("/user.json");
};

const getDashboardData = () => {
  return Axios.get("/dashboard.json");
};

const UserDataService = { getUserData, getDashboardData };
export default UserDataService;

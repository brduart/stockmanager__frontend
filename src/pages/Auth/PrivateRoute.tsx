import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

type Props = {
  children: JSX.Element;
};

const PrivateRoute = ({ children }: Props) => {
  const { token } = useSelector((state: RootState) => state.auth);
  if (!token) {
    return <Navigate to="/login" />;
  }
  return children;
};

export default PrivateRoute;

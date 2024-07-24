import { Link } from "react-router-dom";

import Logo from "../assets/PlayTech.png";

const Home = () => {
  return (
    <div className="min-w-full min-h-full  flex items-center justify-center flex-col" id="container">
      <div className="" id="logo">
        <img src={Logo} alt="" />
      </div>
      <div className="w-[40vw] h-[40vh] rounded-xl flex flex-col justify-center items-center" id="formContainer">
        <Link to="/register" className="w-[50%] p-[1rem] bg-white text-center rounded-xl text-greenPrimary my-5">
          Cadastrar
        </Link>
        <Link to="/login" className="w-[50%] p-[1rem] text-white bg-secondary text-center rounded-xl bg-greenPrimary ">
          Entrar
        </Link>
      </div>
    </div>
  );
};

export default Home;

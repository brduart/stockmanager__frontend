import { Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import PrivateRoute from "./pages/Auth/PrivateRoute";
import Teste from "./pages/Teste";

function App() {
  return (
    <main className="w-screen h-screen bg-background">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/logged"
          element={
            <PrivateRoute>
              <Teste />
            </PrivateRoute>
          }
        />
      </Routes>
    </main>
  );
}

export default App;


import { useState } from "react";
import LoginForm from "./components/LoginForm";
import Perfil from "./components/Perfil";

function App() {
  const [token, setToken] = useState(localStorage.getItem("access_token"));

  return (
    <div className="min-h-screen bg-gray-100">
      {token ? <Perfil token={token} /> : <LoginForm onLoginSuccess={setToken} />}
    </div>
  );
}

export default App;

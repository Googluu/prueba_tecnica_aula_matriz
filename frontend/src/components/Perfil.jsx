import { useEffect, useState } from "react";
import EditarPerfil from "./EditarPerfil";
import SubirFoto from "./SubirFoto";

const Perfil = ({ token }) => {
  const [perfil, setPerfil] = useState(null);
  const [vista, setVista] = useState("ver"); // ver | editar | subir
  const [error, setError] = useState("");

  const fetchPerfil = async () => {
    try {
      const res = await fetch("http://46.202.88.87:8010/usuarios/api/perfil/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Error al obtener el perfil");
      const data = await res.json();
      setPerfil(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchPerfil();
  }, [vista]);

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  if (error) return <p className="text-red-600">{error}</p>;
  if (!perfil) return <p className="text-center mt-10">Cargando perfil...</p>;

  if (vista === "editar") {
    return <EditarPerfil token={token} perfilActual={perfil} onBack={() => setVista("ver")} />;
  }

  if (vista === "subir") {
    return <SubirFoto token={token} onBack={() => setVista("ver")} />;
  }

  return (
    <div className="max-w-2xl mx-auto mt-10 p-6 bg-white rounded shadow space-y-4">
      <h2 className="text-2xl font-bold">👤 Perfil</h2>
      {perfil.data.basic_info.foto && (
        <img
          src={perfil.data.basic_info.foto}
        //   src={`http://46.202.88.87:8010${perfil.data.basic_info.foto}`}
          alt="Foto de perfil"
          className="w-32 h-32 object-cover rounded-full mx-auto"
        />
      )}
      <p><strong>Nombre:</strong> {perfil.data.basic_info.first_name} {perfil.data.basic_info.last_name}</p>
      <p><strong>Correo:</strong> {perfil.data.basic_info.email}</p>
      <p><strong>Biografía:</strong> {perfil.data.basic_info.biografia}</p>
      <p><strong>Teléfono:</strong> {perfil.data.basic_info.telefono}</p>
      <p><strong>Tipo Usuario:</strong> {perfil.data.basic_info.tipo_usuario}</p>

      <div className="flex flex-wrap gap-4 justify-between mt-6">
        <button onClick={() => setVista("editar")} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          ✏️ Editar Perfil
        </button>
        <button onClick={() => setVista("subir")} className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          📤 Subir Foto
        </button>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          🚪 Cerrar sesión
        </button>
      </div>
    </div>
  );
};

export default Perfil;

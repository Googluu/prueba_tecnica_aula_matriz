import { useState } from "react";

const SubirFoto = ({ token, onBack }) => {
  const [archivo, setArchivo] = useState(null);
  const [mensaje, setMensaje] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!archivo) return;

    const formData = new FormData();
    formData.append("foto", archivo);

    const res = await fetch("/api/perfil/foto/", {
      method: "PATCH",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });

    const data = await res.json();
    setMensaje(data.message || "Foto actualizada");

    if (res.ok) {
      setTimeout(() => onBack(), 1500);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-6 p-6 bg-white rounded shadow">
      <h2 className="text-xl font-bold">📤 Subir Foto</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setArchivo(e.target.files[0])}
          className="w-full"
        />
        <div className="flex justify-between">
          <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Subir</button>
          <button onClick={onBack} type="button" className="bg-gray-500 text-white px-4 py-2 rounded">Cancelar</button>
        </div>
        {mensaje && <p className="text-green-600">{mensaje}</p>}
      </form>
    </div>
  );
};

export default SubirFoto;

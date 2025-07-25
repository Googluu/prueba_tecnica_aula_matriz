import { useState } from "react";

const EditarPerfil = ({ token, perfilActual, onBack }) => {
  const [form, setForm] = useState({
    first_name: perfilActual.data.basic_info.first_name,
    last_name: perfilActual.data.basic_info.last_name,
    telefono: perfilActual.data.basic_info.telefono || "",
    tipo_usuario: perfilActual.data.basic_info.tipo_usuario || "",
    tipo_naturaleza: perfilActual.data.basic_info.tipo_naturaleza || "",
    biografia: perfilActual.data.basic_info.biografia || "",
    documento: perfilActual.data.basic_info.documento || "",
    linkedin: perfilActual.data.basic_info.linkedin || "",
    twitter: perfilActual.data.basic_info.twitter || "",
    github: perfilActual.data.basic_info.github || "",
    sitio_web: perfilActual.data.basic_info.sitio_web || "",
    esta_verificado: perfilActual.data.basic_info.esta_verificado || false,
  });

  const [mensaje, setMensaje] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
        user: {
            first_name: form.first_name,
            last_name: form.last_name,
        },
        telefono: form.telefono,
        tipo_usuario: form.tipo_usuario,
        tipo_naturaleza: form.tipo_naturaleza,
        biografia: form.biografia,
        documento: form.documento,
        linkedin: form.linkedin,
        twitter: form.twitter,
        github: form.github,
        sitio_web: form.sitio_web,
        esta_verificado: form.esta_verificado,
    };

    const res = await fetch("/api/usuario/perfil/", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setMensaje(data.message || "Perfil actualizado");

    if (data.status === "success") {
      setTimeout(() => onBack(), 1500);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white mt-6 rounded shadow space-y-4">
      <h2 className="text-xl font-bold">✏️ Editar Perfil</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <div className="grid grid-cols-2 gap-4">
          <input name="first_name" value={form.first_name} onChange={handleChange} placeholder="Nombre" className="border p-2" />
          <input name="last_name" value={form.last_name} onChange={handleChange} placeholder="Apellido" className="border p-2" />
          <input name="telefono" value={form.telefono} onChange={handleChange} placeholder="Teléfono" className="border p-2 col-span-2" />
          <input name="documento" value={form.documento} onChange={handleChange} placeholder="Documento" className="border p-2 col-span-2" />
          <input name="tipo_usuario" value={form.tipo_usuario} onChange={handleChange} placeholder="Tipo usuario" className="border p-2" />
          <input name="tipo_naturaleza" value={form.tipo_naturaleza} onChange={handleChange} placeholder="Tipo naturaleza" className="border p-2" />
        </div>

        <textarea name="biografia" value={form.biografia} onChange={handleChange} placeholder="Biografía" className="w-full p-2 border"></textarea>
        <input name="linkedin" value={form.linkedin} onChange={handleChange} placeholder="LinkedIn" className="w-full p-2 border" />
        <input name="twitter" value={form.twitter} onChange={handleChange} placeholder="Twitter" className="w-full p-2 border" />
        <input name="github" value={form.github} onChange={handleChange} placeholder="GitHub" className="w-full p-2 border" />
        <input name="sitio_web" value={form.sitio_web} onChange={handleChange} placeholder="Sitio Web" className="w-full p-2 border" />

        <label className="block mt-2">
          <input type="checkbox" name="esta_verificado" checked={form.esta_verificado} onChange={handleChange} />
          <span className="ml-2">¿Verificado?</span>
        </label>

        <div className="flex justify-between mt-4">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Guardar</button>
          <button onClick={onBack} type="button" className="bg-gray-400 text-white px-4 py-2 rounded">Cancelar</button>
        </div>
        {mensaje && <p className="text-green-600">{mensaje}</p>}
      </form>
    </div>
  );
};

export default EditarPerfil;

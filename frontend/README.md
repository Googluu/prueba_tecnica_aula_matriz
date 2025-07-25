# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


# Frontend - Prueba Técnica (React + Vite + Tailwind)

## Contiene:
- Login de usuarios
- Visualizacion del perfil
- Edicion del perfil
- Subida de foto de perfil


## Tecnologias usadas
- ⚛️ React + Vite
- 🎨 Tailwind CSS
- 🔐 JWT Auth
- 📦 fetch API + localStorage

### 1. Bajar el repositorio 
```bash
git clone git@github.com:Googluu/prueba_tecnica_aula_matriz.git && cd prueba_tecnica_aula_matriz
npm install
npm run dev


## Estructura del proyecto
```bash
src/
├── components/
│   ├── LoginForm.jsx
│   ├── Perfil.jsx
│   ├── EditarPerfil.jsx
│   └── SubirFoto.jsx
├── App.jsx
├── index.css
└── main.jsx

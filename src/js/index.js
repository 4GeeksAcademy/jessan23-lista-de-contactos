// Import React y ReactDOM
import React from 'react';
import { createRoot } from 'react-dom/client';

// Importar estilos
import "../styles/index.css";

// Importar tu componente principal
import Layout from './layout.js';

// Importar el contexto
import injectContext from './store/appContext';

// Inyectar el contexto a tu componente principal
const LayoutWithContext = injectContext(Layout);

// Crear la raíz y renderizar la aplicación
const root = createRoot(document.querySelector("#app"));
root.render(<LayoutWithContext />);

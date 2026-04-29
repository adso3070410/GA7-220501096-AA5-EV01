const express = require('express');
const app = express();
app.use(express.json());

// Simulación de base de datos para el Colegio Nazareth
const usuariosSIA = [
    { usuario: "admin_sia", clave: "admin123", rol: "Administrador" },
    { usuario: "rectoria", clave: "rect2026", rol: "Directivo" },
    { usuario: "profe_juan", clave: "docente123", rol: "Docente" },
    { usuario: "estudiante01", clave: "alumno456", rol: "Estudiante" },
    { usuario: "acudiente01", clave: "padre789", rol: "Acudiente" }
];

// Ruta para el inicio de sesión
app.post('/login', (req, res) => {
    const { usuario, clave } = req.body;

    // Buscamos si el usuario y la clave coinciden
    const encontrado = usuariosSIA.find(u => u.usuario === usuario && u.clave === clave);

    if (encontrado) {
        // Respuesta satisfactoria según la guía
        res.status(200).json({
            mensaje: "Autenticación satisfactoria",
            rol: encontrado.rol
        });
    } else {
        // Respuesta de error según la guía
        res.status(401).json({ 
            mensaje: "Error en la autenticación" 
        });
    }
});

app.listen(3000, () => console.log("Servidor corriendo"));

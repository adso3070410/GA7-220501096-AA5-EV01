// Simulación de base de datos para el Colegio Nazareth
const usuariosSIA = [
    { usuario: "director", clave: "nazareth2026", rol: "Administrador" },
    { usuario: "profe_juan", clave: "docente123", rol: "Docente" },
    { usuario: "estudiante01", clave: "alumno456", rol: "Estudiante" }
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

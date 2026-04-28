// Simulación de base de datos para el Colegio Nazareth
const usuariosSIA = [
    { user: "director", pass: "nazareth2026", rol: "Administrador" },
    { user: "profe_juan", pass: "docente123", rol: "Docente" },
    { user: "estudiante01", pass: "alumno456", rol: "Estudiante" }
];

app.post('/login', (req, res) => {
    const { usuario, password } = req.body;

    const encontrado = usuariosSIA.find(u => u.user === usuario && u.pass === password);

    if (encontrado) {
        res.status(200).json({ 
            mensaje: "Autenticación satisfactoria en SIA - Colegio Nazareth",
            rol: encontrado.rol 
        });
    } else {
        res.status(401).json({ mensaje: "Error en la autenticación: Usuario o clave incorrectos" });
    }
});
// 1. IMPORTACIÓN DE LIBRERÍAS
const express = require('express'); 
const app = express(); 
const PORT = 3000; 

// Permite que el servidor entienda el formato JSON en el cuerpo de las peticiones
app.use(express.json());

// 2. BASE DE DATOS SIMULADA (Usuarios y roles para el Colegio Nazareth)
const usuariosSIA = [
    { usuario: 'admin_sia', clave: 'admin123', rol: 'Administrador' },
    { usuario: 'rectoria', clave: 'rect2026', rol: 'Directivo' },
    { usuario: 'profe_juan', clave: 'docente123', rol: 'Docente' },
    { usuario: 'estudiante01', clave: 'alumno456', rol: 'Estudiante' },
    { usuario: 'acudiente01', clave: 'padre789', rol: 'Acudiente' }
]; 

// 3. SERVICIO DE REGISTRO (Ruta POST para añadir usuarios nuevos a la lista)
app.post('/registro', (req, res) => {
    const { usuario, clave, rol } = req.body;
    
    // Si falta algún dato, devolvemos un error 400
    if (!usuario || !clave || !rol) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }
    
    // Si los datos están completos, los guardamos en la lista usuariosSIA
    usuariosSIA.push({ usuario, clave, rol });
    res.json({ mensaje: `Usuario ${usuario} registrado con éxito como ${rol}` });
});

// 4. Ruta para el inicio de sesión
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

// 5. ARRANQUE DEL SERVIDOR
app.listen(PORT, () => {
    console.log("Servidor corriendo");
});
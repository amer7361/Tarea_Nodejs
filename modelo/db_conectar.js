import mysql from 'mysql';
var conectar = mysql.createConnection({
    host: 'localhost',
    user: 'user_tarea2',
    password: 'user123',
    database: 'db_tarea'
});

conectar.connect(function(err) {
    if (err) {
        console.log("Error en la conexion: " + err.stack);
        return;
    } else {
        console.log('Conexion Exitosa ID: ' + conectar.threadId);
    }
});

export { conectar };
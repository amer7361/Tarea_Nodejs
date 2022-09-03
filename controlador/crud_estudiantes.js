import { conectar } from "../modelo/db_conectar.js";

var crud_estudiantes = ({});

crud_estudiantes.leer = function(req, res) {
    conectar.query('select e.id_estudiante,e.carne,e.nombres,e.apellidos,e.direccion,e.telefono,e.correo_electronico,ts.id_tipos_sangre,ts.sangre,date_format(e.fecha_nacimiento,"%d-%m-%Y") as fecha_nacimiento from estudiantes  as e inner join tipos_sangre as ts on e.id_tipo_sangre=ts.id_tipos_sangre;', function(err, result) {
        if (err) {
            throw err;
        } else {
            conectar.query('select id_tipos_sangre, sangre from tipos_sangre;',function (err, resultado2) {
                if (err) {
                    throw err;
                } else {
            res.render('estudiantes/index', {
                resultado: result,
                sangre: resultado2
            });
        }
    });
}
});
}
export { crud_estudiantes };
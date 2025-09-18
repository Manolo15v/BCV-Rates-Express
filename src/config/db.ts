import { createPool } from "mysql2/promise";

// Crear el pool de conexiones
export const pool = createPool({
  host: "localhost",
  user: "root",
  password: "29830787",
  port: 3306,
  database: "BCV_Rates",
});


pool
  .getConnection()
  .then((connection) => {
    console.log("Conexión exitosa a la base de datos");
    connection.release();
  })
  .catch((err) => {
    console.error("Error al conectarse a la base de datos:");

    switch (err.code) {
      case "ECONNREFUSED":
        console.error(`No se pudo conectar al servidor MySQL`);
        break;

      case "ER_ACCESS_DENIED_ERROR":
        console.error(`Error de autenticación: Verifica el usuario y la contraseña.`);
        break;

      case "ER_BAD_DB_ERROR":
        console.error(`La base de datos no existe. Verifica el nombre de la base de datos.`);
        break;

      case "ETIMEDOUT":
        console.error(`Tiempo de espera agotado al intentar conectarse`);
        console.error("Verifica tu conexión a internet, el firewall y que el servidor MySQL esté accesible.");
        break;
  
      default:
        console.error("Error desconocido:", err);
        break;
    }
  });

import { getConnection } from '../database/connection.js';


export const getAsignaciones = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.Asignaciones');
  res.json(result.recordset);
};

import { getConnection } from '../database/connection.js';


export const getUbicaciones = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.Ubicaciones');
  res.json(result.recordset);
};

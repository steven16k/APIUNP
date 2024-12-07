import { getConnection } from '../database/connection.js';

export const getColorActivo = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.ColorActivo');
  res.json(result.recordset);
};
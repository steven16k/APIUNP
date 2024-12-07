import { getConnection } from '../database/connection.js';


export const getDepreciacion = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.Depreciacion');
  res.json(result.recordset);
};
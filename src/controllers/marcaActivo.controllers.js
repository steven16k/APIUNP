import { getConnection } from '../database/connection.js';


export const getMarcaActivos = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.MarcaActivo');
  res.json(result.recordset);
};
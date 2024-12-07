import { getConnection } from '../database/connection.js';


export const getMovimientos = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.Movimientos');
  res.json(result.recordset);
};
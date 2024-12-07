import { getConnection } from '../database/connection.js';


export const getGarantias = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.Garantias');
  res.json(result.recordset);
};

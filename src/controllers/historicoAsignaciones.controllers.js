import { getConnection } from '../database/connection.js';


export const getHistoricoAsignaciones = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.HistoricoAsignaciones');
  res.json(result.recordset);
};
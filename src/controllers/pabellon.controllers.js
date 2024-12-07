import { getConnection } from '../database/connection.js';
import sql from 'mssql';

export const getPabellon = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.Pabellon');
  res.json(result.recordset);
};
import { getConnection } from '../database/connection.js';
import sql from 'mssql';

export const getTipoActivo = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.TipoActivo');
  res.json(result.recordset);
};

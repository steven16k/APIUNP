import { getConnection } from '../database/connection.js';
import sql from 'mssql';

export const getProveedor = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.Proveedor');
  res.json(result.recordset);
};
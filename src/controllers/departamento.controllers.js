import { getConnection } from '../database/connection.js';


export const getDepartamentos = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.Departamento');
  res.json(result.recordset);
};
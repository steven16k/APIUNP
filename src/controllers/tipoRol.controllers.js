import { getConnection } from '../database/connection.js';


export const getTipoRol = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.TipoRol');
  res.json(result.recordset);
};

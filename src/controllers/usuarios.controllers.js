import { getConnection } from '../database/connection.js';
import sql from 'mssql';

export const getUsers = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool.request().query('SELECT * FROM GestionActivos.Usuario');
    res.json(result.recordset);
  } catch (error) {
    console.error('Error al obtener los usuarios:', error);
    res.status(500).send('Error al obtener los usuarios');
  }
};

import { getConnection } from '../database/connection.js';
import sql from 'mssql';

export const getProducts = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request().query('SELECT * FROM GestionActivos.GestionActivos');
  res.json(result.recordset);
};

export const getProduct = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input('ID_Activo', sql.Int, req.params.id)
    .query('SELECT * FROM GestionActivos.GestionActivos WHERE ID_Activo = @ID_Activo');

  if(result.rowsAffected[0] == 0) {
    return res.status(404).json({ message: "Activo not found" });
  }
  
  return res.json(result.recordset[0]);
};

export const createProduct = async (req, res) => {
  console.log(req.body);

  try {
    const pool = await getConnection();
    
    // Obtener el próximo ID disponible
    const maxIdResult = await pool.request().query("SELECT ISNULL(MAX(ID_Activo), 0) + 1 AS nextId FROM GestionActivos.GestionActivos");
    const nextId = maxIdResult.recordset[0].nextId;

    const result = await pool
      .request()
      .input("ID_Activo", sql.Int, nextId)
      .input("NumeroSerial", sql.VarChar, req.body.NumeroSerial)
      .input("NombreActivo", sql.NVarChar, req.body.NombreActivo)
      .input("Descripcion", sql.VarChar, req.body.Descripcion)
      .input("FechaCompra", sql.Date, req.body.FechaCompra)
      .input("CostoInicial", sql.Decimal(18, 2), req.body.CostoInicial)
      .input("ID_Proveedor", sql.Int, req.body.ID_Proveedor)
      .input("ID_TipoActivo", sql.Int, req.body.ID_TipoActivo)
      .input("ID_ColorActivo", sql.Int, req.body.ID_ColorActivo)
      .input("ID_MarcaActivo", sql.Int, req.body.ID_MarcaActivo)
      .input("ID_Ubicaciones", sql.Int, req.body.ID_Ubicaciones)
      .input("ID_Garantia", sql.Int, req.body.ID_Garantia)
      .query(
        "INSERT INTO GestionActivos.GestionActivos (ID_Activo, NumeroSerial, NombreActivo, Descripcion, FechaCompra, CostoInicial, ID_Proveedor, ID_TipoActivo, ID_ColorActivo, ID_MarcaActivo, ID_Ubicaciones, ID_Garantia) VALUES (@ID_Activo, @NumeroSerial, @NombreActivo, @Descripcion, @FechaCompra, @CostoInicial, @ID_Proveedor, @ID_TipoActivo, @ID_ColorActivo, @ID_MarcaActivo, @ID_Ubicaciones, @ID_Garantia)"
      );  // Eliminar "FROM" si es redundante.
    console.log(result);

    res.json({
      id: nextId,
      ID_Activo: nextId,
      NumeroSerial: req.body.NumeroSerial,
      NombreActivo: req.body.NombreActivo,
      Descripcion: req.body.Descripcion,
      FechaCompra: req.body.FechaCompra,
      CostoInicial: req.body.CostoInicial,
      ID_Proveedor: req.body.ID_Proveedor,
      ID_TipoActivo: req.body.ID_TipoActivo,
      ID_ColorActivo: req.body.ID_ColorActivo,
      ID_MarcaActivo: req.body.ID_MarcaActivo,
      ID_Ubicaciones: req.body.ID_Ubicaciones,
      ID_Garantia: req.body.ID_Garantia
    });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error al crear el producto");
  }
};

export const updateProduct = async (req, res) => {
  const id = req.params.id;

  const pool = await getConnection();
  const result = await pool.request()
    .input('ID_Activo', sql.Int, req.params.id)
    .input("NumeroSerial", sql.VarChar, req.body.NumeroSerial)
    .input("NombreActivo", sql.NVarChar, req.body.NombreActivo)
    .input("Descripcion", sql.VarChar, req.body.Descripcion)
    .input("FechaCompra", sql.Date, req.body.FechaCompra)
    .input("CostoInicial", sql.Decimal(18, 2), req.body.CostoInicial)
    .input("ID_Proveedor", sql.Int, req.body.ID_Proveedor)
    .input("ID_TipoActivo", sql.Int, req.body.ID_TipoActivo)
    .input("ID_ColorActivo", sql.Int, req.body.ID_ColorActivo)
    .input("ID_MarcaActivo", sql.Int, req.body.ID_MarcaActivo)
    .input("ID_Ubicaciones", sql.Int, req.body.ID_Ubicaciones)
    .input("ID_Garantia", sql.Int, req.body.ID_Garantia)
    .query('UPDATE GestionActivos SET NumeroSerial = @NumeroSerial, NombreActivo = @NombreActivo, Descripcion = @Descripcion, FechaCompra = @FechaCompra, CostoInicial = @CostoInicial, ID_Proveedor = @ID_Proveedor, ID_TipoActivo = @ID_TipoActivo, ID_ColorActivo = @ID_ColorActivo, ID_MarcaActivo = @ID_MarcaActivo, ID_Ubicaciones = @ID_Ubicaciones, ID_Garantia = @ID_Garantia WHERE ID_Activo = @ID_Activo');

  if (result.rowsAffected[0] == 0) {
    return res.status(404).json({ message: "Activo not found" });
  }

  res.json({
    ID_Activo: req.params.id,
    NumeroSerial: req.body.NumeroSerial,
    NombreActivo: req.body.NombreActivo,
    Descripcion: req.body.Descripcion,
    FechaCompra: req.body.FechaCompra,
    CostoInicial: req.body.CostoInicial,
    ID_Proveedor: req.body.ID_Proveedor,
    ID_TipoActivo: req.body.ID_TipoActivo,
    ID_ColorActivo: req.body.ID_ColorActivo,
    ID_MarcaActivo: req.body.ID_MarcaActivo,
    ID_Ubicaciones: req.body.ID_Ubicaciones,
    ID_Garantia: req.body.ID_Garantia
  });
};

export const deleteProduct = async (req, res) => {
  const pool = await getConnection();
  const result = await pool.request()
    .input('ID_Activo', sql.Int, req.params.id)
    .query("DELETE FROM GestionActivos.GestionActivos WHERE ID_Activo = @ID_Activo");

  console.log(result);

  if (result.rowsAffected[0] == 0) {
    return res.status(404).json({ message: "Activo not found" });
  }

  return res.json({ message: "Activo deleted" });
};

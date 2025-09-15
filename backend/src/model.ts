import mysql, { type ResultSetHeader } from "mysql2/promise";

// adatbazis-kapcsolat (pool) letrehozasa

const pool = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "userdb"
});

// a felhasznalo tipusat deklaraljuk
export interface User{
    id: number;
    nev: string;
    cim: string;
    szuletesiDatum: string | null;
}

// osszes felhasznalo lekerese
export const getUsers = async () =>{
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
}

export const createUser = async (user: Omit<User, "id">) =>{
    const [result] = await pool.query<ResultSetHeader>("INSERT INTO users (nev, cimm szuletesiDatum) VALUES (?,?,?)", [user.nev, user.cim, user.szuletesiDatum])

    const insertedId = result.insertId
    return {...user, id: insertedId}
}
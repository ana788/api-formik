import db from '../database/db.js'

const list = async () => {
   return await db.query('SELECT * FROM paciente')
}

const create = async (user) => {
    const {nome, email, data_nasc, telefone, sexo, cpf} = user
    return await db.query('INSERT INTO paciente (nome, email, data_nasc, telefone, sexo, cpf) VALUES (?,?,?,?,?,?)', [nome, email, data_nasc, telefone, sexo, cpf]) //retorna se deu sucesso ou não
 }

 const get = async (id) => {
   return await db.query('SELECT * FROM paciente WHERE id = ?;', [id])
 }

 const remove = async (id) => {
   return await db.query('DELETE FROM paciente WHERE id = ?;', [id]) 
}

const update = async (user) => {
   const {id, nome, email, data_nasc, telefone, sexo, cpf} = user
   return await db.query('UPDATE paciente SET nome = ?, email = ?, data_nasc = ?, telefone = ?, sexo = ?, cpf = ? WHERE id = ?;', [nome, email, data_nasc, telefone, sexo, cpf, id])
}

export default {list, create, get, remove, update}
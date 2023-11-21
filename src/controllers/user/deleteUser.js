import user from "../../models/userModel.js"

const deleteUser = async(req, res) => {
    //Deletar
    try {
        const id = req.body.id
        const [result] = await user.remove(req.body.id)
        if(result.affectedRows === 1){
            res.status(200).json({
                success: `Paciente com id:${id} deletado com sucesso`,
            })  
        } else {
            res.status(404).json({
                error: `Paciente com id:${id} não encontrado`,
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({message: "Server error"})
    }
}

export default deleteUser
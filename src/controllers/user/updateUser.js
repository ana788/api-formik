import user from "../../models/userModel.js"

const updateUser = async (req, res) => {
    //Update
    try {
        const [result] = await user.update(req.body)
        if (result.affectedRows === 1) {
            res.status(200).json({
                success: `Paciente com id:${req.body.id} atualizado com sucesso`,
                user: {
                    ...req.body
                }
            })
        } else {
            res.status(404).json({
                error: `Paciente com id:${req.body.id} não encontrado`,
            })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Server error" })
    }
    //res.json({ message: "Usuário atualizado com sucesso" })
}

export default updateUser
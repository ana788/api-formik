import user from "../../models/userModel.js"

const createUser = async(req, res) => {
    //Create
    try {
        const [result] = await user.create(req.body)
        if(result.affectedRows === 1){
            const newUser = req.body
            res.status(201).json({
                sucess: "Paciente cadastrado",
                user:{
                    id: result.insertId,
                    ...newUser
                }
            })
    
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({error: "Server error"})
    }
}

export default createUser
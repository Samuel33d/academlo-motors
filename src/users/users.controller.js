const UsersServices = require("./users.service")

const findAll = async (req, res) => {
    try {
        const users = await UsersServices.findAll()

        return res.status(200).json({
            data: users
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error: error.message
        })
    }
}

const findOne = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UsersServices.findOne(id)

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: `User with id ${id} not found`
            })
        }

        return res.status(200).json({
            data: user
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error: error.message
        })
    }
}

const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        const existingEmail = await UsersServices.findOneByEmail(email)

        if (existingEmail) {
            return res.status(200).json({
                status: 'success',
                message: 'Email already exist'
            });
        }

        await UsersServices.create({ name, email, password, role })

        return res.status(201).json({
            status: 'success',
            message: 'User created succesfully'
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error: error.message
        });
    }

}

const updateUser = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email } = req.body
        const user = await UsersServices.findOne(id)

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: `User with id ${id} not found`
            })
        }

        await UsersServices.update(user, { name, email })

        return res.status(200).json({
            status: "success",
            message: 'User updated succesfully'
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UsersServices.findOne(id)

        if (!user) {
            return res.status(404).json({
                status: "error",
                message: `User with id ${id} not found`
            })
        }

        await UsersServices.delete(user)

        return res.status(204).json(null)

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error: error.message
        })
    }
}

module.exports = {
    findAll,
    findOne,
    createUser,
    updateUser,
    deleteUser
}
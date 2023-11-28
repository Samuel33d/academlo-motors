const RepairsServices = require("./repairs.service")

const findAll = async (req, res) => {
    try {
        const repairs = await RepairsServices.findAll()

        return res.status(200).json({
            data: repairs
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
        const repair = await RepairsServices.findOne(id)

        if (!repair) {
            return res.status(404).json({
                status: "error",
                message: `Repair with id ${id} not found`
            })
        }

        return res.status(200).json({
            data: repair
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error: error.message
        })
    }
}
const createRepair = async (req, res) => {
    try {
        const { date } = req.body
        await RepairsServices.create({ date })

        return res.status(201).json({
            status: 'success',
            message: 'Repair created succesfully'
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error: error.message
        })
    }
}
const updateRepair = async (req, res) => {
    try {
        const { id } = req.params
        const repair = await RepairsServices.findOne(id)



        if (!repair) {
            return res.status(404).json({
                status: "error",
                message: `Repair with id ${id} not found`
            })
        }

        await RepairsServices.update(repair)

        return res.status(200).json({
            status: "success",
            message: 'Repair updated succesfully'
        })

    } catch (error) {
        return res.status(500).json({
            status: 'fail',
            message: 'Something went very wrong!',
            error: error.message
        })
    }
}
const deleteRepair = async (req, res) => {
    try {
        const { id } = req.params
        const repair = await RepairsServices.findOne(id, ['pending', 'completed'])

        
        if (!repair) {
            return res.status(404).json({
                status: "error",
                message: `Repair with id ${id} not found`
            })
        }
        
        if (repair?.status === 'completed') {
            return res.status(400).json({
                status: "error",
                message: `You cannot cancel a completed repair`
            })
        }
        
        await RepairsServices.delete(repair)

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
    createRepair,
    updateRepair,
    deleteRepair
}
const Repairs = require('./repairs.model')

class RepairsServices {
    static async create(data) {
        return await Repairs.create(data)
    }
    static async findAll() {
        return await Repairs.findAll({
            where: {
                status: 'pending'
            }
        })
    }
    static async findOne(id, status = 'pending') {
        return await Repairs.findOne({
            where: {
                id,
                status: status
            }
        })
    }
    static async update(repair) {
        return await repair.update({
            status: 'completed'
        })
    }
    static async delete(repair) {
        return await repair.update({
            status: 'cancelled'
        })
    }
}

module.exports = RepairsServices
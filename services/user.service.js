const data = require('../data.json')
const NotFoundException = require('../exceptions/NotFoundException')

exports.getUserById = async id => {
  try {
    const user = data.users.filter(user => user.id === Number(id))

    if (user.length === 0) {
      throw new NotFoundException('user')
    }

    return user[0]
  } catch (error) {
    throw error
  }
}

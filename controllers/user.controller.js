const data = require('../data.json')
const UserService = require('../services/user.service')

exports.getAll = async (req, res) => {
  res.send(data)
}

exports.findOne = async (req, res, next) => {
  const { id } = req.params

  try {
    const user = await UserService.getUserById(id)
    res.send(user)
  } catch (error) {
    next(error)
  }
}

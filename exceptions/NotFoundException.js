const HttpException = require('./HttpException')

class NotFoundException extends HttpException {
  constructor(model) {
    super(404, `Could not find ${model}`)
  }
}

module.exports = NotFoundException

const chalk = require('chalk')

/**
 * Consoler
 * @constructor
 * @param {object} option
 * @param {string} option.separator
 */
class Consoler {
  constructor() {
    this.option = {
      separator: ''
    }
  }

  /**
   * space
   * @param {string} separator
   * @returns {void}
   */
  space(separator) {
    console.log(separator || this.option.separator)
  }

  /**
   * space
   * @param {string} label
   * @param {any} data
   * @returns {void}
   */
  success(label, data) {
    const isSingleLine = ['string', 'number'].includes(typeof data)
    const labelLog = label ? chalk.black.bgGreen(label) : ''

    this.space()

    if (isSingleLine) {
      console.log(`${labelLog} ${data}`)
    } else {
      console.log(labelLog)
      console.log(data)
    }
  }

  /**
   * alert
   * @param {string} label
   * @param {any} data
   * @returns {void}
   */
  alert(label, data) {
    const isSingleLine = ['string', 'number'].includes(typeof data)
    const labelLog = label ? chalk.black.bgRed(label) : ''

    this.space()

    if (isSingleLine) {
      console.log(`${labelLog} ${data}`)
    } else {
      console.log(labelLog)
      console.log(data)
    }
  }
}

module.exports = Consoler

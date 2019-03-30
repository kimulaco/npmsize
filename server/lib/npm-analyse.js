const packageSize = require('package-size')

/**
 * NpmAnalyse
 * @constructor
 */
class NpmAnalyse {
  constructor() {
    this.queue = []
  }

  /**
   * clearQueue
   * @returns {void}
   */
  clearQueue() {
    this.queue = []
  }

  /**
   * size
   * @param {array|string} packageName
   * @returns {Promise}
   */
  size(packageName) {
    const packages = Array.isArray(packageName) ? packageName : [packageName]

    this.clearQueue()

    packages.forEach((packageName) => {
      this.queue.push(new Promise((resolve) => {
        packageSize(packageName).then((data) => {
          resolve(data)
        }).catch(() => {
          resolve({
            name: packageName,
            error: 'Could not measure package size.'
          })
        })
      }))
    })

    return Promise.all(this.queue).then((result) => {
      this.clearQueue()

      return result
    })
  }
}

module.exports = NpmAnalyse

const fields = ['id', 'logger', 'requestedMimeTypes'];

/**
 * Contains additional information about a request
 *
 * @class RequestContext
 */
class RequestContext {
  /**
   * Creates an instance of RequestContext.
   *
   * @param {String} id request identifier
   * @memberof RequestContext
   */
  constructor(id) {
    this.model = {};
    for (const field of fields) {
      this.model[field] = undefined;
    }
    this.model.id = id;
    Object.seal(this.model);
    Object.seal(this);
  }

  /**
   * Returns the request identifier
   *
   * @returns {String} The request identifier
   * @memberof RequestContext
   */
  get id() {
    return this.model.id;
  }

  /**
   * Sets the request identifier
   *
   * @param {String} id The request identifier
   * @returns {void}
   * @memberof RequestContext
   */
  set id(id) {
    this.model.id = id;
  }

  /**
   * Returns the request logger
   *
   * @returns {String} The request logger
   * @memberof RequestContext
   */
  get logger() {
    return this.model.logger;
  }

  /**
   * Sets the request logger
   *
   * @param {String} logger The request logger
   * @returns {void}
   * @memberof RequestContext
   */
  set logger(logger) {
    this.model.logger = logger;
  }

  /**
   * Returns the requestedMimeTypes
   *
   * @returns {String} The requestedMimeTypes
   * @memberof RequestContext
   */
  get requestedMimeTypes() {
    return this.model.requestedMimeTypes;
  }

  /**
   * Sets the requestedMimeTypes
   *
   * @param {String} requestedMimeTypes The requestedMimeTypes
   * @returns {void}
   * @memberof RequestContext
   */
  set requestedMimeTypes(requestedMimeTypes) {
    this.model.requestedMimeTypes = requestedMimeTypes;
  }
}

module.exports = RequestContext;

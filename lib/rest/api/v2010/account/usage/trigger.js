'use strict';

var _ = require('lodash');
var Q = require('q');
var Page = require('../../../../../base/Page');
var deserialize = require('../../../../../base/deserialize');
var values = require('../../../../../base/values');

var TriggerPage;
var TriggerList;
var TriggerInstance;
var TriggerContext;

/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerPage
 * @augments Page
 * @description Initialize the TriggerPage
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} response - Response from the API
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 *
 * @returns TriggerPage
 */
/* jshint ignore:end */
function TriggerPage(version, response, accountSid) {
  Page.prototype.constructor.call(this, version, response);

  // Path Solution
  this._solution = {
    accountSid: accountSid
  };
}

_.extend(TriggerPage.prototype, Page.prototype);
TriggerPage.prototype.constructor = TriggerPage;

/* jshint ignore:start */
/**
 * Build an instance of TriggerInstance
 *
 * @function getInstance
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerPage
 * @instance
 *
 * @param {object} payload - Payload response from the API
 *
 * @returns TriggerInstance
 */
/* jshint ignore:end */
TriggerPage.prototype.getInstance = function getInstance(payload) {
  return new TriggerInstance(
    this._version,
    payload,
    this._solution.accountSid
  );
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
 * @description Initialize the TriggerList
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {string} accountSid -
 *          A 34 character string that uniquely identifies this resource.
 */
/* jshint ignore:end */
function TriggerList(version, accountSid) {
  /* jshint ignore:start */
  /**
   * @function triggers
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext
   * @instance
   *
   * @param {string} sid - sid of instance
   *
   * @returns {Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext}
   */
  /* jshint ignore:end */
  function TriggerListInstance(sid) {
    return TriggerListInstance.get(sid);
  }

  TriggerListInstance._version = version;
  // Path Solution
  TriggerListInstance._solution = {
    accountSid: accountSid
  };
  TriggerListInstance._uri = _.template(
    '/Accounts/<%= accountSid %>/Usage/Triggers.json' // jshint ignore:line
  )(TriggerListInstance._solution);
  /* jshint ignore:start */
  /**
   * create a TriggerInstance
   *
   * @function create
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {object} opts - ...
   * @param {string} opts.callbackUrl -
   *          URL Twilio will request when the trigger fires
   * @param {string} opts.triggerValue - the value at which the trigger will fire
   * @param {trigger.usage_category} opts.usageCategory -
   *          The usage category the trigger watches
   * @param {string} [opts.callbackMethod] - HTTP method to use with callback_url
   * @param {string} [opts.friendlyName] -
   *          A user-specified, human-readable name for the trigger.
   * @param {trigger.recurring} [opts.recurring] - How this trigger recurs
   * @param {trigger.trigger_field} [opts.triggerBy] -
   *          The field in the UsageRecord that fires the trigger
   * @param {function} [callback] - Callback to handle processed record
   *
   * @returns {Promise} Resolves to processed TriggerInstance
   */
  /* jshint ignore:end */
  TriggerListInstance.create = function create(opts, callback) {
    if (_.isUndefined(opts)) {
      throw new Error('Required parameter "opts" missing.');
    }
    if (_.isUndefined(opts.callbackUrl)) {
      throw new Error('Required parameter "opts.callbackUrl" missing.');
    }
    if (_.isUndefined(opts.triggerValue)) {
      throw new Error('Required parameter "opts.triggerValue" missing.');
    }
    if (_.isUndefined(opts.usageCategory)) {
      throw new Error('Required parameter "opts.usageCategory" missing.');
    }

    var deferred = Q.defer();
    var data = values.of({
      'CallbackUrl': opts.callbackUrl,
      'TriggerValue': opts.triggerValue,
      'UsageCategory': opts.usageCategory,
      'CallbackMethod': opts.callbackMethod,
      'FriendlyName': opts.friendlyName,
      'Recurring': opts.recurring,
      'TriggerBy': opts.triggerBy
    });

    var promise = this._version.create({
      uri: this._uri,
      method: 'POST',
      data: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TriggerInstance(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Streams TriggerInstance records from the API.
   *
   * This operation lazily loads records as efficiently as possible until the limit
   * is reached.
   *
   * The results are passed into the callback function, so this operation is memory efficient.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function each
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {trigger.recurring} [opts.recurring] - Filter by recurring
   * @param {trigger.trigger_field} [opts.triggerBy] - Filter by trigger by
   * @param {trigger.usage_category} [opts.usageCategory] - Filter by Usage Category
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize=50] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no pageSize is defined but a limit is defined,
   *         list() will attempt to read the limit with the most efficient
   *         page size, i.e. min(limit, 1000)
   * @param {Function} [opts.callback] -
   *         Function to process each record. If this and a positional
   * callback are passed, this one will be used
   * @param {Function} [opts.done] -
   *          Function to be called upon completion of streaming
   * @param {Function} [callback] - Function to process each record
   */
  /* jshint ignore:end */
  TriggerListInstance.each = function each(opts, callback) {
    opts = opts || {};
    if (_.isFunction(opts)) {
      opts = { callback: opts };
    } else if (_.isFunction(callback) && !_.isFunction(opts.callback)) {
      opts.callback = callback;
    }

    if (_.isUndefined(opts.callback)) {
      throw new Error('Callback function must be provided');
    }

    var done = false;
    var currentPage = 1;
    var limits = this._version.readLimits({
      limit: opts.limit,
      pageSize: opts.pageSize
    });

    function onComplete(error) {
      done = true;
      if (_.isFunction(opts.done)) {
        opts.done(error);
      }
    }

    function fetchNextPage(fn) {
      var promise = fn();
      if (_.isUndefined(promise)) {
        onComplete();
        return;
      }

      promise.then(function(page) {
        _.each(page.instances, function(instance) {
          if (done) {
            return false;
          }

          opts.callback(instance, onComplete);
        });

        if ((limits.pageLimit && limits.pageLimit <= currentPage)) {
          onComplete();
        } else if (!done) {
          currentPage++;
          fetchNextPage(_.bind(page.nextPage, page));
        }
      });

      promise.catch(onComplete);
    }

    fetchNextPage(_.bind(this.page, this, opts));
  };

  /* jshint ignore:start */
  /**
   * @description Lists TriggerInstance records from the API as a list.
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function list
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {trigger.recurring} [opts.recurring] - Filter by recurring
   * @param {trigger.trigger_field} [opts.triggerBy] - Filter by trigger by
   * @param {trigger.usage_category} [opts.usageCategory] - Filter by Usage Category
   * @param {number} [opts.limit] -
   *         Upper limit for the number of records to return.
   *         list() guarantees never to return more than limit.
   *         Default is no limit
   * @param {number} [opts.pageSize] -
   *         Number of records to fetch per request,
   *         when not set will use the default value of 50 records.
   *         If no page_size is defined but a limit is defined,
   *         list() will attempt to read the limit with the most
   *         efficient page size, i.e. min(limit, 1000)
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TriggerListInstance.list = function list(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};
    var deferred = Q.defer();
    var allResources = [];
    opts.callback = function(resource) {
      allResources.push(resource);
    };

    opts.done = function(error) {
      if (_.isUndefined(error)) {
        deferred.resolve(allResources);
      } else {
        deferred.reject(error);
      }
    };

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    this.each(opts);
    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Retrieve a single page of TriggerInstance records from the API.
   * Request is executed immediately
   *
   * If a function is passed as the first argument, it will be used as the callback function.
   *
   * @function page
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {object|function} opts - ...
   * @param {trigger.recurring} [opts.recurring] - Filter by recurring
   * @param {trigger.trigger_field} [opts.triggerBy] - Filter by trigger by
   * @param {trigger.usage_category} [opts.usageCategory] - Filter by Usage Category
   * @param {string} [opts.pageToken] - PageToken provided by the API
   * @param {number} [opts.pageNumber] -
   *          Page Number, this value is simply for client state
   * @param {number} [opts.pageSize] - Number of records to return, defaults to 50
   * @param {function} [callback] - Callback to handle list of records
   *
   * @returns {Promise} Resolves to a list of records
   */
  /* jshint ignore:end */
  TriggerListInstance.page = function page(opts, callback) {
    if (_.isFunction(opts)) {
      callback = opts;
      opts = {};
    }
    opts = opts || {};

    var deferred = Q.defer();
    var data = values.of({
      'Recurring': opts.recurring,
      'TriggerBy': opts.triggerBy,
      'UsageCategory': opts.usageCategory,
      'PageToken': opts.pageToken,
      'Page': opts.pageNumber,
      'PageSize': opts.pageSize
    });

    var promise = this._version.page({
      uri: this._uri,
      method: 'GET',
      params: data
    });

    promise = promise.then(function(payload) {
      deferred.resolve(new TriggerPage(
        this._version,
        payload,
        this._solution.accountSid,
        this._solution.sid
      ));
    }.bind(this));

    promise.catch(function(error) {
      deferred.reject(error);
    });

    if (_.isFunction(callback)) {
      deferred.promise.nodeify(callback);
    }

    return deferred.promise;
  };

  /* jshint ignore:start */
  /**
   * Constructs a trigger
   *
   * @function get
   * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerList
   * @instance
   *
   * @param {string} sid - Fetch by unique usage-trigger Sid
   *
   * @returns {Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext}
   */
  /* jshint ignore:end */
  TriggerListInstance.get = function get(sid) {
    return new TriggerContext(
      this._version,
      this._solution.accountSid,
      sid
    );
  };

  return TriggerListInstance;
}


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
 * @description Initialize the TriggerContext
 *
 * @property {string} accountSid - The account this trigger monitors.
 * @property {string} apiVersion - The api_version
 * @property {string} callbackMethod - HTTP method to use with callback_url
 * @property {string} callbackUrl - URL Twilio will request when the trigger fires
 * @property {string} currentValue -
 *          The current value of the field the trigger is watching.
 * @property {Date} dateCreated - The date this resource was created
 * @property {Date} dateFired - The date the trigger was last fired
 * @property {Date} dateUpdated - The date this resource was last updated
 * @property {string} friendlyName -
 *          A user-specified, human-readable name for the trigger.
 * @property {trigger.recurring} recurring - How this trigger recurs
 * @property {string} sid - The trigger's unique Sid
 * @property {trigger.trigger_field} triggerBy -
 *          The field in the UsageRecord that fires the trigger
 * @property {string} triggerValue - the value at which the trigger will fire
 * @property {string} uri - The URI for this resource
 * @property {trigger.usage_category} usageCategory -
 *          The usage category the trigger watches
 * @property {string} usageRecordUri -
 *          The URI of the UsageRecord this trigger is watching
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {object} payload - The instance payload
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique usage-trigger Sid
 */
/* jshint ignore:end */
function TriggerInstance(version, payload, accountSid, sid) {
  this._version = version;

  // Marshaled Properties
  this.accountSid = payload.account_sid; // jshint ignore:line
  this.apiVersion = payload.api_version; // jshint ignore:line
  this.callbackMethod = payload.callback_method; // jshint ignore:line
  this.callbackUrl = payload.callback_url; // jshint ignore:line
  this.currentValue = payload.current_value; // jshint ignore:line
  this.dateCreated = deserialize.rfc2822DateTime(payload.date_created); // jshint ignore:line
  this.dateFired = deserialize.rfc2822DateTime(payload.date_fired); // jshint ignore:line
  this.dateUpdated = deserialize.rfc2822DateTime(payload.date_updated); // jshint ignore:line
  this.friendlyName = payload.friendly_name; // jshint ignore:line
  this.recurring = payload.recurring; // jshint ignore:line
  this.sid = payload.sid; // jshint ignore:line
  this.triggerBy = payload.trigger_by; // jshint ignore:line
  this.triggerValue = payload.trigger_value; // jshint ignore:line
  this.uri = payload.uri; // jshint ignore:line
  this.usageCategory = payload.usage_category; // jshint ignore:line
  this.usageRecordUri = payload.usage_record_uri; // jshint ignore:line

  // Context
  this._context = undefined;
  this._solution = {
    accountSid: accountSid,
    sid: sid || this.sid,
  };
}

Object.defineProperty(TriggerInstance.prototype,
  '_proxy', {
  get: function() {
    if (!this._context) {
      this._context = new TriggerContext(
        this._version,
        this._solution.accountSid,
        this._solution.sid
      );
    }

    return this._context;
  },
});

/* jshint ignore:start */
/**
 * fetch a TriggerInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TriggerInstance
 */
/* jshint ignore:end */
TriggerInstance.prototype.fetch = function fetch(callback) {
  return this._proxy.fetch(callback);
};

/* jshint ignore:start */
/**
 * update a TriggerInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.callbackMethod] - HTTP method to use with callback_url
 * @param {string} [opts.callbackUrl] -
 *          URL Twilio will request when the trigger fires
 * @param {string} [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TriggerInstance
 */
/* jshint ignore:end */
TriggerInstance.prototype.update = function update(opts, callback) {
  return this._proxy.update(callback);
};

/* jshint ignore:start */
/**
 * remove a TriggerInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerInstance
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TriggerInstance
 */
/* jshint ignore:end */
TriggerInstance.prototype.remove = function remove(callback) {
  return this._proxy.remove(callback);
};


/* jshint ignore:start */
/**
 * @constructor Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
 * @description Initialize the TriggerContext
 *
 * @param {Twilio.Api.V2010} version - Version of the resource
 * @param {sid} accountSid - The account_sid
 * @param {sid} sid - Fetch by unique usage-trigger Sid
 */
/* jshint ignore:end */
function TriggerContext(version, accountSid, sid) {
  this._version = version;

  // Path Solution
  this._solution = {
    accountSid: accountSid,
    sid: sid,
  };
  this._uri = _.template(
    '/Accounts/<%= accountSid %>/Usage/Triggers/<%= sid %>.json' // jshint ignore:line
  )(this._solution);
}

/* jshint ignore:start */
/**
 * fetch a TriggerInstance
 *
 * @function fetch
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TriggerInstance
 */
/* jshint ignore:end */
TriggerContext.prototype.fetch = function fetch(callback) {
  var deferred = Q.defer();
  var promise = this._version.fetch({
    uri: this._uri,
    method: 'GET'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TriggerInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * update a TriggerInstance
 *
 * @function update
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
 * @instance
 *
 * @param {object|function} opts - ...
 * @param {string} [opts.callbackMethod] - HTTP method to use with callback_url
 * @param {string} [opts.callbackUrl] -
 *          URL Twilio will request when the trigger fires
 * @param {string} [opts.friendlyName] -
 *          A user-specified, human-readable name for the trigger.
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TriggerInstance
 */
/* jshint ignore:end */
TriggerContext.prototype.update = function update(opts, callback) {
  if (_.isFunction(opts)) {
    callback = opts;
    opts = {};
  }
  opts = opts || {};

  var deferred = Q.defer();
  var data = values.of({
    'CallbackMethod': opts.callbackMethod,
    'CallbackUrl': opts.callbackUrl,
    'FriendlyName': opts.friendlyName
  });

  var promise = this._version.update({
    uri: this._uri,
    method: 'POST',
    data: data
  });

  promise = promise.then(function(payload) {
    deferred.resolve(new TriggerInstance(
      this._version,
      payload,
      this._solution.accountSid,
      this._solution.sid
    ));
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

/* jshint ignore:start */
/**
 * remove a TriggerInstance
 *
 * @function remove
 * @memberof Twilio.Api.V2010.AccountContext.UsageContext.TriggerContext
 * @instance
 *
 * @param {function} [callback] - Callback to handle processed record
 *
 * @returns {Promise} Resolves to processed TriggerInstance
 */
/* jshint ignore:end */
TriggerContext.prototype.remove = function remove(callback) {
  var deferred = Q.defer();
  var promise = this._version.remove({
    uri: this._uri,
    method: 'DELETE'
  });

  promise = promise.then(function(payload) {
    deferred.resolve(payload);
  }.bind(this));

  promise.catch(function(error) {
    deferred.reject(error);
  });

  if (_.isFunction(callback)) {
    deferred.promise.nodeify(callback);
  }

  return deferred.promise;
};

module.exports = {
  TriggerPage: TriggerPage,
  TriggerList: TriggerList,
  TriggerInstance: TriggerInstance,
  TriggerContext: TriggerContext
};
'use strict';

var _ = require('lodash');  /* jshint ignore:line */
var AccountContext = require('./v2010/account').AccountContext;
var AccountList = require('./v2010/account').AccountList;
var Version = require('../../base/Version');  /* jshint ignore:line */


/* jshint ignore:start */
/**
 * Initialize the V2010 version of Api
 *
 * @constructor Twilio.Api.V2010
 *
 * @property {Twilio.Api.V2010.AccountList} accounts - accounts resource
 * @property {Twilio.Api.V2010.AccountContext} account - account resource
 * @property {Twilio.Api.V2010.AccountContext.AddressList} addresses -
 *          addresses resource
 * @property {Twilio.Api.V2010.AccountContext.ApplicationList} applications -
 *          applications resource
 * @property {Twilio.Api.V2010.AccountContext.AuthorizedConnectAppList} authorizedConnectApps -
 *          authorizedConnectApps resource
 * @property {Twilio.Api.V2010.AccountContext.AvailablePhoneNumberCountryList} availablePhoneNumbers -
 *          availablePhoneNumbers resource
 * @property {Twilio.Api.V2010.AccountContext.CallList} calls - calls resource
 * @property {Twilio.Api.V2010.AccountContext.ConferenceList} conferences -
 *          conferences resource
 * @property {Twilio.Api.V2010.AccountContext.ConnectAppList} connectApps -
 *          connectApps resource
 * @property {Twilio.Api.V2010.AccountContext.IncomingPhoneNumberList} incomingPhoneNumbers -
 *          incomingPhoneNumbers resource
 * @property {Twilio.Api.V2010.AccountContext.KeyList} keys - keys resource
 * @property {Twilio.Api.V2010.AccountContext.MessageList} messages -
 *          messages resource
 * @property {Twilio.Api.V2010.AccountContext.NewKeyList} newKeys -
 *          newKeys resource
 * @property {Twilio.Api.V2010.AccountContext.NewSigningKeyList} newSigningKeys -
 *          newSigningKeys resource
 * @property {Twilio.Api.V2010.AccountContext.NotificationList} notifications -
 *          notifications resource
 * @property {Twilio.Api.V2010.AccountContext.OutgoingCallerIdList} outgoingCallerIds -
 *          outgoingCallerIds resource
 * @property {Twilio.Api.V2010.AccountContext.QueueList} queues - queues resource
 * @property {Twilio.Api.V2010.AccountContext.RecordingList} recordings -
 *          recordings resource
 * @property {Twilio.Api.V2010.AccountContext.SigningKeyList} signingKeys -
 *          signingKeys resource
 * @property {Twilio.Api.V2010.AccountContext.SipList} sip - sip resource
 * @property {Twilio.Api.V2010.AccountContext.ShortCodeList} shortCodes -
 *          shortCodes resource
 * @property {Twilio.Api.V2010.AccountContext.TokenList} tokens - tokens resource
 * @property {Twilio.Api.V2010.AccountContext.TranscriptionList} transcriptions -
 *          transcriptions resource
 * @property {Twilio.Api.V2010.AccountContext.UsageList} usage - usage resource
 * @property {Twilio.Api.V2010.AccountContext.ValidationRequestList} validationRequests -
 *          validationRequests resource
 *
 * @param {Twilio.Api} domain - The twilio domain
 */
/* jshint ignore:end */
function V2010(domain) {
  Version.prototype.constructor.call(this, domain, '2010-04-01');

  // Resources
  this._accounts = undefined;
  this._account = undefined;
}

_.extend(V2010.prototype, Version.prototype);
V2010.prototype.constructor = V2010;

Object.defineProperty(V2010.prototype,
  'accounts', {
  get: function() {
    this._accounts = this._accounts || new AccountList(this);
    return this._accounts;
  }
});

Object.defineProperty(V2010.prototype,
  'account', {
  get: function() {
    if (!this._account) {
      this._account = new AccountContext(this, this._domain.twilio.accountSid);
    }

    return this._account;
  },

  set: function(accountContext) {
    this._account = accountContext;
  }
});

Object.defineProperty(V2010.prototype,
  'addresses', {
  get: function() {
    return this.account.addresses;
  }
});

Object.defineProperty(V2010.prototype,
  'applications', {
  get: function() {
    return this.account.applications;
  }
});

Object.defineProperty(V2010.prototype,
  'authorizedConnectApps', {
  get: function() {
    return this.account.authorizedConnectApps;
  }
});

Object.defineProperty(V2010.prototype,
  'availablePhoneNumbers', {
  get: function() {
    return this.account.availablePhoneNumbers;
  }
});

Object.defineProperty(V2010.prototype,
  'calls', {
  get: function() {
    return this.account.calls;
  }
});

Object.defineProperty(V2010.prototype,
  'conferences', {
  get: function() {
    return this.account.conferences;
  }
});

Object.defineProperty(V2010.prototype,
  'connectApps', {
  get: function() {
    return this.account.connectApps;
  }
});

Object.defineProperty(V2010.prototype,
  'incomingPhoneNumbers', {
  get: function() {
    return this.account.incomingPhoneNumbers;
  }
});

Object.defineProperty(V2010.prototype,
  'keys', {
  get: function() {
    return this.account.keys;
  }
});

Object.defineProperty(V2010.prototype,
  'messages', {
  get: function() {
    return this.account.messages;
  }
});

Object.defineProperty(V2010.prototype,
  'newKeys', {
  get: function() {
    return this.account.newKeys;
  }
});

Object.defineProperty(V2010.prototype,
  'newSigningKeys', {
  get: function() {
    return this.account.newSigningKeys;
  }
});

Object.defineProperty(V2010.prototype,
  'notifications', {
  get: function() {
    return this.account.notifications;
  }
});

Object.defineProperty(V2010.prototype,
  'outgoingCallerIds', {
  get: function() {
    return this.account.outgoingCallerIds;
  }
});

Object.defineProperty(V2010.prototype,
  'queues', {
  get: function() {
    return this.account.queues;
  }
});

Object.defineProperty(V2010.prototype,
  'recordings', {
  get: function() {
    return this.account.recordings;
  }
});

Object.defineProperty(V2010.prototype,
  'signingKeys', {
  get: function() {
    return this.account.signingKeys;
  }
});

Object.defineProperty(V2010.prototype,
  'sip', {
  get: function() {
    return this.account.sip;
  }
});

Object.defineProperty(V2010.prototype,
  'shortCodes', {
  get: function() {
    return this.account.shortCodes;
  }
});

Object.defineProperty(V2010.prototype,
  'tokens', {
  get: function() {
    return this.account.tokens;
  }
});

Object.defineProperty(V2010.prototype,
  'transcriptions', {
  get: function() {
    return this.account.transcriptions;
  }
});

Object.defineProperty(V2010.prototype,
  'usage', {
  get: function() {
    return this.account.usage;
  }
});

Object.defineProperty(V2010.prototype,
  'validationRequests', {
  get: function() {
    return this.account.validationRequests;
  }
});

module.exports = V2010;

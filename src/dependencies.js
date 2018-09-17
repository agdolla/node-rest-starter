'use strict';

// Main config module
module.exports.config = require('./config');

// Logging and Auditing
const bunyanLib = require('./lib/bunyan');
module.exports.logger        = bunyanLib.logger;
module.exports.auditLogger   = bunyanLib.auditLogger;
module.exports.metricsLogger = bunyanLib.metricsLogger;

// Access to the MongoDB db objects
module.exports.dbs = require('./lib/mongoose').dbs;

// Socket IO
module.exports.socketIO = require('./lib/socket.io');

// Core Services
module.exports.auditService        = require('./app/core/audit/audit.service');
module.exports.emailService        = require('./app/core/email/email.service');

// Common Services
module.exports.queryService  = require('./app/common/query.service');
module.exports.utilService   = require('./app/common/util.service');
module.exports.schemaService = require('./app/common/schema.service');
module.exports.csvStream     = require('./app/common/csv-stream.service');
module.exports.delayedStream = require('./app/common/delayed-stream.service');

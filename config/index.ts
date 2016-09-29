/**
 * Trails Core Configuration
 * (app.config)
 */

'use strict'

exports.env = require('./env')
exports.log = require('./log')
exports.main = require('./main')

exports.database = require('./database')
exports.i18n = require('./i18n')
exports.policies = require('./policies')
exports.routes = require('./routes')
exports.session = require('./session')
exports.views = require('./views')
exports.web = require('./web')
exports.footprints = require('./footprints')

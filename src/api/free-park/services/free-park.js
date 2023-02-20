'use strict';

/**
 * free-park service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::free-park.free-park');

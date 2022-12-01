"use strict";

/**
 * review controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

// module.exports = createCoreController("api::review.review", ({ strapi }) => ({
//   async customAction(ctx) {
//     try {
//       ctx.body = "ok";
//     } catch (err) {
//       ctx.body = err;
//     }
//   },
// }));

 module.exports = createCoreController('api::review.review');

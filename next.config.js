const withPWA = require("next-pwa");

module.exports = withPWA({
  env: {
    MONGO_URI: "mongodb+srv://hankoanime:pqwrrvi53ZhhlsZP@projects.egwvl.mongodb.net/Hanko-Anime",
    keyHashJwt: "2CL"
  },
  pwa: {
    dest: "public",
    register: true,
    skipWaiting: true,
  },
});
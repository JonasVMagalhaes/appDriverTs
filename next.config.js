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
  async rewrites() {
    return [
      {
        source: '/api/auth',
        destination: "/api/routes/auth"
      },
      {
        source: '/api/message',
        destination: "/api/routes/chat/message"
      },
      {
        source: '/api/room',
        destination: "/api/routes/chat/room"
      },
      {
        source: '/api/user',
        destination: "/api/routes/user"
      }
    ]
  }
});
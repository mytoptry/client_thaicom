const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  "sql6685956",
  "sql6685956",
  "mFXbRhGIbp", {
  host: "sql6.freemysqlhosting.net",
  dialect: "mysql",
  logging: false
});

(async () => {
  await sequelize.authenticate();
})();

module.exports = sequelize;

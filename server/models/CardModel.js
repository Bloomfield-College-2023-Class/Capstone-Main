import db from "../config/database.js";

const Card = db.define('cards', {
  userID: {
    type: db.Sequelize.STRING,
    allowNull: false,
    primaryKey: true
  },
  userID: {
    type: db.Sequelize.INTEGER,
    allowNull: true
  },
});

(async () => {
  await db.sync();
})();

export default Card;
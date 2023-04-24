import db from "../config/database.js";

const User = db.define('users', {
  userID: {
    type: db.Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  firstName: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: {
    type: db.Sequelize.STRING,
    allowNull: true
  },
  psw: {
    type: db.Sequelize.STRING,
    allowNull: false
  },
  userType: {
    type: db.Sequelize.ENUM('student', 'security', 'admin'),
    allowNull: false
  },
  username: {
    type: db.Sequelize.STRING,
    allowNull: false,
    unique: true
  },
});

(async () => {
  await db.sync();
})();

export default User;
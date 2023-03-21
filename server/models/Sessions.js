import db from "../config/database.js";
import { DataTypes } from "sequelize";

const Session = db.define('sessions', {
  sid: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  expires: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  data: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
}, {
  tableName: 'sessions',
  engine: 'InnoDB',
});


(async () => {
  await db.sync();
})();

export default Session;
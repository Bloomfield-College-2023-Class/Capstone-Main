import db from "../config/database.js";

const Tag = db.define('tag', {
    tagID: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userID: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
    expirationDate: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    effectiveDate: {
        type: db.Sequelize.DATE,
        allowNull: false
    },
    createdAt: {
        type: db.Sequelize.DATE,
        allowNull: false,
        defaultValue: db.Sequelize.NOW
    },
    updatedAt: {
        type: db.Sequelize.DATE,
        allowNull: false,
        defaultValue: db.Sequelize.NOW,
        onUpdate: db.Sequelize.NOW
    }
}, {
    tableName: 'tag'
});

(async () => {
    await db.sync();
})();

export default Tag;
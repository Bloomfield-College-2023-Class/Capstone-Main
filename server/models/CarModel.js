import db from "../config/database.js";

const Car = db.define('car', {

    carID: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    userID: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        secondaryKey: true
    },
    color: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    make: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    model: {
        type: db.Sequelize.STRING,
        allowNull: false
    },
    licensePlate: {
        type: db.Sequelize.STRING,
        allowNull: false
    }
}, {
    tableName: 'car'
});

(async () => {
    await db.sync();
})();

export default Car;
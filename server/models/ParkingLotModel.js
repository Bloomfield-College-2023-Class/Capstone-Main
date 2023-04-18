import db from "../config/database.js";

const ParkingLot = db.define('parkingLot', {

    parkingLotID: {
        type: db.Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    numberOfSpots: {
        type: db.Sequelize.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'car'
});

(async () => {
    await db.sync();
})();

export default ParkingLot;
import db from "../config/database.js";

const parkedCars = db.define('parkedCars', {

    parkinglotID: {
        type: db.Sequelize.INTEGER,
        allownull: false,
    },
    carID: {
        type: db.Sequelize.INTEGER,
        allownull: false
    },
    timeEntered: {
        type: db.Sequelize.DATE,
        allownull: false
    },
    timeExited: {
        type: db.Sequelize.DATE,
        allownull:true
    }
});
(async () => {
    await db.sync();
})();

export default parkedCars;
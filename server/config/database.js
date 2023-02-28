import Sequelize from 'sequelize';

const db = new Sequelize('reservar', 'root', 'BCCapstone2023', {
    host: "localhost",
    dialect: "mysql",
    logging: (query) => {
      console.log(query);
    }
});

export default db;
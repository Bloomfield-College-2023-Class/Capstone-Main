import Sequelize from 'sequelize';

const db = new Sequelize('reservar', 'admin', 'BCCapstone2284', {
    host: "database-1.cizss8dnmdgv.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    logging: (query) => {
      console.log(query);
    }
});

export default db;
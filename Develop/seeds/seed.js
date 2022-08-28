const sequelize = require('../config/connection');
const { User } = require('./userSeed');

const postData = require('./postSeed');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(postData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
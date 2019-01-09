const Sequelize = require('sequelize');
const config = require('./config');
console.log('init sequelize...');

var sequelize = new Sequelize(`mysql://${config.username}:${config.password}@${config.host}:${config.port}/${config.database}`);

// ORM 
var Pet = sequelize.define('pet', {
  id: {
    type: Sequelize.STRING(50),
    primaryKey: true
  },
  name: Sequelize.STRING(100),
  gender: Sequelize.BOOLEAN,
  birth: Sequelize.STRING(10),
  createdAt: Sequelize.BIGINT,
  updatedAt: Sequelize.BIGINT,
  version: Sequelize.BIGINT
}, {
  timestamps: false
})

var now = Date.now();
// Pet.create({
//   id: 'g-' + now,
//   name: 'yxz',
//   gender: false,
//   birth: '2007-03-02',
//   createdAt: now,
//   updatedAt: now,
//   version: 0
// })
// (async () => {
//   var dog = await Pet.create({
//     id: 'd-' + now,
//     name: 'lion',
//     gender: false,
//     birth: '2017-05-02',
//     createdAt: now,
//     updatedAt: now,
//     version: 0
//   });
//   console.log(`create${JSON.stringify(dog)}`)
// })();
// (async () => {
//   var pets = await Pet.findAll({
//     where: {
//       name: 'lion'
//     }
//   });
//   console.log(`find ${pets.length} pets:`)
//   for (let p of pets) {
//     console.log(JSON.stringify(p));
//     p.gender = true;
//     p.updatedAt = Date.now();
//     p.version++;
//     await p.save();
//   }
// })();
(async () => {
  var pets = await Pet.findAll({
    where: {
      name: 'lion'
    }
  });
  console.log(`find ${pets.length} pets:`);
  let i = 0;
  for (let p of pets) {
    console.log(JSON.stringify(p));
    if( i !== 0){
      await p.destory();
    }
  }
})();
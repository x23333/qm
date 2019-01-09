'use strict';

const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}
module.exports = {
  
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(
    'shops',[
      {id: 1,name: '店一', thumb_url: '1.png', ...timestamps},
      {id: 2,name: '店2', thumb_url: '2.png', ...timestamps},
      {id: 3,name: '店3', thumb_url: '3.png', ...timestamps},
      {id: 4,name: '店4', thumb_url: '4.png', ...timestamps},
      {id: 5,name: '店5', thumb_url: '5.png', ...timestamps},
      {id: 6,name: '店6', thumb_url: '6.png', ...timestamps},
    ]
  ),

  down: (queryInterface, Sequelize) => {
    const { Op } = Sequelize;
    return queryInterface.bulkDelete('shops', {id: {[Op.in]: [1,2,3,4,5,6]}},{})
  }
};

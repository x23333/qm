const timestamps = {
  created_at: new Date(),
  updated_at: new Date()
}

module.exports = {
  up: queryInterface => queryInterface.bulkInsert(
    'shops',
    [
      { id: 0, name: '店铺1', thumb_url:'1.png', ...timestamps}
    ]
  )
}

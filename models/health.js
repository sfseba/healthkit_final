module.exports = function(sequelize, DataTypes) {
  var Food = sequelize.define("Food", {
    food: {
      type: DataTypes.STRING
      allowNull: false,
      validate: {
      len: [1, 50]
}
  },
    amount: {
      type: DataTypes.INTEGER
},
   fullness: {
      type: DataTypes.BOOLEAN
},
   note: {
      type: DataTypes.STRING
},
   picture: {
      type: DataTypes.STRING
}
}, {
  timestamps: false
});
return Food;
};

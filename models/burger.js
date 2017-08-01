module.exports = function(sequelize, DataTypes) {
	var Burger = sequelize.define("Burger", {
    burger_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    devoured: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: DataTypes.false
    },
    createdAt: {
      type: DataTypes.INTEGER,
      defaultValue: DataTypes.NOW
    }
  });
  return Burger;
}
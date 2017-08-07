'use strict';
module.exports = (sequelize, DataTypes) => {
  const Library = sequelize.define('Library', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    classMethods: {
      associate: (models) => {
        Library.hasMany(Book, {
          foreignKey: 'booksId',
          as: 'books',
          through:Book
        });
      },
    },
  });
  return Library;
};
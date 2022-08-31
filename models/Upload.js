const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
// create our Post model
class Upload extends Model { }
// create fields/columns for Upload model
Upload.init(
    
        {
            id: {
              type: DataTypes.INTEGER,
              allowNull: false,
              primaryKey: true,
              autoIncrement: true
            },
            filepath: {
              type: DataTypes.STRING,
              allowNull: false
            },
            filetype: {
              type: DataTypes.STRING,
              allowNull: false              
            },
            updated_by:{
              type: DataTypes.STRING,
              allowNull: false 

            },

            updated_at:{
              type: DataTypes.DATE,
              allowNull: false

            },
            user_id: {
              type: DataTypes.INTEGER,
              references: {
                model: 'user',
                key: 'id'
              }
            }
            
          },
          {
            sequelize,
            freezeTableName: true,
            underscored: true,
            modelName: 'file'
          }
        );

module.exports = Upload;
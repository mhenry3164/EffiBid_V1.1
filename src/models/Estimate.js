import { DataTypes } from 'sequelize';
import { sequelize } from '../database/config.js';

export const Estimate = sequelize.define('Estimate', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  jobScope: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  materials: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  laborHours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
});
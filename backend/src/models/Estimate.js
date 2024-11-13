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
    get() {
      const value = this.getDataValue('materials');
      return value ? JSON.parse(value) : [];
    },
    set(value) {
      this.setDataValue('materials', JSON.stringify(value));
    },
  },
  laborHours: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  totalCost: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM('draft', 'sent', 'accepted', 'rejected'),
    defaultValue: 'draft',
  },
  customerId: {
    type: DataTypes.UUID,
    allowNull: false,
  },
});
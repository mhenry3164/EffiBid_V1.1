import { sequelize } from '../database/config.js';
import { User } from './User.js';
import { Client } from './Client.js';
import { Customer } from './Customer.js';
import { Estimate } from './Estimate.js';

// Define relationships
Client.belongsTo(User);
User.hasMany(Client);

Customer.belongsTo(Client);
Client.hasMany(Customer);

Estimate.belongsTo(Customer);
Customer.hasMany(Estimate);

export { User, Client, Customer, Estimate };
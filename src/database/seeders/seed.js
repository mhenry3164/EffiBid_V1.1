import { sequelize } from '../config.js';
import { User, Client, Customer, Estimate } from '../models/index.js';

const DEV_USER = {
  id: '1234-5678-9012',
  email: 'test@example.com',
  password: 'password123',
  name: 'Test User',
  company: 'Test Company',
  role: 'admin'
};

async function seed() {
  try {
    // Sync database
    await sequelize.sync({ force: true });

    // Create test user
    const user = await User.create(DEV_USER);

    // Create sample clients
    const clients = await Client.bulkCreate([
      {
        name: 'ABC Construction',
        contact: '555-0123',
        userId: user.id
      },
      {
        name: 'XYZ Contractors',
        contact: '555-0124',
        userId: user.id
      }
    ]);

    // Create sample customers
    const customers = await Customer.bulkCreate([
      {
        name: 'John Smith',
        contact: '555-1111',
        clientId: clients[0].id
      },
      {
        name: 'Jane Doe',
        contact: '555-2222',
        clientId: clients[0].id
      },
      {
        name: 'Bob Wilson',
        contact: '555-3333',
        clientId: clients[1].id
      }
    ]);

    // Create sample estimates
    await Estimate.bulkCreate([
      {
        jobScope: 'Driveway grading and excavation',
        materials: JSON.stringify(['Gravel', 'Fill dirt']),
        laborHours: 24,
        totalCost: 3500.00,
        status: 'draft',
        customerId: customers[0].id
      },
      {
        jobScope: 'Tree removal and stump grinding',
        materials: JSON.stringify(['Equipment rental']),
        laborHours: 16,
        totalCost: 2800.00,
        status: 'sent',
        customerId: customers[1].id
      }
    ]);

    console.log('Database seeded successfully');
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

seed();
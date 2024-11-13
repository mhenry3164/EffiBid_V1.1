# EffiBid: AI-Assisted Estimation Tool for Service Businesses

EffiBid is a powerful AI-assisted web application designed to streamline the estimation process for service-based businesses, including earthmoving, grading, tree services, and more. It allows users to manage clients, track customers, generate professional estimates, and leverage AI for contextual job scope assistance—all in a simple, user-friendly interface.

---

## Features

- **Client Management**: Keep track of clients and their information.
- **Customer Tracking**: Organize customer details tied to each client.
- **AI-Assisted Estimation**:
  - Input static or dynamic job details.
  - Get AI-generated insights for material, labor, and equipment needs.
  - Generate accurate and professional PDF estimates.
- **Estimate Management**:
  - Log all generated estimates for future reference.
  - View, edit, and delete estimates with ease.
- **User-Friendly Dashboard**:
  - Post-login interface with clear navigation.
  - Quick actions for creating estimates or managing clients.
- **Modern Web Technologies**:
  - Built with React (frontend) and Node.js (backend).
  - Integrated with OpenAI for AI-powered assistance.
  - SQLite for lightweight database needs (can be extended).

---

## Project Structure

The project is organized into separate **frontend** and **backend** directories:


---

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Tailwind CSS**: For responsive styling.
- **Vite**: As the development and build tool.
- **Axios**: For API communication.

### Backend
- **Node.js**: For server-side logic.
- **Express**: For API routes.
- **SQLite**: Lightweight database for development.

### AI Integration
- **OpenAI API**: Powers the AI-assisted estimation tool.

---

## Installation

Follow these steps to set up the project locally:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/EffiBid.git
   cd EffiBid
Install Dependencies:

Install root dependencies:
bash
Copy code
npm install
Install frontend dependencies:
bash
Copy code
cd frontend
npm install
cd ..
Install backend dependencies:
bash
Copy code
cd backend
npm install
cd ..
Set Up Environment Variables:

Create .env files in the frontend and backend directories.
Example for the backend:
makefile
Copy code
PORT=5000
JWT_SECRET=your_secret_key
DB_URL=sqlite://effibid.db
Example for the frontend:
arduino
Copy code
REACT_APP_API_BASE_URL=http://localhost:5000
Run the Development Server:

Start both the frontend and backend servers:
bash
Copy code
npm run dev
Deployment
To deploy the project:

Frontend:

Deploy to a static hosting service like Netlify or Vercel.
Ensure the REACT_APP_API_BASE_URL points to the live backend URL.
Backend:

Deploy to a server hosting platform like Render or Heroku.
Ensure the .env file is configured correctly for the production environment.
Contributing
We welcome contributions! To get started:

Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Push to your branch (git push origin feature-branch).
Open a pull request.
License
This project is licensed under the MIT License.

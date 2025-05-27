🏠 Nawy Apartments Task
A full-stack web application for listing and managing apartments. Built using Next.js (frontend), Node.js with TypeScript (backend), MongoDB Atlas (database), and containerized using Docker Compose.

📦 Project Structure
bash
Copy
Edit
NawyTask/
├── ApartmentsBackend/         # Node.js + TypeScript backend API
├── apartments-app-frontend/   # Next.js frontend
├── docker-compose.yml         # Compose file for orchestrating frontend, backend, and MongoDB
🚀 Features
Frontend

Built with Next.js and React

Lists apartments with formatted pricing and size

Responsive design and modern UI

Backend

Node.js with TypeScript

RESTful API for apartment listings

Connected to MongoDB Atlas

Swagger API documentation ready (optional)

Database

Uses MongoDB Atlas cloud cluster

DevOps

Fully containerized using Docker

Easy setup with docker-compose

Hot-reload in development

🛠️ Technologies Used
Frontend: Next.js, React, TypeScript, CSS Modules

Backend: Node.js, Express, TypeScript, Mongoose

Database: MongoDB (Cloud via Atlas)

DevOps: Docker, Docker Compose

🐳 Running with Docker
Make sure Docker & Docker Compose are installed.

bash
Copy
Edit
git clone https://github.com/yourusername/NawyTask.git
cd NawyTask
docker-compose up --build
Frontend: http://localhost:3000

Backend API: http://localhost:5000

MongoDB: Available internally on mongo:27017

📂 Environment Variables
Backend (.env):

env
Copy
Edit
PORT=5000
MONGO_URI=your_mongo_connection_string
Frontend (.env.local):

env
Copy
Edit
NEXT_PUBLIC_API_URL=http://localhost:5000
Make sure to exclude .env files from Git using .gitignore.

🧪 Available Scripts
Backend
bash
Copy
Edit
npm run dev      # Start backend in dev mode
npm run build    # Compile TypeScript
npm start        # Run compiled app
Frontend
bash
Copy
Edit
npm run dev      # Start frontend in dev mode
npm run build    # Build production frontend
npm start        # Start production frontend
📄 API Endpoints
Method	Endpoint	Description
GET	/apartments	List all apartments
POST	/apartments	Add new apartment
GET	/apartments/{id}	Get apartment by ID

🧰 Developer Notes
Uses ts-node-dev for backend dev server

Hot reload is enabled for both frontend and backend

MongoDB uses cloud connection (Atlas)

🧹 Future Improvements
Add authentication (e.g., JWT)

Add filtering/sorting on listings

Improve API documentation with Swagger

Deploy with CI/CD

📬 Contact
For any inquiries or feedback, feel free to reach out:

GitHub: @zizo99909

Email: ziyadzakii@outlook.com

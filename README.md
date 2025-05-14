# Personal Portfolio Website

A modern, responsive portfolio website built with the MERN stack (MongoDB, Express.js, React.js, Node.js).

## Features

- Responsive design
- About section
- Projects showcase
- Skills section
- Contact form
- Blog section

## Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Authentication: JWT

## Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn

## Setup Instructions

1. Clone the repository
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Set up environment variables
- Create a `.env` file in the backend directory
- Add the following variables:
  ```
  PORT=5000
  MONGODB_URI=your_mongodb_uri
  JWT_SECRET=your_jwt_secret
  ```

4. Start the development servers
```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm start
```

## Project Structure

```
portfolio/
├── frontend/          # React frontend
├── backend/           # Node.js backend
└── README.md
```

## License

MIT 

## Deployment

To deploy the frontend to GitHub Pages:

1. Build the frontend:
   ```bash
   cd frontend
   npm run build
   ```
2. Deploy to GitHub Pages:
   ```bash
   npm run deploy
   ```

This will publish the contents of the `build` directory to the `gh-pages` branch of your repository, making your site available at the URL specified in the `homepage` field of `frontend/package.json`.

**Note:** Make sure you have the `gh-pages` package installed and your repository is correctly set up with the proper remote URL. 
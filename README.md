# FreeFreeCarl

A monorepo containing both frontend and backend applications for the FreeFreeCarl project.

## Project Structure

```
freefreecarl/
├── packages/
│   ├── frontend/     # React frontend application
│   └── backend/      # Express backend application
├── package.json      # Root package.json for managing both applications
└── README.md         # This file
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- MySQL database

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   DB_HOST=your_db_host
   DB_USER=your_db_user
   DB_PASSWORD=your_db_password
   DB_NAME=your_db_name
   DB_PORT=your_db_port
   ```

### Running the Applications

#### Development Mode

1. Start the backend server:
   ```bash
   npm run dev:backend
   ```

2. Start the frontend development server:
   ```bash
   npm run dev:frontend
   ```

#### Production Build

1. Build both applications:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm run preview
   ```

## License

This project is licensed under the MIT License. 
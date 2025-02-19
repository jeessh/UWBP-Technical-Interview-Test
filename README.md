# UWBP Technical Interview Application

This is a full-stack web application that displays interview candidate information. It includes a Flask backend, and a React TypeScript frontend.

## Project Structure

```
UWBP-Technical-Interview/
├── frontend/               # React TypeScript frontend
├── backend-flask/         # Flask backend
└── data/                  # Shared data files
```

## Setup and Running

### Flask Backend (Alternative)

```bash
cd backend-flask
pip install -r requirements.txt
python app.py
```

The Flask server will run on http://localhost:5000

### Frontend

```bash
cd frontend
npm install
npm start
```

The frontend will run on http://localhost:3000

## Features

- Displays a list of interview candidates
- Shows each candidate's:
  - Name
  - Major
  - Current Location
  - Shower status
- Responsive design
- Error handling
- Loading states

## API Endpoints

- GET `/api/candidates` - Returns list of all candidates

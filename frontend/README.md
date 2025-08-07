# AI Interview Coach Frontend

This is the React + Vite frontend for the AI Interview Coach project. It provides a modern, responsive UI for users to interact with the AI-powered interview coach.

## Features

- Ask interview questions and receive AI-powered feedback
- Practice behavioral and technical interviews
- Session history and message cards with Markdown support
- Dark mode toggle
- Responsive design for desktop and mobile
- Example questions for inspiration

## Tech Stack

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Lucide React Icons](https://lucide.dev/)
- [React Markdown](https://github.com/remarkjs/react-markdown)
- [Axios](https://axios-http.com/)

## Project Structure

```
frontend/
├── src/
│   ├── App.tsx
│   ├── Home.jsx
│   ├── index.css
│   ├── main.tsx
│   ├── utils.js
│   ├── vite-env.d.ts
│   └── components/
│       └── UI.jsx
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
└── .gitignore
```

## Getting Started

### 1. Install Dependencies

Navigate to the `frontend` directory and install dependencies:

```sh
cd frontend
npm install
```

### 2. Start the Development Server

Run the Vite development server:

```sh
npm run dev
```

The app will be available at [http://localhost:5173](http://localhost:5173).

### 3. Connect to Backend

Ensure the backend FastAPI server is running at [http://localhost:8000](http://localhost:8000).  
The frontend is configured to send requests to `/api/interview` endpoint.

## Build for Production

To build the frontend for production:

```sh
npm run build
```

The output will be in the `dist/` folder.

## Linting

To lint your code:

```sh
npm run lint
```

## Environment Variables

No frontend-specific environment variables are required for local development.  
API keys and secrets are managed in the backend.

## Customization

- **Styling:** Uses Tailwind CSS. Customize styles in `src/index.css` and `tailwind.config.js`.
- **Icons:** Uses Lucide React icons.
- **Markdown:** AI responses are rendered with Markdown via `react-markdown`.

## Troubleshooting

- If you see CORS errors, ensure the backend allows requests from `http://localhost:5173`.
- If the UI does not load, check that dependencies are installed and the backend is running.

## Contributing

Pull requests and issues are welcome!  
Please follow best practices for React and Tailwind CSS.

---

© 2025 AI Interview Coach.

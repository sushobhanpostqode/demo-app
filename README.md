# React Todo App

A simple and elegant Todo List application built with React and Vite.

## Features

- ✅ Add new todos
- ✅ Mark todos as complete/incomplete
- ✅ Delete individual todos
- ✅ Clear all completed todos
- ✅ Shows pending and completed count
- ✅ Beautiful gradient UI
- ✅ Responsive design
- ✅ Fast development with Vite HMR

## Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Styling with modern features

## Project Structure

```
react-todo-app/
├── src/
│   ├── components/
│   │   ├── AddTodo.jsx      # Form to add new todos
│   │   ├── TodoItem.jsx     # Individual todo item
│   │   └── TodoList.jsx     # List of todos
│   ├── App.jsx              # Main app component
│   ├── App.css              # App styles
│   └── main.jsx             # Entry point
├── index.html
├── package.json
├── README.md
└── vite.config.js
```

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone or download the project
2. Navigate to the project directory:
   ```bash
   cd react-todo-app
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```

Open your browser and visit `http://localhost:5173/`

### Building for Production

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint |

## Component Overview

### AddTodo.jsx
- Manages form input state
- Handles form submission
- Creates new todo objects with unique IDs

### TodoItem.jsx
- Displays individual todo items
- Checkbox for toggling completion status
- Delete button to remove todos
- Visual feedback for completed items (strikethrough)

### TodoList.jsx
- Renders the list of todos
- Shows empty state when no todos exist
- Passes event handlers to TodoItem components

### App.jsx
- Central state management for todos
- CRUD operations: add, toggle, delete, clear completed
- Calculates and displays statistics
- Coordinates between child components

## State Management

The app uses React's `useState` hook for state management:

```javascript
const [todos, setTodos] = useState([]);

// Todo structure:
{
  id: 123456789,           // Unique timestamp ID
  text: "Todo text",       // User input
  completed: false,        // Completion status
  createdAt: "..."         // Creation timestamp
}
```

## Customization

### Changing Colors
Edit the gradient colors in `App.css`:
```css
body {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
}
```

### Adding Features
- **Local Storage**: Save todos to browser storage
- **Edit Todos**: Add inline editing functionality
- **Filter**: Add filters (All, Active, Completed)
- **Categories**: Add tags or categories to todos

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

Created with ❤️ using React and Vite.

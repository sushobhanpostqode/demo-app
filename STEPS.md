# React Todo App - Build Steps

## Step 1: Create Vite React Project
```bash
npm create vite@latest react-todo-app -- --template react
cd react-todo-app
npm install
npm run dev
```

## Step 2: Project Structure
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
└── vite.config.js
```

## Step 3: Create Components

### AddTodo.jsx
- Manages input state
- Handles form submission
- Creates new todo object with id, text, completed status

### TodoItem.jsx
- Displays single todo
- Checkbox to toggle completion
- Delete button
- Applies "completed" class for styling

### TodoList.jsx
- Renders list of TodoItem components
- Shows empty state when no todos

### App.jsx
- Manages todos state
- Functions: addTodo, toggleTodo, deleteTodo, clearCompleted
- Renders AddTodo, TodoList, and statistics

## Step 4: Run the App
```bash
npm run dev
```
Open http://localhost:5173/

## Available Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

// Import hooks - useState & useReducer.
import { useReducer, useState } from "react";

// Import component.
import InputField from "./components/InputField/InputField";
import ListOfTodos from "./components/ListOfTodos/ListOfTodos";

// Object for actions so it's "eaiser" to manage in one place.
export const ACTIONS = {
	NEW_TODO: "newTodo",
	DELETE_TODO: "deleteTodo",
};

console.log(reducer);

// Reducer function with switch statement.
function reducer(todos, action) {
	switch (action.type) {
		// Adding a new todo.
		case ACTIONS.NEW_TODO:
			return [...todos, newTodo(action.payload.todo)];

		// Deleting a existing todo.
		case ACTIONS.DELETE_TODO:
			return todos.filter(todo => todo.id !== action.payload.id);

		// Throw a error if action isn't known.
		default:
			throw new Error("Unknown action");
	}
}

// Function for adding a new todo inside switch statement.
function newTodo(todo) {
	return { id: Date.now(), todo: todo };
}

function App() {
	const [todo, setTodo] = useState("");
	const [todos, dispatch] = useReducer(reducer, []);

	// Function for adding a todo.
	function handleAddTodo() {
		if (todo !== "") {
			dispatch({ type: ACTIONS.NEW_TODO, payload: { todo: todo } });
			setTodo("");
		}
	}

	// Function for adding a todo with enter key pressed.
	function onKeyDown(e) {
		if (e.key === "Enter" && todo !== "") {
			dispatch({ type: ACTIONS.NEW_TODO, payload: { todo: todo } });
			setTodo("");
		}
	}

	return (
		<div className="App">
			<div className="wrapper-todo">
				<h1 className="logo">Todo project</h1>
				<InputField todo={todo} setTodo={setTodo} handleAddTodo={handleAddTodo} onKeyDown={onKeyDown} />
				<ListOfTodos todos={todos} dispatch={dispatch} />
			</div>
		</div>
	);
}

export default App;

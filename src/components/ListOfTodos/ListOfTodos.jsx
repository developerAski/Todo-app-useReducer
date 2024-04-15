// Import css file.
import "../ListOfTodos/listOfTodos.css";

// Import component.
import Item from "../Item/Item";

const ListOfTodos = ({ todos, dispatch }) => {
	if (todos.length === 0) return <p className="empty">The list of todos is empty</p>;

	return (
		<div>
			<div className="todo-list">
				{todos.map(todo => (
					<Item todo={todo} key={todo.id} dispatch={dispatch} />
				))}
			</div>
		</div>
	);
};

export default ListOfTodos;

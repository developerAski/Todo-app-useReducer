// Import css file.
import "../Item/item.css";

// Import react-icons
import { BsTrash } from "react-icons/bs";

// Import ACTIONS
import { ACTIONS } from "../../App";

const Item = ({ todo, dispatch }) => {
	return (
		<div className="todo">
			<span className="todo-entry">{todo.todo}</span>
			<button
				className="todo-complate"
				onClick={() => dispatch({ type: ACTIONS.DELETE_TODO, payload: { id: todo.id } })}
			>
				<BsTrash className="delete" />
			</button>
		</div>
	);
};

export default Item;

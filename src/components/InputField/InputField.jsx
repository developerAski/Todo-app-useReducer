// Import css file.
import "../InputField/inputField.css";

const InputField = ({ todo, setTodo, handleAddTodo, onKeyDown }) => {
	return (
		<div className="input-wrapper">
			<input
				type="text"
				placeholder="Create a todo"
				value={todo}
				onChange={e => setTodo(e.target.value)}
				onKeyDown={onKeyDown}
			/>
			<button className="btn-add" onClick={handleAddTodo}>
				+
			</button>
		</div>
	);
};

export default InputField;

function ListItem({ tasks, handleDelete }) {
    return (
        <ul className="list">
            {tasks.map((item, index) => (
                <li key={index}>
                    <span>{item}</span>
                    <button onClick={() =>
                        handleDelete(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}
export default ListItem;

function InputBox({ handleInput, handleAddItem, content }) {
    return (
        <div className="input-box">
            <input type="text" onChange={handleInput} value={content} />
            <button onClick={handleAddItem}>Add Item</button>
        </div>
    );
}
export default InputBox;
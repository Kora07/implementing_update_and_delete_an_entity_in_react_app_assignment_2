const Item = ({ item, setItems }) => {
    const API_URI = `http://${import.meta.env.VITE_API_URI}/doors/${item.id}`;

    const handleDelete = async () => {
        try {
            const response = await fetch(API_URI, { method: "DELETE" });
            if (response.ok) {
                setItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
            } else {
                console.error("Error deleting item:", response.statusText);
            }
        } catch (error) {
            console.error("Error deleting item:", error);
        }
    };

    return (
        <div>
            <span>{item.name}</span>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
};

export default Item;

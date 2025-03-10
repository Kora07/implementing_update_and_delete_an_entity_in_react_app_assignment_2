import Item from "./Item";

const ItemList = ({ items, setItems }) => {
    return (
        <div>
            {items.length > 0 ? (
                items.map((item) => (
                    <Item key={item.id} item={item} setItems={setItems} />
                ))
            ) : (
                <p>No items found.</p>
            )}
        </div>
    );
};

export default ItemList;

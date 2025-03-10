import { useState, useEffect } from "react";
import ItemList from "./components/ItemList";

const API_URI = `http://${import.meta.env.VITE_API_URI}/doors`;

function App() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch(API_URI)
            .then((res) => res.json())
            .then((data) => setItems(data))
            .catch((err) => console.error("Error fetching data:", err));
    }, []);

    return <ItemList items={items} setItems={setItems} />;
}

export default App;

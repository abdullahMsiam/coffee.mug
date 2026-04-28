import { createContext, useContext, useState, useEffect} from "react";

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        try {
            const response = await fetch("/products.json");
            const data = await response.json();
            setProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <DataContext.Provider value={{ products, loading }}>
            {children}
        </DataContext.Provider>
    )
};  

export const useData = () => useContext(DataContext);
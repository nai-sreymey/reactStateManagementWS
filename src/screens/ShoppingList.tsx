import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useEffect, useState } from "react";

export const ShoppingList = () => {
  const navigate = useNavigate();
  // const items = useSelector((state: RootState) => state.shopping.items);
  const userName = useSelector((state: RootState) => state.user.name);
  const [list, setList] = useState<{ id: number; title: string }[]>([]); 

  useEffect(() => {
    const fetchList = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos");
        const data = await response.json();
        setList(data); // Set fetched data correctly
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };

    fetchList();
  }, []);

  return (
    <div className="p-6 min-h-screen min-w-screen bg-gray-100 flex flex-col items-center text-black">
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <p className="text-lg mb-4">Welcome, {userName || "Guest"}!</p> {/* Display user name */}
      {list.length === 0 ? (
        <p className="text-gray-500">Nothing to buy yet!</p>
      ) : (
        <ul className="space-y-2 w-full max-w-md">
          {list.map((item) => (
            <li
              key={item.id} // Correct key usage
              className="flex items-center justify-between p-2 bg-white rounded shadow"
            >
              <span>{item.title}</span> {/* Display item title */}
            </li>
          ))}
        </ul>
      )}
      <button
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => navigate("/add-item")}
      >
        Add Item
      </button>
    </div>
  );
};
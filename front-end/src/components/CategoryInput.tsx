import './CategoryInput.css';
import { useState } from 'react';
import axios from 'axios';

const CategoryInput = ({ close }: { close: () => void }) => {
  const [title, setTitle] = useState('');

  const handleAdd = async () => {
    if (!title.trim()) return;

    try {
      await axios.post("http://localhost:8000/category", { title });
      close();  
      window.location.reload(); 
    } catch (error) {
      console.error("Error adding category:", error);
    }
  };

  return (
    <div className='category-container'>
      <p>Add a category</p>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter category title"
      />
      <div>
        <button className='category-cancel btn' onClick={close}>Cancel</button>
        <button className='category-add btn' onClick={handleAdd}>Add</button>
      </div>
    </div>
  );
};

export default CategoryInput;

import'./CategoryInput.css'
const CategoryInput = ({close}) => {
  return (
    <div className='category-container'>
      <p>Add a category</p>
      <input type="text" />
      <div>
        <button className='category-cancel btn' onClick={close}>Cancel</button>
        <button className='category-add btn'>Add</button>
      </div>
    </div>
  )
}

export default CategoryInput
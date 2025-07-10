const Priority = ({ category }: { category: string }) => {
  const level = category.toLowerCase()
  if (level === "high") {
    return (
      <div className="priority-container high">
        <p>High</p>
      </div>
    );
  } else if (level === "mid") {
    return (
      <div className="priority-container mid">
        <p>Mid</p>
      </div>
    );
  } else {
    return (
      <div className="priority-container low">
        <p>Low</p>
      </div>
    );
  }
};

export default Priority;

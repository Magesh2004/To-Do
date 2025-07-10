const Priority = ({category}) => {
  if (category == "high") {
    return (
      <div className="priority-container high">
        <p>High</p>
      </div>
    );
  } else if (category == "mid") {
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

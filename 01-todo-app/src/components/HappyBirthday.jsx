import React, { useState } from "react";

const Happy = () => {
  const [count, update] = useState(13);
  return (
    <div>
      <p>Happy Birthday - {count}</p>
      <button onClick={() => update(1331)}>Wish</button>
    </div>
  );
};

export default Happy;

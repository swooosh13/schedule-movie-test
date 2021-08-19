import { useState } from "react";

const Header = () => {
  // TODO need context
  // Context
  const [loaded, setLoaded] = useState(true);

  return (
    <div className="header">
      {loaded && (
        <button className="back-btn">
            <img src="icons/arrow_back_ios.svg" alt="back"/>
        </button>
      )}
      <h2> SUPER FILM</h2>
    </div>
  );
};

export { Header };

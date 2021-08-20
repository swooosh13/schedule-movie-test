import { useEffect } from "react";
import { useState } from "react";

const ItemsProfile = ({ data }) => {
  const [show, setShow] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(data.schedule.slice(0, 2));
  }, []);

  useEffect(() => {
    if (show) {
      setItems(data.schedule);
    } else {
      setItems(data.schedule.slice(0, 2));
    }
  }, [show]);

  const handleShow = () => {
    setShow(!show);
  };

  const count = data.schedule.length;
  const date = data.date;
  return (
    <div className="profile">
      <div className="profile__date">{date}</div>
      {items.map((item) => (
        <div className="profile__item item">
          <img src={item.show.image.medium} width={80} alt="item" />
          <div className="item__info">
            <div>
              <div>{item.show.name}</div>
              <div className="item__premiered">
                {item.show.premiered.split("-")[0]}
              </div>
            </div>
            <div className="item__sn">
              <div>season: {item.season}</div>
              <div>episode: {item.number}</div>
            </div>
          </div>
        </div>
      ))}
      <div className="profile__more" onClick={handleShow}>
        {show ? 'close' : 'show all'}
      </div>
    </div>
  );
};

export { ItemsProfile };

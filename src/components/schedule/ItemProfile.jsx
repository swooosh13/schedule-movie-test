import { useEffect } from "react";
import { useState } from "react";
import moment from "moment";

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

  const date = moment(data.date)
    .toDate()
    .toString()
    .split(" ")
    .slice(1, 4)
    .join(" ");

  return (
    <div className="profile">
      <div className="profile__date">{date}</div>
      {items.map((item) => (
        <Item
          key={item.id}
          imgMedium={item.show.image?.medium || "#"}
          imgOriginal={item.show.image?.original || "#"}
          name={item.show.name}
          season={item.season}
          number={item.number}
          premiered={item.show.premiered}
        />
      ))}
      <div className="profile__more" onClick={handleShow}>
        {show ? "close" : "show all"}
      </div>
    </div>
  );
};

const Item = ({ imgOriginal, imgMedium, name, season, number, premiered }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="profile__item item">
      {showModal ? (
        <div className="image-original" onClick={toggleModal}>
          <img src={imgOriginal} width={300} alt="" />
        </div>
      ) : (
        <>
          <img src={imgMedium} width={80} alt="" onClick={toggleModal} />
          <div className="item__info">
            <div>
              <div>{name}</div>
              <div className="item__premiered">{premiered.split("-")[0]}</div>
            </div>
            <div className="item__sn">
              <div>Season: {season}</div>
              <div>Episode: {number}</div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export { ItemsProfile };

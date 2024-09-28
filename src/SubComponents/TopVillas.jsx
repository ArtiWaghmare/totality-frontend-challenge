import { villas } from "../villas";
import { RxDot } from "react-icons/rx";
import { IoIosPeople } from "react-icons/io";
import { FaBed } from "react-icons/fa";
import { BiArea } from "react-icons/bi";
import { FaBath } from "react-icons/fa6";
import { Link } from "react-router-dom";

const TopVillas = () => {
  return (
    <section id="topVillas">
      <h1>Top Property Rentals</h1>
      <p>
        Discover premium properties for rent in prime locations. Whether you re looking for a luxury villa by the sea, a mountain retreat, or a beachfront getaway, our curated selection offers the best in comfort and amenities.
      </p>
      <div className="villasContainer">
        {villas.slice(0, 3).map((element) => {
          return (
            <Link to={`/villa/${element.id}`} className="card" key={element.id}>
              <img src={element.image} alt={element.name} />
              <div className="location_text">
                <span>{element.location}</span>
                <span>
                  <RxDot />
                </span>
                <span>{element.category}</span>
              </div>
              <div className="title_text">{element.name}</div>
              <div className="specifications">
                <div className="spec">
                  <IoIosPeople />
                  <span>{element.guests}</span>
                  Guests
                </div>
                <div className="spec">
                  <FaBed />
                  <span>{element.bedrooms}</span>
                  Bedrooms
                </div>
                <div className="spec">
                  <BiArea />
                  <span>{element.squareMeter}</span>
                  Area (m²)
                </div>
                <div className="spec">
                  <FaBath />
                  <span>{element.bathrooms}</span>
                  Bathrooms
                </div>
              </div>
              <div className="badge">
                Rent from <span>€{element.dailyRent} / day</span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default TopVillas;

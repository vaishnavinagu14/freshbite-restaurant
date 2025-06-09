import { FaLeaf, FaPizzaSlice, FaSmile, FaAward, FaFireAlt } from "react-icons/fa";
import "../Home.css";

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="home-page container">
        <img
          src="/restlogo.png"
          alt="Restaurant Logo"
          className="home-logo"
        />

        <h1 className="home-heading">Welcome to FreshBite Restaurant</h1>

        <section className="home-about">
          <h2>About Us</h2>
          <p>
            At <strong>FreshBite</strong>, we bring you the freshest and finest ingredients straight to your table.
            With a passion for taste and quality, we serve dishes that combine tradition with innovation —
            all in a cozy and welcoming atmosphere.
          </p>
        </section>

        <div className="home-cta">
          <a href="/menu"><button>Explore Menu</button></a>
          <a href="/Book-table"><button>Book a Table</button></a>
        </div>

        <section className="home-features">
          <h2>Why We're Famous</h2>
          <ul>
            <li><FaLeaf /> Farm-to-table freshness in every bite</li>
            <li><FaFireAlt /> Live cooking and open kitchen experience</li>
            <li><FaPizzaSlice /> Signature handcrafted pizzas & pasta</li>
            <li><FaAward /> Rated #1 by FoodieTown for 3 years in a row</li>
            <li><FaSmile /> Loved by over 10,000 happy guests</li>
          </ul>
        </section>

        <section className="home-testimonial">
          <h2>What Our Guests Say</h2>
          <blockquote>
            “Absolutely loved the food and the vibe! Will be back soon.”
          </blockquote>
          <p>– Ramesh K., Google Reviews ⭐⭐⭐⭐⭐</p>
        </section>

        <section className="home-hours">
          <h2>Opening Hours</h2>
          <p>🕒 Mon–Sun: 11:00 AM – 10:00 PM</p>
        </section>
      </div>
    </div>
  );
};

export default Home;

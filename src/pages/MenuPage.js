import React from "react";
import "../MenuPage.css";

const menuData = [
  {
    category: "Starters",
    items: [
      {
        name: "Chilli Chicken ",
        price: 9.99,
        description: "Spicy fried chicken tossed in tangy Indo-Chinese sauce.",
        image: "/cc.png",
        tags: ["new"],
        rating: 4.5
      },
      {
        name: "Veg Manchurian",
        price: 9.99,
        description: "Crispy veggie balls in a flavorful soy garlic sauce.",
        image: "veg.png",
        tags: ["spicy"]
      }
    ]
  },
  {
    category: "Main Course",
    items: [
      {
        name: "Paneer Butter Masala",
        price: 12.49,
        description: "Cottage cheese cubes in creamy tomato gravy",
        image: "panner.png",
        tags: ["veg"],
        rating: 4.7
      },
      {
        name: "Veg Biryani",
        price: 10.99,
        description: "Spiced rice with vegetables and herbs",
        image: "vegb.png"
      }
    ]
  },
  {
    category: "Breads",
    items: [
      {
        name: "Butter Naan",
        price: 1.99,
        description: "Soft Indian flatbread with butter",
        image: "/naan.png"
      },
      {
        name: "Tandoori Roti",
        price: 1.49,
        description: "Whole wheat flatbread cooked in tandoor",
        image: "/rooti.png"
        
      }
    ]
  },
  {
    category: "Desserts",
    items: [
      {
        name: "Rasmalai",
        price: 5.49,
        description: "Soft cheese dumplings in sweet milk",
        image: "/rasmalai.png"
      },
      {
        name: "Gulab Jamun",
        price: 4.49,
        description: "Soft milk dumplings soaked in fragrant sugar syrup.",
        image: "/gj.png"
      }
    ]
  }
];

const MenuPage = ({ addToCart }) => {
  return (
    <div className="menu-page container">
      <h2>Our Menu</h2>
      {menuData.map((section, index) => (
        <div key={index}>
          <h3 className="menu-category">{section.category}</h3>
          <div className="menu-grid">
            {section.items.map((item, idx) => (
              <div className="menu-card" key={idx}>
                {item.image && <img src={item.image} alt={item.name} className="menu-image" />}
                <div className="menu-header">
                  <strong>{item.name}</strong>
                  <span>${item.price.toFixed(2)}</span>
                </div>
                <p>{item.description}</p>
                {item.tags && (
                  <div className="menu-tags">
                    {item.tags.map((tag, i) => (
                      <span className={`menu-tag ${tag.toLowerCase()}`} key={i}>{tag}</span>
                    ))}
                  </div>
                )}
                {item.rating && <div className="menu-rating">⭐ {item.rating}</div>}
                <button  className="add-to-cart-btn" onClick={() => addToCart(item)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuPage;

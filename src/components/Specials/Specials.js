import React from "react";
import menuitem1 from "../../images/GreekSalad.jpg"
import menuitem2 from "../../images/Bruschetta.jpg"
import menuitem3 from "../../images/LemonDessert.jpg"
import './Specials.css'

const Specials = () => {
    return (
      <div className="menu">
        <div className="menu-desc">
            <p className="title menu-title">This weeks specials!</p>
            <button className="btn">
                    Online Menu
                </button>
        </div>
        <div className="cards">
            <div className="card">
                <img className="menu-img" src={menuitem1} alt="Greek Salad"/>
                <div className="name-price">
                    <p className="item-name">Greek Salad</p>
                    <p className="item-price">$12.99</p>
                </div>
                <div className="item-desc">
                    <p>The famous greek salad of crispy lettuce,
                        peppers, olives and our Chicago style feta cheese,
                        garnished with crunchy garlic and rosemary croutons. </p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
            <div className="card">
                <img className="menu-img" src={menuitem2} alt="Bruschetta"/>
                <div className="name-price">
                    <p className="item-name">Bruschetta</p>
                    <p className="item-price">$6.99</p>
                </div>
                <div className="item-desc">
                    <p>Our Bruschetta is made from grilled bread that has
                        been smeared with garlic and seasoned with salt and olive oil.  </p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
            <div className="card">
                <img className="menu-img" src={menuitem3} alt="Lemon Dessert"/>
                <div className="name-price">
                    <p className="item-name">Lemon Dessert</p>
                    <p className="item-price">$7.50</p>
                </div>
                <div className="item-desc">
                    <p>This comes straight from grandma’s recipe book,
                         every last ingredient has been sourced and is as
                         authentic as can be imagined. </p>
                </div>
                <div className="delivery">
                    <p>Order a delivery</p>
                </div>
            </div>
        </div>
      </div>
    )
  }

  export default Specials;
import ItemTotal from "./ItemTotal";
import { useCart } from "../Providers/CartContext";
import { Link } from "react-router-dom";

function Header() {

  let { cart } = useCart()

  console.log("Number of items cart", cart.length)

  return (
    <>
      <header>
        <nav>
        <Link to={`/`}>
          <div className="header-logo">
            <img width="100" height="100" src="https://img.icons8.com/ios-filled/150/yolo.png" alt="LOGO"/>
          </div>
        </Link>
          <div className="header-links">
            <ul>
              <li>
                <img width="24" height="24" src="https://img.icons8.com/material-rounded/24/000000/search.png" alt="search"/>
              </li>
              <li>
                <Link to={`/cart`} className="cart">
                  <img width="24" height="24" src="https://img.icons8.com/material/24/shopping-cart--v1.png" alt="shopping-cart--v1"/>
                  <ItemTotal items={cart}/>
                </Link>
              </li>
              <li>
                <img width="64" height="64" src="https://img.icons8.com/sf-black/64/000000/menu.png" alt="menu"/>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>  
  );

}
  
  export default Header;
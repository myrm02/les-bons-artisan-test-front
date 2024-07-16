import { useCart } from "../Providers/CartContext";
import BoutonRetour from '../Components/ReturnButton'
import Button from "../Components/Button";
import Header from "../Components/Header"
import '../Styles/cart.css';

function Cart() {

    let { cart, removeFromCart, removeAllFromCart } = useCart()

    console.log("Cart", cart)

    return (
        
        <>
        <Header />
        <div className='return-button-section'>
            <BoutonRetour/>
        </div>
        <div className="remove-items-button">
            <Button label="Remove all items" clickAction={() => {removeAllFromCart()}}/>
        </div>
            {cart.map((selectedArticles) => {
                return <CartDisplay name={selectedArticles.title} price={selectedArticles.price} selectedArticles={selectedArticles}/>
            } )}
        </>
        
    );
}

function CartDisplay(props){

    let { cart, removeFromCart, removeAllFromCart } = useCart()

    return (
        <>
            <div className="cart" key={props.id}>
                <div className="functionnality-block">
		            <div className="functionnality-content">
                        <div className="functionnality">
                            <div className="item-general-infos">
                                {/* <img src={props.image} alt="Image du produit (panier)"></img> */}
                                <div className="checkout-infos">
                                    <section>
                                        <text>Adresse :</text>
                                        <p>1 avenue du Maréchal Juin <br/>78140 Vélizy-Villacoublay <br/>FRANCE</p>
                                    </section>
                                    <section>
                                        <text>Nom :</text>
                                        <p>{props.name}</p>
                                    </section>
                                    <section>
                                        <text>Modalité de la commande :</text>
                                        <p>Livraison à domicile</p>
                                    </section>
                                </div>
                            </div>
				        </div>
				        {/* <div className="functionnality">
					        <p>{props.mesure} {props.unit}</p>
				        </div>
                        <div className="functionnality">
					        <p className="price">{props.price} €</p>
                            <p>{props.unitPrice} € / unité</p>
				        </div>
                        <div className="functionnality">
                            <Quantity />
				        </div> */}
                        <div className="functionnality">
                            <button>Continuer le paiement</button>
				        </div>
		            </div>
	            </div>
                <div className="cart-item-single-suppression">
                    <span onClick={() => removeFromCart(cart.indexOf(props.selectedArticles))}>&#215;</span>
                </div>
                <div className="line">
                    <hr/>
                </div>
            </div>
        </>
    )
}

function Quantity() {
    const options = [{ value: 1, label: "1" }, { value: 2, label: "2" }, { value: 3, label: "3" }, { value: 4, label: "4" }, { value: 5, label: "5" }, { value: 6, label: "6" }]
    return(
        <>
            <select>
                {
                    options.map((option) => { return <option value="">{option.label}</option> })
                }
            </select>
        </>
    )
}
  
export default Cart;
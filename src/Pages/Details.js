import '../Styles/details.css';
import { useState, useEffect } from "react"
import { useGetArticlesQuery } from "../Services/API"
import { useParams, Link } from "react-router-dom";
import { useCart } from "../Providers/CartContext";
import Header from "../Components/Header"
import BoutonRetour from '../Components/ReturnButton'
import Loading from '../Components/Loading';
import InputAdornment from '@mui/material/InputAdornment';
import { TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';

function Details() {

    const [rating, setRating] = useState(false)

    let { data, isFetching, isLoading: dataIsLoading } = useGetArticlesQuery()
    let { addToCart } = useCart()
    let { id } = useParams()

    // let [ createComment, { isLoading } ] = useCreateCommentsMutation()

    // const [comment, setComment] = useState("")

    if (!data) {
        return <Loading />
    }

    let article = data.filter((article) => article._id == id)[0]
    console.log("Data", article)

    const updateRating = (id) => {

        fetch(`http://localhost:3000/products/${id}`, {
        
            method: "PUT",

            body: JSON.stringify({
                rating: rating
            })

        }).then((response) => {

            console.log("Update PUT response", response.data);

        })
        
    }

    const RatingField = styled(TextField)({
        '& label.Mui-focused': {
          color: 'rgb(51 65 85)',
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: 'black',
        },
        '& .MuiOutlinedInput-root': {
          '& fieldset': {
            borderColor: 'black',
            borderWidth: '1.5px'
          },
          '&:hover fieldset': {
            borderColor: 'black',
          },
          '&.Mui-focused fieldset': {
            borderColor: 'black',
          },
        },
      });

    return ( 
        <>
            <Header />
            <h1>Détail du produit</h1>
            <div className='return-button-section'>
                <BoutonRetour />
            </div>
            <div className="article-section">
                {/* <img src={article.image} alt="Image du produit" srcset="" /> */}
                <div className='details-content'>
                    <div className='general-infos'>
                        <div>
                            <h2>{article.name}</h2>
                            <p>{article.available ? "En Stock" : "Stock épuisé"}</p>
                        </div>
                        <div>
                            <span>{article.price} €</span>
                        </div>
                    </div>
                    <div className='specific-infos'>
                        <div><p>Random Description</p></div>
                        <div className='cart-redirection'>
                            <Link to={`/cart`}>
                                <button onClick={() => addToCart({id: article._id, title: article.name, price: article.price})}>Ajouter au panier</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            <div>
                <h3>Notations</h3>
                    <div>

                        <div className="comments-prompt-section">

                            <div className="comments-prompt-section-content">

				                <div className="user-profil-section">
                                    <div className='user-profil'><i><img width="20" height="20" src="https://img.icons8.com/ios-filled/20/737373/inscription.png" alt="inscription"/></i></div>
                                </div>

                                <div className="comment-submission-section">

                                    <div className='comment-submission-section-content'>
                                        <RatingField
                                            variant="standard"
                                            placeholder='Donner votre avis'
                                            fullWidth
                                            onChange={(e) => setRating(e.target.value)}
                                            InputProps={{
                                                endAdornment: <InputAdornment position="end">/5</InputAdornment>,
                                            }}
                                        ></RatingField>
                                    </div>

                                    <div className='comment-publication'>
                                        <span onClick={updateRating(article._id)}>
                                            Publier
                                        </span>
                                    </div>

                                </div>

		                    </div>

                        </div>

                        <div className='comment-list'>
                            <span className='rating-title'>Note des acheteurs pour ce produit</span>&nbsp;:&nbsp;{article.rating} /5
                        </div>
                    </div>
            </div>
        </>
        
    );
}
  
export default Details;
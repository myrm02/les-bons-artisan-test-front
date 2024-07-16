import '../Styles/home.css';
import { useState, useEffect } from "react";
import { useCreateArticleMutation, useGetArticlesQuery } from "../Services/API"
import Header from "../Components/Header"
import Loading from '../Components/Loading';
import Cards from "../Components/Cards"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { grey } from '@mui/material/colors';
import { TextareaAutosize } from '@mui/material';

export default function () {

    let { data, isFetching, isLoading: dataIsLoading } = useGetArticlesQuery()
    let [ createArticle, { isLoading } ] = useCreateArticleMutation()

    const [title, setTitle] = useState("")
    const [type, setType] = useState("")
    const [price, setPrice] = useState(0)
    const [warranty, setWarranty] = useState(0)

    const create = (createDataForm) => {

        fetch(`http://localhost:3000/products/`, {
        
            method: "POST",

            body: JSON.stringify(createDataForm)

        }).then((response) => {

            console.log("Create POST response", response.data);

        })
        
    }

    return <div><Header />
    {
            isFetching ? <Loading /> : <div className="home-main-content">
               <br />

                <div className="articles-section">
                    <ArticlesList />
                </div>

                <div className="form-submission-section">
                <form>
                    <h2>Proposer un produit</h2>
                    <div className='line'>
                        <hr />
                    </div> 
                    <span>
                        <p>Nom du produit:</p><TextField placeholder="Entrer le nom du produit" size='small' fullWidth onChange={(event) => setTitle(event.target.value)}/></span>
                    <span><p>Type du produit:</p> <TextField placeholder="Entrer le type ou catégorie du produit" size='small' fullWidth onChange={(event) => setType(event.target.value)}/></span>
                    <span><p>Prix du produit:</p> <TextField placeholder="Entrer son prix" size='small' fullWidth onChange={(event) => setPrice(Number(event.target.value))}/></span>
                    <span><p>Garantie du produit:</p> <TextField placeholder="Entrer la durée de la garantie (facultatif)" size='small' fullWidth onChange={(event) => setWarranty(Number(event.target.value))}/></span>
                    <p>Description:</p>
                    <TextareaAutosize placeholder="Entrer la description du produit" style={{minHeight: '50px'}}/>

                    <div className='submit-button'>
                        <Button 
                            variant="contained"
                            style={{color: 'white', backgroundColor: grey[700], fontWeight: "bold"}}
                            onClick={() => {
                            create({
                                name: title,
                                type: type,
                                price: price,
                                warranty_years: warranty,
                                available: true
                            })
                        }}>Créer un article
                        </Button>
                    </div>
                </form>
                </div>

            </div>
        }
    </div>
}

function ArticlesList() {

    let { data, isFetching } = useGetArticlesQuery()

    console.log("Data", data)

    // const [products, setProducts] = useState([])

    // const fetchProducts = () => {

    //     fetch(`https://les-bons-artisan-test-back.onrender.com/products`).then((response) => {

    //         console.log("GET Products response", response);

    //         setProducts(response.data)
    //     })
        
    // }

    // useEffect(() => {
    //     fetchProducts()
    // }, [])

    return <><div className='article'>
                <Cards products={data}/>
            </div></>

}
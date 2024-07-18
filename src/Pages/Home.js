import '../Styles/home.css';
import { useState } from "react";
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
    const [price, setPrice] = useState(null)
    const [warranty, setWarranty] = useState(null)

    const [error, setError] = useState(false)

    return <div><Header />
    {
            isFetching ? <div className='loading'><Loading /></div> : <div className="home-main-content">
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
                    <span className={error ? 'error' : ''}>
                        <p>Nom du produit:</p><TextField placeholder="Entrer le nom du produit" size='small' fullWidth onChange={(event) => setTitle(event.target.value)}/>{error ? <span style={{color: 'red', fontSize: '14px'}}>Cette information est requise</span> : <></>}</span>
                    <span><p>Type du produit:</p> <TextField placeholder="Entrer le type ou catégorie du produit" size='small' fullWidth onChange={(event) => setType(event.target.value)}/>{error ? <span style={{color: 'red', fontSize: '14px'}}>Cette information est requise</span> : <></>}</span>
                    <span><p>Prix du produit:</p> <TextField placeholder="Entrer son prix" size='small' fullWidth onChange={(event) => setPrice(Number(event.target.value))}/>{error ? <span style={{color: 'red', fontSize: '14px'}}>Cette information est requise</span> : <></>}</span>
                    <span><p>Garantie du produit:</p> <TextField placeholder="Entrer la durée de la garantie (facultatif)" size='small' fullWidth onChange={(event) => event.target.value === "" ? setWarranty(0) : setWarranty(Number(event.target.value))}/></span>
                    <p>Description:</p>
                    <TextareaAutosize placeholder="Entrer la description du produit (facultatif)" style={{minHeight: '50px'}}/>

                    <div className='submit-button'>
                        <Button 
                            variant="contained"
                            style={{color: 'white', backgroundColor: grey[700], fontWeight: "bold"}}
                            onClick={() => {
                                if(title === "" || type === "" || price === null || warranty === null) {
                                    setError(true)
                                } else {
                                    createArticle({
                                        name: title,
                                        type: type,
                                        price: price,
                                        warranty_years: warranty,
                                        available: true
                                    })
                                }
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

    return <><div className='article'>
                <Cards products={data}/>
            </div></>

}
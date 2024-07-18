import '../Styles/update.css';
import { useState } from "react"
import { useGetArticlesQuery } from "../Services/API"
import { useParams } from "react-router-dom";
import Header from "../Components/Header"
import BoutonRetour from '../Components/ReturnButton'
import Loading from '../Components/Loading';
import UpdateForm from "../Components/UpdateForm"

function Update() {

    let { data, isFetching, isLoading: dataIsLoading } = useGetArticlesQuery()
    let { id } = useParams()

    let article = data.filter((article) => article._id == id)[0]
    console.log("Data", article)

    if (!data) {
        return <Loading />
    }

    return ( 
        <>
            <Header />
            <h1>Moficiation du produit&nbsp;<span>{article.name}</span></h1>
            <div className='return-button'>
                <BoutonRetour />
            </div>
            <UpdateForm name={article.name} type={article.type} price={article.price} warranty={article.warranty_years} availability={article.available} id={article._id}/>

        </>
        
    );
}

export default Update;
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

    const [name, setRating] = useState(0)

    // let [ createComment, { isLoading } ] = useCreateCommentsMutation()

    // const [comment, setComment] = useState("")

    if (!data) {
        return <Loading />
    }

    let article = data.filter((article) => article._id == id)[0]
    console.log("Data", article)

    const update = (id) => {

        fetch(`http://localhost:3000/products/${id}`, {
        
            method: "PUT",

            body: JSON.stringify({
                name: name
            })

        }).then((response) => {

            console.log("Update PUT response", response.data);

        })
        
    }

    return ( 
        <>
            <Header />
            <h1>Moficiation du produit&nbsp;<span>{article.name}</span></h1>
            <div className='return-button'>
                <BoutonRetour />
            </div>
            <UpdateForm update={update(article._id)}/>

        </>
        
    );
}

export default Update;
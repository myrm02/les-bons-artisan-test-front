export default function BoutonRetour(){

    const handleBack = () => {
        window.history.back()
    };

    return(
        <div>
            <span className="return-button" onClick={() => handleBack()}>&#10229; Retour</span>
        </div>
    )
}

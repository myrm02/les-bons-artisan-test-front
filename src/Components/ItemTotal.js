export default function ItemTotal(props){

    return(
        <div className="items-total">
            <span className="items-number">{props.items.length}</span>
        </div>
    )
}
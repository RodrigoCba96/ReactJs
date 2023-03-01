import './itemListContainer.scss'
const ItemListContainer = ({greeting}) => {

    return (
        <header>
            <div>
                <h2 class="item">ItemListContainer</h2>
                {greeting}



            </div>
        </header>
    )
}

export default ItemListContainer
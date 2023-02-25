import ReactDOM from "react-dom";

import Cards from "./Components/Cards";

window.addEventListener('DOMContentLoaded', () => {
    const allCards = document.querySelectorAll('.wp-block-icb-cards');

    allCards.forEach((cardsEl) => {
        const attributes = JSON.parse(cardsEl.dataset.attributes);

        ReactDOM.render(
            <CardsRender attributes={attributes} />,
            cardsEl
        );
    });
});

const CardsRender = ({ attributes }) => {
    return (

        <Cards attributes={attributes} clientId={attributes.clientId} >
            {attributes.cards.map((card, index) => (
                <div className={`card card-${index}`} key={index} >
                    <img src={card.img} alt="img" />
                    <div className="content">
                        <h2>{card.title}</h2>
                        <p>{card.desc}</p>

                        <form action={card.btnUrl}>
                            <button>{card.btnLabal}</button>
                        </form>
                    </div>
                </div>
            ))}
        </Cards>
    )


}
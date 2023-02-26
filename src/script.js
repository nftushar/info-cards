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
    const { imgPos } = attributes;

    return (
        <Cards attributes={attributes} clientId={attributes.clientId} >
            {attributes.cards.map((card, index) => {
                const { img, title, desc, btnLabal, btnUrl } = card;

                return <div className={`card card-${index}`} key={index} >
                    {img && 'first' === imgPos && <img src={img} alt={title} />}

                    <div className="content">
                        <h2 dangerouslySetInnerHTML={{ __html: title }} />
                        {desc && <p dangerouslySetInnerHTML={{ __html: desc }} />}

                        <div className="btnWrapper">
                            <a href={btnUrl}>{btnLabal}</a>
                        </div>
                    </div>

                    {img && 'last' === imgPos && <img src={img} alt={title} />}
                </div>
            })}
        </Cards>
    )


}
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
    const { clientId, cards, isImg, imgPos } = attributes;

    return (
        <Cards attributes={attributes} clientId={clientId}>
            {cards.map((card, index) => {
                // console.log(card.isImg)

                const { img, title, desc, btnLabal, btnUrl } = card;

                const imgEl = isImg && img && <img src={img} alt={title} />

                return <div className={`card card-${index}`} key={index} >
                    {'first' === imgPos && imgEl}

                    <div className="content">
                        {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
                        {desc && <p dangerouslySetInnerHTML={{ __html: desc }} />}
                        {btnLabal && <div className="btnWrapper">
                            <a href={btnUrl} dangerouslySetInnerHTML={{ __html: btnLabal }} />
                        </div>}
                    </div>

                    {'last' === imgPos && imgEl}
                </div>
            })}
        </Cards>
    )
}
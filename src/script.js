import ReactDOM from "react-dom";

import { getBoxValue } from "./utils/function";

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
    const { cId: clientId, cards, btnPadding, gridColumns, titleTypo, descTypo, contentPadding, columnGap, rowGap } = attributes;

    return <div className={`main main-${clientId}`}>
        <style>
            {` 
                .main-${clientId}{
                    grid-template-columns: repeat(${gridColumns['desktop']}, auto);
                    column-gap: ${columnGap};
                    row-gap: ${rowGap};
                    padding: ${getBoxValue(btnPadding)};
                }
                .main-${clientId} .container button{
                    padding: ${getBoxValue(btnPadding)};
                }
                .main-${clientId}  .container {
                    padding: ${getBoxValue(contentPadding)};
                }
            `}
        </style>
        {cards.map((card, index) => (
            <div className={`card card-${index}`} key={index} >
                <style>
                    {`
                        .main-${clientId} .card-${index} .container h2 {
                            color: ${card.titleColor};
                            font-size: ${titleTypo.fontSize}
                        }
                        .main-${clientId} .card-${index} .container p {
                            color: ${card.descColor};
                            font-size: ${descTypo.fontSize}
                        }
                        .main-${clientId} .card-${index} .container button{
                            background-color: ${card.btnColor?.color}
                        }
				    `}
                </style>
             
                <img src={card.img} alt="img" />

                <div className="container">
                    <h2>{card.title}</h2>
                    <p>{card.desc}</p>
                    <button>{card.btnLabal}</button>
                </div>
            </div>
        ))}
    </div>
}
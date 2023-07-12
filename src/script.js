import { render } from "react-dom";

import Style from "./Style";
import Cards from "./Components/Frontend/Cards";

window.addEventListener('DOMContentLoaded', () => {
    const allCards = document.querySelectorAll('.wp-block-icb-cards');

    allCards.forEach((cardsEl) => {
        const attributes = JSON.parse(cardsEl.dataset.attributes);

        render(<>
            <Style attributes={attributes} clientId={attributes.clientId} />

            <Cards attributes={attributes} clientId={attributes.clientId} />
        </>, cardsEl);
    });
});
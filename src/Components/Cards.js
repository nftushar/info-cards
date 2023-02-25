import { getBackgroundCSS, getColorsCSS } from '../../../Components/Helper/getCSS';

import { getBoxValue } from "../utils/function";

const Cards = (props) => {
    const { attributes, clientId, children } = props;
    const { cards, btnPadding, columns, titleTypo, descTypo, contentPadding, columnGap, rowGap } = attributes;

    return <>
        <style>
            {` 
                #icbCards-${clientId} .icbCards{
                    column-gap: ${columnGap};
                    row-gap: ${rowGap};
                    padding: ${getBoxValue(btnPadding)};
                }
                #icbCards-${clientId} .icbCards .content {
                    padding: ${getBoxValue(contentPadding)};
                }
                #icbCards-${clientId} .icbCards .content h2{
                    
                }
                #icbCards-${clientId} .icbCards .content p{
                    
                }
                #icbCards-${clientId} .icbCards .content button{
                    padding: ${getBoxValue(btnPadding)};
                }
            `}
            {cards.map((card, index) => {
                const { background, img, title, titleColor, desc, descColor, btnLabal, btnUrl, btnColors } = card;

                return `
                #icbCards-${clientId} .icbCards .card-${index}{
                    ${getBackgroundCSS(background, true, true, false)}
                }
                #icbCards-${clientId} .icbCards .card-${index} .content h2 {
                    color: ${titleColor};
                }
                #icbCards-${clientId} .icbCards .card-${index} .content p {
                    color: ${descColor};
                }
                #icbCards-${clientId} .icbCards .card-${index} .content button{
                    ${getColorsCSS(btnColors)}
                }
            `})}
        </style>
        <div className={`icbCards columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>
            {children}
        </div>
    </>
}

export default Cards;
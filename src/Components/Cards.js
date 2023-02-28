import { getBackgroundCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS } from '../../../Components/Helper/getCSS';

import { getBoxValue } from "../utils/function";

const Cards = (props) => {
    const { attributes, clientId, children } = props;
    const { cards, layout, background, btnPadding, columns, padding, titleTypo, descTypo, btnTypo, contentPadding, cardPadding, cardShadow, columnGap, rowGap, btnAlign } = attributes;

    return <>

        <style>
            {`
                ${getTypoCSS(titleTypo)?.googleFontLink}
                ${getTypoCSS(descTypo)?.googleFontLink}
                ${getTypoCSS(btnTypo)?.googleFontLink}

                #icbCards-${clientId} .icbCards{
                    ${getBackgroundCSS(background)}
                    column-gap: ${columnGap};
                    row-gap: ${rowGap};
                    padding: ${getBoxValue(padding)};
                }
                #icbCards-${clientId} .icbCards .card{
                    padding: ${getBoxValue(cardPadding)};
                    box-shadow: ${getMultiShadowCSS(cardShadow)};
                }
                #icbCards-${clientId} .icbCards .content {
                    padding: ${getBoxValue(contentPadding)};
                }
                #icbCards-${clientId} .icbCards .content h2{
                    ${getTypoCSS(titleTypo)?.styles}
                }
                #icbCards-${clientId} .icbCards .content p{
                    ${getTypoCSS(descTypo)?.styles}
                }
                #icbCards-${clientId} .icbCards .content .btnWrapper{
                    text-align: ${btnAlign}
                }
                #icbCards-${clientId} .icbCards .content a{
                    ${getTypoCSS(btnTypo)?.styles}
                    padding: ${getBoxValue(btnPadding)};
                }
            `}

            {cards.map((card, index) => {
                const { background, titleColor, btnHovColors, descColor, btnColors } = card;

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
                #icbCards-${clientId} .icbCards .card-${index} .content a{
                    ${getColorsCSS(btnColors)}
                }
                 #icbCards-${clientId} .icbCards .card-${index} .content a:hover{
                    ${getColorsCSS(btnHovColors)}
                }
            `})}
        </style>
        {/* {console.log(getColorsCSS(btnHovColors))} */}
        <div className={`icbCards columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile} ${layout}`}>
            {children}
        </div>
    </>
}

export default Cards;
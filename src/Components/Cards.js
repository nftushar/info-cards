import { getBackgroundCSS, getColorsCSS, getTypoCSS } from '../../../Components/Helper/getCSS';

import { getBoxValue } from "../utils/function";

const Cards = (props) => {
    const { attributes, clientId, children } = props;
    const { cards, background, btnPadding, columns, padding, titleTypo, descTypo, contentPadding, columnGap, rowGap } = attributes;
    // {console.log({padding})}
    return <>

            {/* ${getTypoCSS(titleTypo)?.googleFontLink} */}
        <style>
            {`

                #icbCards-${clientId} .icbCards{
                    ${getBackgroundCSS(background)}
                    column-gap: ${columnGap};
                    row-gap: ${rowGap};
                    padding: ${getBoxValue(padding)};
                    
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
                #icbCards-${clientId} .icbCards .content a{
                    padding: ${getBoxValue(btnPadding)};
                }
            `}

            {cards.map((card, index) => {
                const { background, img, title, titleColor, desc, btnHovColors, descColor, btnLabal, btnUrl, btnColors } = card;

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
        <div className={`icbCards columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile}`}>
            {children}
        </div>
    </>
}

export default Cards;
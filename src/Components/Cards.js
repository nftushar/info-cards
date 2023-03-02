import { getBackgroundCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS } from '../../../Components/Helper/getCSS';

import { getBoxValue } from "../utils/function";

const Cards = (props) => {
    const { attributes, clientId, children } = props;
    const { cards, layout, background, btnPadding, columns, padding, titleColor, titleTypo, titleAlign, descColor,
        descTypo, btnTypo, descAlign, btnRadius, contentPadding, cardPadding, cardShadow, cardRadius, imgHeight, columnGap, rowGap, btnAlign } = attributes;
    // console.log(btnRadius);

    return <>
        {/* {console.log(clientId)} */}

        <style>

            {`
                ${getTypoCSS(titleTypo)?.googleFontLink}
                ${getTypoCSS(descTypo)?.googleFontLink}
                ${getTypoCSS(btnTypo)?.googleFontLink}

                #icbCards-${clientId} .icbCards{
                    ${getBackgroundCSS(background)}
                    column-gap: ${columnGap};
                    // padding: ${getBoxValue(padding)}
                }
                #icbCards-${clientId} .icbCards .card{
                    border-radius: ${cardRadius};
                    padding: ${getBoxValue(cardPadding)};
                    box-shadow: ${getMultiShadowCSS(cardShadow)}
                }
                #icbCards-${clientId} .icbCards .card img{
                    height: ${imgHeight}
                }
                #icbCards-${clientId} .icbCards.vertical .card img{
                    max-height: ${imgHeight}
                }
                #icbCards-${clientId} .icbCards .content {
                    padding: ${getBoxValue(contentPadding)}
                }
                #icbCards-${clientId} .icbCards .content h2{
                    text-align: ${titleAlign};
                    color: ${titleColor};
                    ${getTypoCSS(titleTypo)?.styles}
                    
                }
                #icbCards-${clientId} .icbCards .content p{
                    text-align: ${descAlign};
                    color: ${descColor};
                    ${getTypoCSS(descTypo)?.styles}
                }
                #icbCards-${clientId} .icbCards .content .btnWrapper{
                    text-align: ${btnAlign}
                }
                #icbCards-${clientId} .icbCards .content a{
                    border-radius: ${btnRadius};
                    ${getTypoCSS(btnTypo)?.styles};
                    padding: ${getBoxValue(btnPadding)}
                }
            `}
            {/* {console.log(btnRadius)} */}



            {/* #icbCards-${clientId} .icbCards .card-${index} .content h2 {
                color: ${titleColor};

                } */}
            {/* #icbCards-${clientId} .icbCards .card-${index} .content p {
                color: ${descColor};
                } */}
            {cards.map((card, index) => {

                const { background, btnHovColors, btnColors } = card;
                // console.log(titleColor);
                return `
                #icbCards-${clientId} .icbCards .card-${index}{
                    ${getBackgroundCSS(background, true, true, false)}
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
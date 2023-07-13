import { getBackgroundCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS } from '../../Components/Helper/getCSS';

import { getBoxValue } from "./utils/function";

const Style = ({ attributes, clientId }) => {
    const { cards, background, btnPadding, padding, titleColor, titleTypo, descColor, descTypo, btnTypo, contentAlign, btnRadius, contentPadding, cardPadding, cardShadow, cardRadius, imgHeight, columnGap, rowGap, btnAlign, btnColors, btnHovColors } = attributes;

    const cardsSl = `#icbCards-${clientId} .icbCards`;

    return <style>
        {`
        ${getTypoCSS(titleTypo)?.googleFontLink}
        ${getTypoCSS(descTypo)?.googleFontLink}
        ${getTypoCSS(btnTypo)?.googleFontLink}

        ${cardsSl}{
            ${getBackgroundCSS(background)}
            column-gap: ${columnGap};
            row-gap: ${rowGap};
            padding: ${getBoxValue(padding)}
        }
        ${cardsSl} .first4Theme, ${cardsSl} .theme5 .content{
            border-radius: ${cardRadius};
            padding: ${getBoxValue(cardPadding)};
            box-shadow: ${getMultiShadowCSS(cardShadow)}
        }
        ${cardsSl} .first4Theme img{
            height: ${imgHeight}
        }
        ${cardsSl}.vertical .card img{
            max-height: ${imgHeight}
        }
        ${cardsSl} .first4Theme .content {
            padding: ${getBoxValue(contentPadding)};
            text-align: ${contentAlign};
        }
        ${cardsSl}  .first4Theme .content h2, ${cardsSl} .theme5 .content .details h2{
            color: ${titleColor};
            text-align: ${contentAlign};
            ${getTypoCSS(titleTypo)?.styles}
            
        }
        ${cardsSl}  .first4Theme .content p{
            text-align: ${contentAlign};
            color: ${descColor};
            ${getTypoCSS(descTypo)?.styles}
        }
        ${cardsSl}  .first4Theme .content .btnWrapper{
            text-align: ${btnAlign}
        }
        ${cardsSl}  .first4Theme .content a{
            ${getColorsCSS(btnColors)};
            border-radius: ${btnRadius};
            ${getTypoCSS(btnTypo)?.styles};
            padding: ${getBoxValue(btnPadding)}
        }
        ${cardsSl}  .first4Theme .content a:hover{
            ${getColorsCSS(btnHovColors)}
        }
    `}
        {/* {console.log(btnRadius)} */}



        {/* ${cardsSl} .card-${index} .content h2 {
        color: ${titleColor};

        } */}
        {/* ${cardsSl} .card-${index} .content p {
        color: ${descColor};
        } */}
        {cards.map((card, index) => {

            const { background } = card;
            // console.log(titleColor);
            return `
        ${cardsSl} .first4Theme.card-${index}, ${cardsSl} .theme5.card-${index} .content{
            ${getBackgroundCSS(background, true, true, false)}
        }

        
    `})}
    </style>
}

export default Style
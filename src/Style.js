import { getBackgroundCSS, getColorsCSS, getMultiShadowCSS, getTypoCSS } from '../../Components/utils/getCSS';

import { getBoxValue } from "../../Components/utils/functions";

const Style = ({ attributes, clientId }) => {
    const { cards, background, btnPadding, padding, titleColor, titleTypo, descColor, descTypo, btnTypo, contentAlign, btnRadius, contentPadding, cardPadding, cardShadow, cardRadius, imgHeight, columnGap, rowGap, btnAlign, btnColors, btnHovColors } = attributes;

    const cardsSl = `#icbCards-${clientId} .icbCards`;

    return <style>
        {`
        ${getTypoCSS('', titleTypo)?.googleFontLink}
        ${getTypoCSS('', descTypo)?.googleFontLink}
        ${getTypoCSS('', btnTypo)?.googleFontLink}
        ${getTypoCSS(`${cardsSl} .first4Theme .content h2, ${cardsSl} .theme5 .content .details h2`, titleTypo)?.styles}
        ${getTypoCSS(`${cardsSl} .first4Theme .content h2 p, ${cardsSl} .theme5 .content .details h2 span`, descTypo)?.styles}
        ${getTypoCSS(`${cardsSl} .theme5 .content .details .actionBtn button`, btnTypo)?.styles}
        
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
        ${cardsSl} .vertical .card img{
            max-height: ${imgHeight}
        }
        ${cardsSl} .first4Theme .content, ${cardsSl} .theme5 .content {
            padding: ${getBoxValue(contentPadding)};
            text-align: ${contentAlign};
        }
        ${cardsSl} .first4Theme .content h2, ${cardsSl} .theme5 .content .details h2{
            color: ${titleColor};
            text-align: ${contentAlign};
        }
        ${cardsSl} .first4Theme .content p, ${cardsSl} .theme5 .content .details  p{
            text-align: ${contentAlign};
            color: ${descColor};
        }
        ${cardsSl} .first4Theme .content .btnWrapper, ${cardsSl} .theme5 .content .details .actionBtn{
            justify-content: ${btnAlign}
        }
        ${cardsSl}  .first4Theme .content a, ${cardsSl} .theme5 .content .details .actionBtn button{

            ${getColorsCSS(btnColors)};
            border-radius: ${btnRadius};
            padding: ${getBoxValue(btnPadding)}
        }
        ${cardsSl}  .first4Theme .content a:hover, ${cardsSl} .theme5 .content .details .actionBtn button:hover {
            ${getColorsCSS(btnHovColors)}
        }
    `}
        {cards.map((card, index) => {

            const { background } = card;
            return `
        ${cardsSl} .first4Theme.card-${index}, ${cardsSl} .theme5.card-${index} .content{
            ${getBackgroundCSS(background, true, true, false)}
        }

        
    `})}
    </style>
}

export default Style
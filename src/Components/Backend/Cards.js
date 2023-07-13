import First4Theme from './First4Theme';
import Theme5 from './Theme5';

const Cards = ({ attributes,  updateCard }) => {
    const { cards, theme, layout, columns } = attributes;

    return <>
        <div className={`icbCards columns-${columns.desktop} columns-tablet-${columns.tablet} columns-mobile-${columns.mobile} ${layout}`}>
            {cards.map((card, index) => {
                switch (theme) {
                    case 'default':
                    case 'theme1':
                    case 'theme2':
                    case 'theme3':
                    case 'theme4':
                        return <First4Theme attributes={attributes} card={card} index={index} updateCard={updateCard} />;
                    case 'theme5':
                        return <Theme5 attributes={attributes} card={card} index={index} updateCard={updateCard} />;
                    default:
                        return null;
                }
            })}
        </div>
    </>
}

export default Cards;
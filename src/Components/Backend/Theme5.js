import { __ } from "@wordpress/i18n";

import { ImagePlaceholder } from '../../../../Components';

const Theme5 = ({ attributes, card, index, updateCard }) => {
    const { theme, isImg, imgPos } = attributes;

    const { img, title, desc, btnLabal, btnUrl } = card;
    // {console.log(desc)}
    const imgEl = isImg && <>
        {img ? <img src={img} alt={title} /> : <ImagePlaceholder label={__(' Card Image:', 'imgBox')} value={{ url: img }} onChange={val => updateCard(index, 'img', val?.url)} />}
    </>

    return <div className="theme5-cards"> <div className={`theme5 card-${index} ${theme}`} key={index} >
        <div className="imgBox">
            {'first' === imgPos && imgEl}
        </div>
        <div className="content">
            <div className="details">
                <h2>{title} <br /> <span>{desc}</span></h2>
                <div className="actionBtn">
                    <button href={btnUrl} >{btnLabal}</button>
                </div>
            </div>
        </div>
        {/* cardRadius */}
        {'last' === imgPos && imgEl}
    </div></div>
}
export default Theme5;
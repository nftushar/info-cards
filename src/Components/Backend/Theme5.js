import { __ } from "@wordpress/i18n";
import { RichText } from "@wordpress/block-editor";
import { ImagePlaceholder } from '../../../../Components';

const Theme5 = ({ attributes, card, index, updateCard }) => {
    const { theme, isImg, imgPos } = attributes;

    const { img, title, desc, btnLabal, btnUrl } = card;
    const imgEl = isImg && <>
        {img ? <img src={img} alt={title} /> : <ImagePlaceholder label={__(' Card Image:', 'imgBox')} value={{ url: img }} onChange={val => updateCard(index, 'img', val?.url)} />}
    </>
    return <div className="theme5-cards"> <div className={`theme5 card-${index} ${theme}`} key={index} >
        <div className="imgBox">
            {'first' === imgPos && imgEl}
        </div>
        <div className="content">
            <div className="details">


            <RichText
                tagName="h2"
                value={title}
                onChange={(content) => updateCard(index, "title", content)}
                placeholder={__("Enter Title", 'info-cards')}
                inlineToolbar
                allowedFormats={["core/bold", "core/italic"]}
            />

            <RichText
                tagName="p"
                value={desc}
                onChange={(content) => updateCard(index, "desc", content)}
                placeholder={__("Enter Description", 'info-cards')}
                inlineToolbar
                allowedFormats={["core/bold", "core/italic"]}
            />

                {/* <h2>{title}</h2>
                <p>{desc}</p> */}
                <div className="actionBtn">
                <RichText
                    tagName="button"
                    href={btnUrl}
                    value={btnLabal}
                    onChange={(content) => updateCard(index, "btnLabal", content)}
                    placeholder={__("Button", 'info-cards')}
                    inlineToolbar
                    allowedFormats={["core/bold", "core/italic"]}
                />
                </div>
            </div>
        </div>
        {/* cardRadius */}
        {'last' === imgPos && imgEl}
    </div>
    </div>
}
export default Theme5;
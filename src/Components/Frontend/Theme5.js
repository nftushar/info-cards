const Theme5 = ({ attributes, card, index }) => {
    const { theme, isImg, imgPos } = attributes;

    const { img, title, desc, btnLabal, btnUrl } = card;
    const imgEl = isImg && img && <img src={img} alt={title} />

    return <div className="theme5-cards"> <div className={`theme5 card-${index} ${theme}`} key={index} >
        <div className="imgBox">
            {'first' === imgPos && imgEl}
        </div>
        <div className="content">
            <div className="details">
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
            {desc && <p dangerouslySetInnerHTML={{ __html: desc }} />}
                <div className="actionBtn">

                
                <button href={btnUrl} dangerouslySetInnerHTML={{ __html: btnLabal }} />
                </div>
            </div>
        </div>

    </div>
        {'last' === imgPos && imgEl}
    </div>
}
export default Theme5;
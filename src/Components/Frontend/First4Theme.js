const First4Theme = ({ attributes, card, index }) => {
    const { theme, isImg, imgPos } = attributes;

    const { img, title, desc, btnLabal, btnUrl } = card;

    const imgEl = isImg && img && <img src={img} alt={title} />

    return <div className={`card card-${index} ${theme} first4Theme`} key={index}>
        {'first' === imgPos && imgEl}

        <div className="content">
            {title && <h2 dangerouslySetInnerHTML={{ __html: title }} />}
            {desc && <p dangerouslySetInnerHTML={{ __html: desc }} />}
            {btnLabal && <div className="btnWrapper">
                <a href={btnUrl} dangerouslySetInnerHTML={{ __html: btnLabal }} />
            </div>}
        </div>

        {'last' === imgPos && imgEl}
    </div>
}
export default First4Theme;
const Theme5 = ({ attributes, card, index }) => {
    const { theme } = attributes;

    return <div className={`card card-${index} ${theme}`} key={index}>new card</div>
}
export default Theme5;
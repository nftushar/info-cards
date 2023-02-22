var padding = {
    top: "10px",
    right: "11px",
    bottom: "12px",
    left: "13px"
}
    

function mypadding(setPadding){
    setPadding = `${padding.top} ${padding.right} ${padding.bottom} ${padding.left}`;

    return setPadding;
}

var hi = mypadding(padding);

console.log(hi);
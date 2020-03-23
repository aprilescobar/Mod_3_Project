
document.addEventListener("DOMContentLoaded", function() {
    getTops();

});
    
const getTops = () => {
    fetch("http://localhost:3000/tops")
    .then( resp => resp.json())
    .then( tops => renderTops(tops))

}

const renderTops = tops => {
    const topDiv = document.createElement("div")
    tops.forEach( top => {
        let topInfo = renderTop(top)
        topDiv.appendChild(topInfo)
    })
    document.body.appendChild(topDiv)
}

const renderTop = top => {
    const topCard = document.createElement("div")
    topCard.innerHTML = `
    
    <h2>${top.name}</h2>
 
    <li>${top.designer}</li>

    <img src=${top.img_url} />

    `
    return topCard
}

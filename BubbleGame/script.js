

var query = "";

for (let i = 0; i <= 160; i++) {

    var randomNum = Math.floor(Math.random()*10);
    query +=` <div class="bubble">${randomNum}</div> `;
    
}

document.querySelector(".panel-content").innerHTML = query;
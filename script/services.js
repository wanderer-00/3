let serv = document.getElementById('services');

for(i=0; i<3; i++){
    serv.innerHTML += `
    <div class="title">${DATAservices[i].TITLE}</div>
    <div class="note">${DATAservices[i].NOTE}</div>
    <div class="price">${DATAservices[i].PRICE} ₽</div>
    <div class="more">---</div>
`
}
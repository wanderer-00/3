let serv = document.getElementById('services');

for(i=0; i<DATAservices.length; i++){
    serv.innerHTML += `
<hr>
<div class="service">
    <div class="title">${DATAservices[i].TITLE}</div>
    <div class="note">${DATAservices[i].NOTE}</div>
    <div class="price">${DATAservices[i].PRICE} ₽</div>
    <div class="more">Подробнее</div>
</div>
`
}
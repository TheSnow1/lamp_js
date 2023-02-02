let onNode = document.querySelector(`#on`);
let offNode = document.querySelector(`#off`);
let lampNode = document.querySelector(`#lamp`);
let pageNode = document.querySelector(`#page`);
let bodyNode = document.querySelector(`#body`)

offNode.addEventListener(`click`, function(){
	lampNode.innerHTML = `<img class="img img-fluid" src="assets/dark.png" />`
	bodyNode.classList.add(`dark`);
});

onNode.addEventListener(`click`, function(){
	lampNode.innerHTML = `<img class="img img-fluid" src="assets/light.png" />`
	bodyNode.classList.remove(`dark`);
});
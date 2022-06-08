function getElement(selection){
	const element = document.querySelector(selection);
	if(element){
		return element;
	}
	throw new Error(
		`Please check "${selection}" selector, no such element exists`
	)
}
// create constructor - Gallery
function Gallery(element){

	this.conatiner = element
	// list -> images-category
	this.list = [...element.querySelectorAll('.img')] 
	// target
	this.modal = getElement('.modal')
	this.modalImg = getElement('.main-img')
	this.imageName = getElement('.image-name')
	this.modalImages = getElement('.modal-images')
	//this.closeBtn = getElement('.close-btn')
	//this.nextBtn = getElement('.next-btn')
	//this.prevBtn = getElement('.prev-btn')

	// bind functions
	this.openModal = this.openModal.bind(this) 
	// container event
	this.conatiner.addEventListener('click', 
		function(e){ 
			if(e.target.classList.contains('img')){
				this.openModal(e.target, this.list)
			}

		}.bind(this)) 
	
}
// окремо обране зображення з методом openModel (e.target,this.list - обрати об'єкт з націленої дії; this.list з певного переліку- категорії)
Gallery.prototype.openModal = function(selectedImage, list){
	this.setMainImage(selectedImage)

	// ітеруємо list і на кожній ітерації ми маємо доступ до image- аргумента
	this.modalImages.innerHTML = list.map(function(image){
		return `<img src='${image.src}' title='${image.title}' data-id='${image.dataset.id}' class='${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img" }' />`
	}).join('')

	this.modalImages.classList.add('selected')
	this.modal.classList.add('open')
}

Gallery.prototype.setMainImage = function(selectedImage){
	this.modalImg.src = selectedImage.src
	this.imageName.textContent = selectedImage.title
}

const nature= new Gallery(getElement('.nature'))
const city= new Gallery(getElement('.city'))








































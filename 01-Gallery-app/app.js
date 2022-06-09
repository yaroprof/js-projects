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
	this.closeBtn = getElement('.close-btn')
	this.nextBtn = getElement('.next-btn')
	this.prevBtn = getElement('.prev-btn')

	// bind functions
	//this.openModal = this.openModal.bind(this) 
	this.closeModal = this.closeModal.bind(this)
	this.nextImage = this.nextImage.bind(this)
	this.prevImage = this.prevImage.bind(this)

	// container event
	this.conatiner.addEventListener('click', 
		function(e){ 
			if(e.target.classList.contains('img')){
				this.openModal(e.target, this.list)
			}
		}.bind(this)) 
	// close modal
}

// --- adding Prototypes
// окремо обране зображення з методом openModel (e.target,this.list - обрати об'єкт з націленої дії; this.list з певного переліку- категорії)
Gallery.prototype.openModal = function(selectedImage, list){
	this.setMainImage(selectedImage)

	// ітеруємо list і на кожній ітерації ми маємо доступ до image- аргумента
	this.modalImages.innerHTML = list.map(function(image){
		return `<img src='${image.src}' title='${image.title}' data-id='${image.dataset.id}' class='${selectedImage.dataset.id === image.dataset.id ? "modal-img selected" : "modal-img" }' />`
	}).join('')

	// add Events
	//this.modalImages.classList.add('selected')
	this.modal.classList.add('open')
	this.closeBtn.addEventListener('click', this.closeModal)
	this.nextBtn.addEventListener('click', this.nextImage)
	this.prevBtn.addEventListener('click', this.prevImage)

}

Gallery.prototype.setMainImage = function(selectedImage){
	this.modalImg.src = selectedImage.src
	this.imageName.textContent = selectedImage.title
}
// remove all unusefull event listeners
// для видалення modal необх. застосув. три команди: closeBtn, nextBtn, prevBtn
Gallery.prototype.closeModal = function(){
	this.modal.classList.remove('open')
 // після відпрацювання всіх подій, необхідно закрити всі обробники подій
	this.closeBtn.removeEventListener('click', this.closeModal)
	this.nextBtn.removeEventListener('click', this.nextImage)
	this.prevBtn.removeEventListener('click', this.prevImage)
}
// обираємо з малої галереї зображення з класом .selected (створеного у this.modalImages.innerHTML)
// проводимо маніпуляції зі змінною selected
// nextElementSibling - перебирає рядок дочірніх елементів від selected. замість циклу
Gallery.prototype.nextImage = function(){
	const selected = this.modalImages.querySelector('.selected')
	const next = selected.nextElementSibling || this.modalImages.firstElementChild // 01 якщо перелік закінчується, обирається перший елемент переліку
	selected.classList.remove('selected') // 02 після проходження рядка видал. клас selected - видал modal - зображення
	next.classList.add('selected') // 03 відповідно починається наступний новий обраний - selected // перевертаємо перелік та обираємо один елемент за одним
	this.setMainImage(next)  // встановл. Головне зобр. відповідно до next елемента
}

Gallery.prototype.prevImage = function(){
	const selected = this.modalImages.querySelector('.selected')
	const prev = selected.previousElementSibling || this.modalImages.lastElementChild
	selected.classList.remove('selected')
	prev.classList.add('selected')
	this.setMainImage(prev)
}

const nature= new Gallery(getElement('.nature'))
const city= new Gallery(getElement('.city'))








































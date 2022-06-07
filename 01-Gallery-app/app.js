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

	this.list = [...element.querySelectorAll('.img')]  
	// target
	this.modal = getElement('.modal')
	this.moddalImg = getElement('.img')
	this.modalImages = getElement('.modal-images')
	this.closeBtn = getElement('.close-btn')
	this.nextBtn = getElement('.next-btn')
	this.prevBtn = getElement('.prev-btn')
// bind functions

	this.openModal = this.openModal.bind(this) 
	this.conatiner.addEventListener('click', 
		function(e){ 
			console.log(this);
			this.openModal()
		}.bind(this)) 
		
}


Gallery.prototype.openModal = function(){
	console.log('open modal');
	this.modal.classList.add('open')
}

const nature= new Gallery(getElement('.nature'))
const city= new Gallery(getElement('.city'))










































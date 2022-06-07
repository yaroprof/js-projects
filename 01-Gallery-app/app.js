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
	// container передаємо всі елементи виклику, далі - накладаємо обробник подій
	this.conatiner = element

	//console.log(element);  // при виборі створили відповідну секцію, відповідно і div
	this.list = [...element.querySelectorAll('.img')]  // створили nodelist через spread-оператор
	// target
	this.modal = getElement('.modal')
	this.moddalImg = getElement('.img')
	this.modalImages = getElement('.modal-images')
	this.closeBtn = getElement('.close-btn')
	this.nextBtn = getElement('.next-btn')
	this.prevBtn = getElement('.prev-btn')
// bind functions
// через protorype передаємо Gallery callBack - функцію - openModal
	this.openModal = this.openModal.bind(this) // bind -прив'язуємо до openModal контекст Gallery, відповідно можемо працювати з всіма його властивостями і маніпулювати ними. Без bind - можна викликати лише node - структуру html
	this.conatiner.addEventListener('click', 
		function(e){  // callBack відкриває всю категорію
			console.log(this);
			this.openModal()
		}.bind(this)) // bind прив'язує openModal до this- всіх властивостей Gallery, а не до container, Який відповідає за загальний перелік, в такому випадку можна відкрити окреме зображення
		
}

// додаємо до прототипу Gallery властивість openModal, яка є функцією, яка видає зараз певне повідомлення- зміст контексту
Gallery.prototype.openModal = function(){
	//console.log(this);
	console.log('open modal');
	// створюючи class - open, при виборі збраження , ми закриваємо всі вікна темним фоном, як прописано в стилях     .open
	this.modal.classList.add('open')
}

// при виборі, створені класи піднімаються на перевірку - function getElement в аргумент- selection. 
// далі- привласн. змінній element і проходять перевірку. 
// якщо - ок, повертається готовий елемент, якщо ні - зкидається і зупиняється вибір з повідомленням
const nature= new Gallery(getElement('.nature'))
const city= new Gallery(getElement('.city'))










































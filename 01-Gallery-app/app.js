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
	//console.log(element);  // при виборі створили відповідну секцію, відповідно і div
	this.list = [...element.querySelectorAll('.img')]  // створили nodelist через spread-оператор
	console.log(this.list);  
}
// при виборі, створені класи піднімаються на перевірку - function getElement в аргумент- selection. 
// далі- привласн. змінній element і проходять перевірку. 
// якщо - ок, повертається готовий елемент, якщо ні - зкидається і зупиняється вибір з повідомленням
const nature= new Gallery(getElement('.nature'))
const city= new Gallery(getElement('.city'))
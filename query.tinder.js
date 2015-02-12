//class Query
var MyQuery = function(){
	this.element;
	this.query = function(selector) {
	  this.element = document.querySelector(selector);
	  return this;
	};
	this.on = function(event, callback) {
	  this.element.addEventListener(event, callback);
	  return this;
	};
}

var Tinder = new MyQuery();
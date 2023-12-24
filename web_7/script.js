class Product {
  constructor(priceOption, quantity, souce, bag) {
      this.name = "";
      this.pricePerOne = "";
      this.quantity = parseFloat(quantity);
      this.souce = souce;
      this.bag = bag;

      if (this.quantity < 1) {
          throw new Error('Quantity cannot be less than 1');
      }
      if(Number.isInteger(this.quantity) === false) {
          throw new Error('Quantity should be a positive number');
      }

      let i=0;
      for(i; i<priceOption.length && priceOption[i]!==' '; i++) {
          this.name += priceOption[i];
      }
      i++;
      for(i; i<priceOption.length && priceOption[i]!==' ' && priceOption[i]!=='р'; i++) {
          this.pricePerOne += priceOption[i];
      }
      this.pricePerOne = parseFloat(this.pricePerOne);
  }

  getFinalPrice() {
      if(this.name==="Наполеон")
          return this.pricePerOne * this.quantity
      if(this.name==="Американо")
          return this.pricePerOne * this.quantity + this.bag;
      return this.pricePerOne * this.quantity + this.bag + this.souce;
  }
}

function onClick(event) {
  event.preventDefault();
  let productOption = document.querySelector("select[name=myselect] option:checked").text;
  let quantity = document.getElementById('quantity').value;

  let souce = Number(document.querySelector("input[name=myradio]:checked") ? document.querySelector("input[name=myradio]:checked").value : 0);

  let bag = document.querySelector("#mycheckbox input[type=checkbox]").checked ? Number(document.querySelector("#mycheckbox input[type=checkbox]").value) : 0;

  try {
      let product = new Product(productOption, quantity, Number(souce), Number(bag));
      document.getElementById('finalPrice').textContent = 'Итого: ' + product.getFinalPrice() + ' руб.';
  } catch (error) {
      console.error(error.message);
      alert(error.message);
  }
}

window.addEventListener('DOMContentLoaded', function (event) {
  let s = document.getElementsByName("myselect")[0];
  let c = document.querySelector("#mycheckbox input[type=checkbox]");
  document.getElementById('button').addEventListener('click', onClick);

  s.addEventListener("change", function (event) {
      let select = event.target;
      let radios = document.getElementById("myradios");
      console.log(select.value);

      if (select.value === "3") {
          radios.style.display = "none";
          c.parentNode.style.display = "none";
      } else if(select.value === "2") {
          radios.style.display = "none";
          c.parentNode.style.display = "block";
      }
      else {
          radios.style.display = "block";
          c.parentNode.style.display = "block";
      }
  });


});



$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		slidesToShow:3,
		autoplay:true,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 550,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
});

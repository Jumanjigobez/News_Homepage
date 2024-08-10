//Function to ease retrieval of DOM elements
const elem = (x) => {
  return document.querySelector(x);
};

//Mobile Menu Functionality
var menu_list = elem("ul.menu_list"),
  menu_btn = elem(".menu_btn");

const handleMenuToggle = () => {
  menu_btn.classList.toggle("active"); //Toggle the classname to active
  menu_list.classList.toggle("active");
};

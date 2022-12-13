const listUl = document.querySelector("#categories");
console.log("Number of categories: ", listUl.children.length);

const listLi = document.querySelectorAll(".item");

listLi.forEach(elem => {
  const category = elem.children[0].textContent;
  const elements = elem.children[1].children.length;
  console.log("");

  console.log("Category: ", category);
  console.log("Elements: ", elements);
})
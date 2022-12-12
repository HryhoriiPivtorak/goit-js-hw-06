const listUl = document.querySelector("#categories");
console.log("Number of categories: ", listUl.children.length);

const listLi = document.querySelectorAll(".item");

for (let i = 0; i < listUl.children.length; i += 1) {
  const category = listLi[i].children[0].textContent;
  const elements = listLi[i].children[1].children.length;

  console.log("");

  console.log("Category: ", category);
  console.log("Elements: ", elements);
}
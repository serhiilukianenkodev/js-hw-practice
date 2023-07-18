const categories = document.querySelector("#categories");
const categoriesItem = categories.querySelectorAll(".item");

console.log("categories item amount: ", categories.children.length);

categoriesItem.forEach((item) => {
  const itemHeading = item.querySelector("h2");
  const itemInnerList = item.querySelector("ul");
  //   console.log(itemInnerList);
  console.log("heading texContent: ", itemHeading.textContent);
  console.log("count of inner list items:", itemInnerList.children.length);
});
// console.log(categoriesItem);

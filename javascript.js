const selectBtn = document.querySelector(".class2"),
items = document.querySelectorAll(".item");

selectBtn.addEventListener("click", () => {
  selectBtn.classList.toggle("open");
});

items.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("checked");

    let checked = document.querySelectorAll(".checked"),
    btnText = document.querySelector(".class3");
    
    if(checked && checked.length > 0){
      btnText.innerText = `${checked.length} Selected`;
    }else{
      btnText.innerText = "Select your favourite City";

    }
  });
})
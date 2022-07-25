"use strict" 

const div = document.getElementById("root");
const books = [
    { 
      author: "Скотт Бэккер",
      name: "Тьма, что приходит прежде",
      price: 70 
    }, 
    {
     author: "Скотт Бэккер",
     name: "Воин-пророк",
    }, 
    { 
      name: "Тысячекратная мысль",
      price: 70
    }, 
    { 
      author: "Скотт Бэккер",
      name: "Нечестивый Консульт",
      price: 70
    }, 
    {
     author: "Дарья Донцова",
     name: "Детектив на диете",
     price: 40
    },
    {
     author: "Дарья Донцова",
     name: "Дед Снегур и Морозочка",
    }
  ];

console.log(books);

const ul = document.createElement("ul");
div.append(ul);

function render(obj){
  root.innerHTML += `<li>name: ${obj.name} ---
                      author: ${obj.author} ---
                      price: ${obj.price}</li>`
};

  let verificateArr = function(arr) {
    arr.forEach(el=>{
        try {
            if(!el.name){
              throw new Error(`Name is not found in ${el.name}`)
            };
            if(!el.author){
              throw new Error(`Author is not found in ${el.name}`)
            };
            if(!el.price){
              throw new Error(`Price is not found in ${el.name}`)
            };

            render(el);
        } catch (error) {
            console.log(error.message);
        }
    })
}

verificateArr(books)






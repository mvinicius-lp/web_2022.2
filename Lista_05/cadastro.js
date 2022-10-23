document.querySelector(".mes").addEventListener("change", () => {
  document.querySelector(".dias").addEventListener("change",() => {
    if(document.querySelector(".mes").value == 2 && document.querySelector(".dias").value == 29){
      $(".ano").empty()
      anobi() 
    }else {
      $(".ano").empty()
      ano()
    }
  })
  })
dias()

function dias(){
  for(let i = 1; i <= 31; i++){
      $('.dias').append($('<option>', {
          value: i,
          text: i
      }));
  }
}

// function anobi(){
//   for(let i = 1930; i <= 2004; i++){
//       if(i%4 === 0 && i%100 != 0){
//       $('.anos').append($('<option>', {
//           value: i,
//           text: i  
//       }))
//     }
//   }
// }anobi()

function ano(){
  for(let i = 1930; i <= 2004; i++){
      $('.anos').append($('<option>', {
          value: i,
          text: i
      }));
  }
}ano()
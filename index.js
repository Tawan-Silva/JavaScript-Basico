// // Sintaxe

// function primeiraFuncao() {

//   return new Promise((resolve) => {
//       setTimeout(() =>{
//         console.log("Sucess");
//         resolve()
//       }, 1000);
//   });

// }

// async function segundaFuncao() {
//   console.log("Iniciou");

//   await primeiraFuncao()

//   console.log("Terminou");
// }

// segundaFuncao()

function getUser(id) {
  return fetch(`http://regres.in/api/users?id=${id}`)
  .then(data => data.json())
  .catch(err => console.log(err))
}

async function showUserName(id) {
  const user = await getUser(id);

  console.log(`O nome do usuário é: ${user.data.fisrt_name}`);
}

showUserName(3)
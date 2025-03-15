const menuLis = document.querySelectorAll(`.divideCenter > ul > li`);

menuLis[0].addEventListener(`click`, () => {
    window.location.href = `/`;
})

menuLis[2].addEventListener(`click`, () => {
    window.location.href = `/profile`;
});

const urlfb = `https://tcc-animalfeeder-default-rtdb.firebaseio.com/racao/-NiRahEfqc4XxRXWA51s`;

let nAlimentacoes = document.querySelector("#nAlimentacoes");
let qtdRacao = document.querySelector("#qtdRacao");
let hh = document.querySelector("#hh");
let h0 = document.querySelector("#h0");
 const submit = document.querySelector("#send");
 const edit = document.querySelector("#edit");
 const apaga = document.querySelector("#delete");

const valJSON = () => {
    
};

addEventListener(
submit.addEventListener(`click`, () => {
   fetch(`${urlfb}`, {
       method: `PATCH`,
       body: JSON.stringify(valJSON())
   })                                                      // Busca
   .then(resp => resp.json())                              // converter para json
   .then(json => console.log(json))                        //imprimir dados no console
   .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros do catch
}));
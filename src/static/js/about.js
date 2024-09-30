const urlfb = `https://tcc-animalfeeder-default-rtdb.firebaseio.com/racao/-NiRahEfqc4XxRXWA51s`;
const menuLis = document.querySelectorAll(`.divideCenter > ul > li`);

menuLis[0].classList = `active`;

menuLis[1].addEventListener(`click`, () => {
    window.location.href = `dashboard`;
});
menuLis[2].addEventListener(`click`, () => {
    window.location.href = `profile`;
});

let nAlimentacoes = document.querySelector("#nAlimentacoes");
let qtdRacao = document.querySelector("#qtdRacao");
let hh = document.querySelector("#hh");
let h0 = document.querySelector("#h0");
 const submit = document.querySelector("#send");
 const edit = document.querySelector("#edit");
 const apaga = document.querySelector("#delete");

const valJSON = () => {
    const feedForDay = nAlimentacoes.value*=1;
    const valRacao = qtdRacao.value*=1.0;
    const horaFeeder = h0.value;
    const saltoHora = hh.value*=1;
    return {
        numeroAlimentacoes: feedForDay,
        quantidadeRacao: valRacao,
        horadeAlimentar: horaFeeder,
        intervaloFeeder: saltoHora
    }
};

submit.addEventListener(`click`, () => {
   fetch(`${urlfb}`, {
       method: `PATCH`,
       body: JSON.stringify(valJSON())
   })                                // Busca
   .then(resp => resp.json())  // converter para json
   .then(json => console.log(json))    //imprimir dados no console
   .catch(err => console.log('Erro de solicitação', err)); // lidar com os erros do catch
});
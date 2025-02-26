const btnLogin = document.querySelector(`#cad_res`);

btnLogin.addEventListener(`click`, () => {
    const formValue = document.querySelector(`form.menu_lr`);
    const user = document.querySelector(`#username`).value;
    const pass = document.querySelector(`div > input#password`).value;
    formValue.action = `/login/${user}/${pass}/`;
});
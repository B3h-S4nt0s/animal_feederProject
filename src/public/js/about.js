const menuLis = document.querySelectorAll(`.divideCenter > ul > li`);

menuLis[1].addEventListener(`click`, () => {
    window.location.href = `dashboard`;
});
menuLis[2].addEventListener(`click`, () => {
    window.location.href = `profile`;
});
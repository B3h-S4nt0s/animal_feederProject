const menuLis = document.querySelectorAll(`.divideCenter > ul > li`);

menuLis[1].addEventListener(`click`, () => {
    window.location.href = `dashboard`;
});
menuLis[0].addEventListener(`click`, () => {
    window.location.href = `about`;
});
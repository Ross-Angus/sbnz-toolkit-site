import closeAllTooltips from "../ring-tooltips/close-all-tooltips.js";

const handleClick = element => {
  const string = element.getAttribute('data-js');

  // This is a hash link which needs to toggle the remote element
  // and do a bunch of other stuff on the Economy Society Biosphere diagram
  if (string === "toggle-action") {
    const id = element.getAttribute('href').split('#')[1];
    if (!id) return;
    const targetElement = document.getElementById(id);
    if (!targetElement) return;
    const actionParent = element.closest('[data-js="ring-tooltips"]');
    if (!actionParent) return;
    actionParent.classList.add('open');
    closeAllTooltips(actionParent);
    targetElement.classList.remove('hidden');
  }
  // The user wants to close an open panel
  else if (string === "close-action") {
    const actionParent = element.closest('[data-js="ring-tooltips"]');
    actionParent.classList.remove('open');
    closeAllTooltips(actionParent);
  }
};

const clickTriage = () => {
  // Capturing clicks on stuff
  document.body.addEventListener("click", ({target}) => {
    const el = target.closest('[data-js]');
    el !== null && handleClick(el);
    return false;
  });
};

export default clickTriage;

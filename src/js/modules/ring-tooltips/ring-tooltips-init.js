const ringTooltipsInit = className => {
  const elements = document.querySelectorAll(`.${className}`);
  elements.forEach(element => {
    const listItems = element.querySelectorAll('li');
    listItems.forEach((listItem, index) => {
      // If it's not the initial three list items
      if (index > 2) {
        listItem.classList.add('hidden');
        // Add in the close button
        listItem.insertAdjacentHTML('afterbegin', '<p class="text-end"><button data-js="close-action" type="button" class="btn btn-secondary btn-sm" aria-label="Close this panel" title="Close this panel">&times;</button></p>')
      }
    });
  });
};

export default ringTooltipsInit;

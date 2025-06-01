// This is for hiding the action panels for the action diagram
const closeAllTooltips = parent => {
  const targetSiblings = parent.querySelectorAll('li');
  targetSiblings.forEach((sibling, index) => {
    index > 2 && sibling.classList.add('hidden');
  });
};

export default closeAllTooltips;

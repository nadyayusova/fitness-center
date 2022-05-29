const tabsLabels = document.querySelectorAll('.tab-headers a');
const tabsContent = document.querySelectorAll('.tab-content');

tabsLabels.forEach(function (tab, i) {
  tab.addEventListener('click', function (evt) {
    evt.preventDefault();
    hideTabs();
    // console.log(evt.target);
    evt.target.classList.add('is-active');
    tabsContent[i].classList.add('is-active');
  });
});

function hideTabs() {
  tabsLabels.forEach((item) => {
    item.classList.remove('is-active');
  });
  tabsContent.forEach((item) => {
    item.classList.remove('is-active');
  });
}

function extractAnchor(link) {
  const href = link.href;
  const anchor = href.match(/#[^/]+/)[0];
  return anchor;
}

function findActiveAnchor() {
  const activeTabLink = document.querySelector('.tab-headers a.is-active');
  return extractAnchor(activeTabLink);
}

function hideInactiveContent() {
  const anchor = findActiveAnchor();
  const inactiveTabs = document.querySelectorAll(`.tab-content:not(${anchor})`);
  inactiveTabs.forEach((item) => {
    item.classList.remove('is-active');
  });
}


const initTabs = function () {
  // сделать первый ярлычок активным и показать контент только для активной вкладки
  tabsLabels[0].classList.add('is-active');
  findActiveAnchor();
  hideInactiveContent();
};

export {initTabs};

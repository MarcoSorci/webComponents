function replaceSelected(user) {
    const selectedContainer = document.getElementById('selected-user');
    selectedContainer.innerHTML = '';
    const pippoTag = document.createElement('pippo-tag');
    pippoTag.setAttribute('pippo-user', JSON.stringify(user));
    document.selectedContainer.appendChild(pippoTag);
}

document.addEventListener('user-selected', (e) => replaceSelected(e.detail));
const users = [
    { name: 'sdsadasds', mail: 'sdospds@sdsds.sd' },
    { name: 'dsds', mail: 'fgfhbnbn@yjtjyj.vd' },
    { name: 'vcbvbc', mail: 'ereree@aweae.ed' },
    { name: 'dererr', mail: 'nbvnbbvn@jhkhjkhj.pp' },
];

document.getElementById('main-title').setAttribute('user-count', `${users.length}`);

users.forEach((user) => {
    const pippoTag = document.createElement('pippo-tag');
    pippoTag.setAttribute('pippo-user', JSON.stringify(user));
    pippoTag.setAttribute('has-button', '');
    document.body.appendChild(pippoTag);
});

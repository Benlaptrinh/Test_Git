document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crud-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const itemText = itemInput.value.trim();
        if (itemText) {
            addItem(itemText);
            itemInput.value = '';
        }
    });

    function addItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => li.remove());

        li.appendChild(deleteBtn);
        itemList.appendChild(li);
    }
});

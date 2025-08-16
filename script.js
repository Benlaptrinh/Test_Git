document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('crud-form');
    const itemInput = document.getElementById('item-input');
    const itemList = document.getElementById('item-list');
    let editMode = null; // Track the item being edited

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const itemText = itemInput.value.trim();

        if (itemText) {
            if (editMode) {
                // Update the existing item
                editMode.textContent = itemText;
                editMode.appendChild(createEditButton(editMode));
                editMode.appendChild(createDeleteButton(editMode));
                editMode = null;
                form.querySelector('button').textContent = 'Add';
            } else {
                // Add a new item
                addItem(itemText);
            }
            itemInput.value = '';
        }
    });

    function addItem(text) {
        const li = document.createElement('li');
        li.textContent = text;

        li.appendChild(createEditButton(li));
        li.appendChild(createDeleteButton(li));
        itemList.appendChild(li);
    }

    function createEditButton(item) {
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            itemInput.value = item.firstChild.textContent;
            editMode = item;
            form.querySelector('button').textContent = 'Update';
        });
        return editBtn;
    }

    function createDeleteButton(item) {
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => item.remove());
        return deleteBtn;
    }
});

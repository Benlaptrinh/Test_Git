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
<<<<<<< HEAD
    function addItem(text) {
        const li = document.createElement('li');

        // Tạo checkbox để đánh dấu hoàn thành
        const cb = document.createElement('input');
        cb.type = 'checkbox';

        // Tạo span chứa nội dung item
        const span = document.createElement('span');
        span.textContent = text;

        // Khi checkbox thay đổi -> toggle class 'done'
        cb.addEventListener('change', () => {
            li.classList.toggle('done', cb.checked);
        });

        li.appendChild(cb);
        li.appendChild(span);

        // Thêm nút Edit và Delete như cũ
=======

    function addItem(text) {
        const li = document.createElement('li');

        // span chứa text để dễ sửa
        const span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);

        // thêm nút Edit & Delete
>>>>>>> c9eb1c9 (refactor: restructure addItem and edit button)
        li.appendChild(createEditButton(li));
        li.appendChild(createDeleteButton(li));

        itemList.appendChild(li);
    }

<<<<<<< HEAD
=======
    function createEditButton(item) {
        const editBtn = document.createElement('button');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', () => {
            const span = item.querySelector('span');
            if (span) {
                itemInput.value = span.textContent;   // đưa text vào input
                editMode = item;                      // bật chế độ edit
                form.querySelector('button').textContent = 'Update';
            }
        });
        return editBtn;
    }

    function createDeleteButton(item) {
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', () => {
            item.remove();
        });
        return deleteBtn;
    }

>>>>>>> c9eb1c9 (refactor: restructure addItem and edit button)
});

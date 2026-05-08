const tableBody = document.getElementById('tableBody');
const totalPrice = document.getElementById('totalPrice');
const topTotal = document.getElementById('topTotal');
const count = document.getElementById('count');

let items = [];

function renderTable() {

    tableBody.innerHTML = '';

    if (items.length === 0) {

        tableBody.innerHTML = `
            <tr>
                <td colspan="4" class="empty">
                    لا توجد بيانات حالياً
                </td>
            </tr>
        `;

    } else {

        items.forEach((item, index) => {

            tableBody.innerHTML += `
                <tr>
                    <td>${index + 1}</td>

                    <td>${item.name}</td>

                    <td class="price">
                        ${item.price} ر.س
                    </td>

                    <td>
                        <button class="delete-btn"
                            onclick="deleteItem(${index})">
                            حذف
                        </button>
                    </td>
                </tr>
            `;

        });

    }

    updateTotals();
}

function addItem() {

    const itemName =
        document.getElementById('itemName').value.trim();

    const itemPrice =
        document.getElementById('itemPrice').value;

    if (!itemName || !itemPrice) {

        alert('يرجى إدخال جميع البيانات');
        return;
    }

    items.push({
        name: itemName,
        price: Number(itemPrice)
    });

    document.getElementById('itemName').value = '';
    document.getElementById('itemPrice').value = '';

    renderTable();
}

function deleteItem(index) {

    items.splice(index, 1);

    renderTable();
}

function updateTotals() {

    const total = items.reduce(
        (sum, item) => sum + item.price,
        0
    );

    totalPrice.textContent = `${total} ر.س`;

    topTotal.textContent = `${total} ر.س`;

    count.textContent = items.length;
}
// مصفوفة المصاريف
let expenses = [];

// تحميل البيانات من LocalStorage عند فتح الصفحة
window.onload = function() {
    const saved = localStorage.getItem("expenses");
    if (saved) {
        expenses = JSON.parse(saved);
        renderTable();
        updateTotal();
    }
};

const descInput = document.getElementById("desc");
const amountInput = document.getElementById("amount");
const addBtn = document.getElementById("addBtn");
const tableBody = document.getElementById("expenseTableBody");
const totalSpan = document.getElementById("totalAmount");

// حدث زر الإضافة
addBtn.addEventListener("click", function() {
    const desc = descInput.value.trim();
    const amount = Number(amountInput.value);

    if (desc === "" || isNaN(amount) || amount === 0) {
        alert("رجاءً أدخل وصف صحيح ومبلغ غير صفر");
        return;
    }

    const expense = {
        id: Date.now(),
        desc,
        amount
    };

    expenses.push(expense);
    saveToLocalStorage();
    renderTable();
    updateTotal();

    descInput.value = "";
    amountInput.value = "";
});

// حفظ في LocalStorage
function saveToLocalStorage() {
    localStorage.setItem("expenses", JSON.stringify(expenses));
}

// عرض الجدول
function renderTable() {
    tableBody.innerHTML = "";

    expenses.forEach((exp) => {
        const tr = document.createElement("tr");

        const tdDesc = document.createElement("td");
        tdDesc.textContent = exp.desc;

        const tdAmount = document.createElement("td");
        tdAmount.textContent = exp.amount;

        const tdDelete = document.createElement("td");
        const btn = document.createElement("button");
        btn.textContent = "حذف";
        btn.className = "delete-btn";
        btn.onclick = function() {
            deleteExpense(exp.id);
        };
        tdDelete.appendChild(btn);

        tr.appendChild(tdDesc);
        tr.appendChild(tdAmount);
        tr.appendChild(tdDelete);

        tableBody.appendChild(tr);
    });
}

// حذف مصروف
function deleteExpense(id) {
    expenses = expenses.filter((exp) => exp.id !== id);
    saveToLocalStorage();
    renderTable();
    updateTotal();
}

// حساب الإجمالي
function updateTotal() {
    const total = expenses.reduce((sum, exp) => sum + exp.amount, 0);
    totalSpan.textContent = total;
}
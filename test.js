// Test 1: اسم المنتج ما يكون فاضي
function testEmptyName() {
    const name = "";
    return name.trim() !== "";
}

// Test 2: السعر ما يكون فاضي
function testEmptyPrice() {
    const price = "";
    return price !== "";
}

// Test 3: السعر ما يكون سالب
function testNegativePrice() {
    const price = -5;
    return price >= 0;
}

// Test 4: السعر رقم صحيح
function testValidNumber() {
    const price = "abc";
    return !isNaN(price);
}

// Test 5: إضافة عنصر تزيد العدد
function testAddItem() {
    let count = 0;
    count++;
    return count === 1;
}

// Test 6: حساب الإجمالي صحيح
function testTotal() {
    const prices = [10, 20, 30];
    const total = prices.reduce((a, b) => a + b, 0);
    return total === 60;
}

// تشغيل الاختبارات
console.log("Test Empty Name:", testEmptyName());
console.log("Test Empty Price:", testEmptyPrice());
console.log("Test Negative Price:", testNegativePrice());
console.log("Test Valid Number:", testValidNumber());
console.log("Test Add Item:", testAddItem());
console.log("Test Total:", testTotal());
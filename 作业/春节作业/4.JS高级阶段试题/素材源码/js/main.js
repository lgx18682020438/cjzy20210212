// 商品数据。
var phoneList = [
    {
        id: 0,
        name: 'iPhone XS Max',
        price: 9199
    },
    {
        id: 1,
        name: '小米 CC9',
        price: 2599
    },
    {
        id: 2,
        name: '魅族 16s',
        price: 1699
    },
    {
        id: 3,
        name: '三星 Galaxy S10+',
        price: 10989
    },
    {
        id: 4,
        name: '华为 P30 Pro',
        price: 5988
    },
];

var tbody = document.querySelector('tbody');
var minPrice = document.querySelector('.price-min');
var maxPrice = document.querySelector('.price-max');
var priceFilterButton = document.querySelector('.price-filter-btn');
var phoneName = document.querySelector('.phone-name');
var nameSearchButton = document.querySelector('.name-search-btn')

setData(phoneList);

function setData(data) {
    tbody.innerHTML = '';
    data.forEach(function(phone) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + phone.id + '</td><td>' + phone.name + '</td><td>' + phone.price + '</td>';
        tbody.insertAdjacentElement('beforeend', tr);
    });
}

priceFilterButton.addEventListener('click', function() {
    // 自己去玩。
    alert('嘻嘻');
});

nameSearchButton.addEventListener('click', function() {
    // 自己去玩。
    alert('嘻嘻');
});

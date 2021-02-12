// 商品数据。
var phoneList = [{
        id: 0,
        name: 'iPhoneXSMax',
        price: 9199
    },
    {
        id: 1,
        name: '小米CC9',
        price: 2599
    },
    {
        id: 2,
        name: '魅族16s',
        price: 1699
    },
    {
        id: 3,
        name: '三星 GalaxyS10+',
        price: 10989
    },
    {
        id: 4,
        name: '华为 P30 Pro',
        price: 5988
    },
];

var newPhoneList = [];

var tbody = document.querySelector('tbody');
var minPrice = document.querySelector('.price-min');
var maxPrice = document.querySelector('.price-max');
var priceFilterButton = document.querySelector('.price-filter-btn');
var phoneName = document.querySelector('.phone-name');
var nameSearchButton = document.querySelector('.name-search-btn');

// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.querySelector('.chart'));

setData(phoneList);

function setData(data) {
    tbody.innerHTML = '';
    let xAxisData = [];
    let seriesData = [];
    data.forEach(function (phone) {
        var tr = document.createElement('tr');
        tr.innerHTML = '<td>' + phone.id + '</td><td>' + phone.name + '</td><td>' + phone.price + '</td>';
        tbody.insertAdjacentElement('beforeend', tr);
        xAxisData.push(phone.name);
        seriesData.push(phone.price);
    });

    // 初始化图表
    // 指定图表的配置项和数据
    var option = {
        xAxis: {
            type: 'category',
            data: xAxisData
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: seriesData,
            type: 'bar',
            showBackground: true
        }],
        color : '#5470c6'
       
    };

    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
}


priceFilterButton.addEventListener('click', function () {
    e();

});

nameSearchButton.addEventListener('click', function () {
    e();
});


function e() {
    newPhoneList = phoneList;
    let minPriceL = minPrice.value;
    let maxPriceL = maxPrice.value;
    let phoneNameL = phoneName.value;

    if (minPriceL != '' && maxPriceL != '')
        newPhoneList = newPhoneList.filter(v => v.price > parseInt(minPriceL) && v.price < parseInt(maxPriceL));
    else if (minPriceL != '')
        newPhoneList = newPhoneList.filter(v => v.price > parseInt(minPriceL));
    else if (maxPriceL != '')
        newPhoneList = newPhoneList.filter(v => v.price < parseInt(maxPriceL));

    if (phoneNameL != '')
        newPhoneList = newPhoneList.filter(v => v.name.indexOf(phoneNameL) != -1);

    setData(newPhoneList);


}
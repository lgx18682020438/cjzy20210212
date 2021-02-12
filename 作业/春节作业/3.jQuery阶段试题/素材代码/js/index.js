$(function () {

    // 点击添加按钮
    $('.button-add').click(function () {
        $('.add-modal').modal('show');
    });

    // 模式窗口添加内容
    $('.button-user-add').click(function () {

        let uname = $('#uname').val().trim();
        let tel = $('#tel').val().trim();

        // 判断输入框
        if (uname == '' || tel == '') return alert('请输入姓名和电话');

        // 生成随机码
        let id = randomNum(1000,9999);
        // 获取到缓存数据
        let users = getUsers();

        users.push({id,uname,tel});
        setUsers(users);

        $('#uname').val("");
        $('#tel').val("");
        $('.add-modal').modal('hide');
    });
  


    // 获取localStorage 缓存的数据
    let getUsers = () => JSON.parse(localStorage.getItem('users'));

    // 设置localStorage 缓存的数据
    let setUsers = users => localStorage.setItem("users",JSON.stringify(users));

    // 生成随机数
    let randomNum = (minNum, maxNum) => parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);


});
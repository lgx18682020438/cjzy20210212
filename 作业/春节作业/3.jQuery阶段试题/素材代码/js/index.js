$(function () {

    // 获取localStorage 缓存的数据
    let getUsers = () => JSON.parse(localStorage.getItem('users'));

    // 设置localStorage 缓存的数据
    let setUsers = users => localStorage.setItem("users", JSON.stringify(users));

    // 生成随机数
    let randomNum = (minNum, maxNum) => parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10);

    // 数据渲染
    let setTible = () => {
        let arr = [];
        let newArr = userArr;
        let textboxSearch = $('.textbox-search').val();

        if (textboxSearch) newArr = newArr.filter(v => v.tel.indexOf(textboxSearch) != -1);

        newArr.forEach(v => {
            arr.push(`<tr>
                        <th scope="col">${v.id}</th>
                        <th scope="col">${v.uname}</th>
                        <th scope="col">${v.tel}</th>
                        <th scope="col">正常？</th>
                        <th scope="col">
                        <div class="btn-group btn-group-sm" role="group" aria-label="...">
                                <button type="button" class="btn btn-default" id="option" data-index="${v.id}" style="border-color: royalblue; color: royalblue; border: 1px solid royalblue;">操作</button>
                                <button type="button" class="btn btn-default" id="delete" data-index="${v.id}" style="border-color: red; color: red; border: 1px solid red;">删除</button>
                            </div>
                        </th>
                     </tr>`);
        });

        $('.table tbody').html(arr.join(""));
    }

    /* 全局变量 */
    let userArr = getUsers();

    // 渲染数据
    setTible();

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
        let id = randomNum(1000, 9999);

        userArr.push({
            id,
            uname,
            tel
        });
        setUsers(userArr);

        setTible();
        $('#uname').val("");
        $('#tel').val("");
        $('.add-modal').modal('hide');
    });

    // 删除按钮
    $('.table tbody').on('click', '#delete', function () {
        if (confirm('是否要删除？')) {
            userArr = userArr.filter(v => v.id != $(this).attr('data-index'));
            setUsers(userArr);
            setTible();
        }
    });
    let index = -1;
    // 修改按钮
    $('.table tbody').on('click', '#option', function () {
        index = -1;
        // 获取下标
        for (let i = 0; i < userArr.length; i++) {
            if (userArr[i].id == $(this).attr('data-index')) {
                index = i;
                break;
            }
        }
        if (index != -1) {
            $('.modal-title').text('修改用户 - ' + userArr[index].uname);
            $('#uname1').val(userArr[index].uname);
            $('#tel1').val(userArr[index].tel);
            $('.edit-modal').modal('show');
        }
    });

    // 保存按钮
    $('.button-user-save').click(function () {
        userArr[index].uname = $('#uname1').val();
        userArr[index].tel = $('#tel1').val();
        setUsers(userArr);
        setTible();
        $('#uname1').val('');
        $('#tel1').val('');
        $('.edit-modal').modal('hide');
    });


    // 搜索按钮
    $('.button-search').click(function () {
        setTible();
    });


});
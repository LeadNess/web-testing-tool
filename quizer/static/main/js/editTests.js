function getDivElement(i, tests) {
    const container = document.createElement('div');

    const hr = document.createElement('hr');
    hr.className = "my-4";

    const label = document.createElement('label');
    label.htmlFor = "test_name";

    const test_name_h3 = document.createElement('h3');
    test_name_h3.innerHTML = `${tests[i].name}`;

    const description_p = document.createElement('p');
    description_p.innerHTML = `${tests[i].description}`;

    const info_p = document.createElement('p');
    info_p.innerHTML = `<img src='/static/main/images/subject.svg'> Предмет: ${tests[i].subject.name }<br>
    <img src='/static/main/images/research.svg'> Количество заданий в тесте: ${tests[i].tasks_num}<br>
    <img src='/static/main/images/clock.svg'> Время на выполнение: ${tests[i].duration} с<br>
    <img src='/static/main/images/database.svg'> Вопросов к тесту: ${tests[i].questions_num}`;

    const btn_cont_1 = document.createElement('div');
    btn_cont_1.className = "btn-group mr-2";

    const btn_cont_2 = document.createElement('div');
    btn_cont_2.className = "btn-group mr-2";

    const btn_cont_3 = document.createElement('div');
    btn_cont_3.className = "btn-group mr-2";

    const edit_btn = document.createElement('button');
    edit_btn.className = "btn btn-primary";
    edit_btn.innerHTML = "<img src='/static/main/images/edit.svg'> Редактировать";
    edit_btn.id = `test_name_${tests[i].name}`;
    edit_btn.name = `test_name_${tests[i].id}`;
    edit_btn.value = "edit_test_btn";

    const add_qstn_btn = document.createElement('button');
    add_qstn_btn.className = "btn btn-success";
    add_qstn_btn.innerHTML = "<img src='/static/main/images/add.svg'> Добавить вопрос";
    add_qstn_btn.id = `test_name_${tests[i].name}`;
    add_qstn_btn.name = `test_name_${tests[i].id}`;
    add_qstn_btn.value = "add_qstn_btn";

    const load_qstn_btn = document.createElement('button');
    load_qstn_btn.className = "btn btn-success";
    load_qstn_btn.innerHTML = "<img src='/static/main/images/download.svg'> Загрузить вопросы";
    load_qstn_btn.id = `test_name_${tests[i].name}`;
    load_qstn_btn.name = `test_name_${tests[i].id}`;
    load_qstn_btn.value = "load_qstn_btn";

    const del_qstn_btn = document.createElement('button');
    del_qstn_btn.className = "btn btn-danger";
    del_qstn_btn.innerHTML = "<img src='/static/main/images/delete.svg'> Удалить вопросы";
    del_qstn_btn.id = `test_name_${tests[i].name}`;
    del_qstn_btn.name = `test_name_${tests[i].id}`;
    del_qstn_btn.value = "del_qstn_btn";

    const del_test_btn = document.createElement('button');
    del_test_btn.className = "btn btn-danger";
    del_test_btn.innerHTML = "<img src='/static/main/images/delete.svg'> Удалить тест";
    del_test_btn.id = `test_name_${tests[i].name}`;
    del_test_btn.name = `test_name_${tests[i].id}`;
    del_test_btn.value = "del_test_btn";

    btn_cont_1.appendChild(edit_btn);

    btn_cont_2.appendChild(add_qstn_btn);
    btn_cont_2.appendChild(load_qstn_btn);

    btn_cont_3.appendChild(del_qstn_btn);
    btn_cont_3.appendChild(del_test_btn);

    label.appendChild(test_name_h3);
    label.appendChild(description_p);
    label.appendChild(info_p);
    label.appendChild(btn_cont_1);
    label.appendChild(btn_cont_2);
    label.appendChild(btn_cont_3);

    container.appendChild(hr);
    container.appendChild(label);

    return container;
}

function main(testsJson) {
    const tests = JSON.parse(testsJson.replace(/&quot;/gi, '"'));
    const tests_count = parseInt(tests.length);
    const tests_container = document.getElementById("tests_container");

    const subject = document.getElementById("subject");
    const name_filter = document.getElementById("name_filter");

    for (let i = 0; i < tests_count; ++i) {
        if (tests[i].subject.name == subject.options[0].text) {
            tests_container.appendChild(getDivElement(i, tests));
        }
    }

    subject.onkeyup = subject.onchange = () =>  {
        tests_container.innerHTML = '';
        for (let i = 0; i < tests_count; ++i) {
            if (tests[i].name.includes(name_filter.value)) {
                if (tests[i].subject.name == subject.options[subject.selectedIndex].text) {
                    tests_container.appendChild(getDivElement(i, tests));
                }
            }
        }
    };

    name_filter.onkeyup = name_filter.onchange = () =>  {
        tests_container.innerHTML = '';
        for (let i = 0; i < tests_count; ++i) {
            if (tests[i].name.includes(name_filter.value)) {
                if (tests[i].subject.name == subject.options[subject.selectedIndex].text) {
                    tests_container.appendChild(getDivElement(i, tests));
                }
            }
        }
    };
}

const finance_group = [
    {
        "key": "income",
        "title": "درآمــــــــــــــــــد",
        "display_order": "1"
    },
    {
        "key": "considerations",
        "title": "ملاحظـــــــــــــــــات",
        "display_order": "3"
    },
    {
        "key": "deduction",
        "title": "کســــــــــــــــــورات",
        "display_order": "2"
    }

];

const personArray = [
    {
        personelCode: "881416",
        personal_info: [
            {
                "key": "شماره پرسنلی : ",
                "value": "881416",
                "display_order": "1",
                "group_key": "person_Info"
            },
            {
                "key": "نام و نام خانودگی : ",
                "value": "امیرحسین فهیمی",
                "display_order": "2",
                "group_key": "person_Info"
            },
            {
                "key": "محل اشتغال : ",
                "value": "مدیریت سیستم های اطلاعاتی",
                "display_order": "3",
                "group_key": "person_Info"
            },
            {
                "key": "ماه / سال : ",
                "value": "فروردین 1400",
                "display_order": "4",
                "group_key": "person_Info"
            },
            {
                "key": "شهر خدمت : ",
                "value": "تهران",
                "display_order": "5",
                "group_key": "more_Info"
            },
            {
                "key": "بانک عامل : ",
                "value": "سامان",
                "display_order": "6",
                "group_key": "more_Info"
            },
            {
                "key": "شماره حساب : ",
                "value": "832-888-927461-1",
                "display_order": "7",
                "group_key": "more_Info"
            }
        ],
        salary_details: [
            {
                title: "مانده وام رفاه",
                count: "",
                amount: "400000",
                display_order: 3,
                group_key: "considerations"
            },
            {
                title: "مبلغ حقوق",
                count: "31",
                amount: "123456",
                display_order: 1,
                group_key: "income"
            },
            {
                title: "حق مسکن",
                count: "",
                amount: "789",
                display_order: 2,
                group_key: "income"
            },
            {
                title: "اولاد",
                count: "2",
                amount: "789",
                display_order: 3,
                group_key: "income"
            },
            {
                title: "حق بیمه",
                count: "",
                amount: "123456",
                display_order: 3,
                group_key: "deduction"
            }
        ],
    },
    {
        personelCode: "961081",
        personal_info: [
            {
                "key": "شماره پرسنلی : ",
                "value": "961081",
                "display_order": "1",
                "group_key": "person_Info"
            },
            {
                "key": "نام و نام خانودگی : ",
                "value": "بنفشه موسی ",
                "display_order": "2",
                "group_key": "person_Info"
            },
            {
                "key": "محل اشتغال : ",
                "value": "مدیریت سیستم های اطلاعاتی",
                "display_order": "3",
                "group_key": "person_Info"
            },
            {
                "key": "ماه / سال : ",
                "value": "فروردین 1400",
                "display_order": "4",
                "group_key": "person_Info"
            },
            {
                "key": "شهر خدمت : ",
                "value": "تهران",
                "display_order": "5",
                "group_key": "more_Info"
            },
            {
                "key": "بانک عامل : ",
                "value": "سامان",
                "display_order": "6",
                "group_key": "more_Info"
            },
            {
                "key": "شماره حساب : ",
                "value": "832-888-927481-1",
                "display_order": "7",
                "group_key": "more_Info"
            }
        ],
        salary_details: [
            {
                title: "مبلغ حقوق",
                count: "31",
                amount: "123456",
                display_order: 1,
                display_group: "درآمد",
                group_key: "income"
            },
            {
                title: "اولاد",
                count: "1",
                amount: "789",
                display_order: 2,
                display_group: "درآمد",
                group_key: "income"
            },
            {
                title: "مانده وام رفاه",
                count: "",
                amount: "789",
                display_order: 2,
                display_group: "توضیحات",
                group_key: "considerations"
            },
        ],
    },
    {
        personelCode: "971416",
        personal_info: [
            {
                "key": "شماره پرسنلی : ",
                "value": "971416",
                "display_order": "1",
                "group_key": "person_Info"
            },
            {
                "key": "نام و نام خانودگی : ",
                "value": "مهنا ",
                "display_order": "2",
                "group_key": "person_Info"
            },
            {
                "key": "محل اشتغال : ",
                "value": "مدیریت سیستم های اطلاعاتی",
                "display_order": "3",
                "group_key": "person_Info"
            },
            {
                "key": "ماه / سال : ",
                "value": "فروردین 1400",
                "display_order": "4",
                "group_key": "person_Info"
            },
            {
                "key": "شهر خدمت : ",
                "value": "تهران",
                "display_order": "5",
                "group_key": "more_Info"
            },
            {
                "key": "بانک عامل : ",
                "value": "ملی",
                "display_order": "6",
                "group_key": "more_Info"
            },
            {
                "key": "شماره حساب : ",
                "value": "032-264-225500-4",
                "display_order": "7",
                "group_key": "more_Info"
            }
        ],
        salary_details: [
            {
                title: "حقوق پایه وزارت کار",
                count: "31",
                amount: "123456",
                display_order: 1,
                display_group: "درآمد",
                group_key: "income"
            },
            {
                title: "حق اولاد اول",
                count: "1",
                amount: "789",
                display_order: 2,
                display_group: "کسورات",
                group_key: "deduction"
            },
            {
                title: "حق اولاد دوم",
                count: "1",
                amount: "789",
                display_order: 3,
                display_group: "توضیحات",
                group_key: "considerations"
            },
        ],
    },
];

const find_button = document.getElementById("btnFilter");
const entered_person_id = document.getElementById("user-Id-Input");
const main_section = document.querySelector('.main-section');

entered_person_id.focus();

function clear_doms() {
    overplus_doms = document.querySelectorAll(".main-section section");
    if (overplus_doms.length > 0) {
        for (i of overplus_doms) {
            i.remove();
        }
    }

    const alert_span = document.querySelector('.alert-span');
    alert_span !== null ?  alert_span.remove() : null;
}

function createElement(tag, text, className, width) {
    let element = document.createElement(tag);
    element.textContent = text;
    element.className = className;
    element.style.width = `${width}px`;
    return element;
}

entered_person_id.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        find_button.click();
    }
});

find_button.addEventListener("click", find_person_info);

function find_person_info() {
    clear_doms();

    
    const body = document.querySelector('body');

    const personel_objects = personArray.find(
        ({ personelCode }) => personelCode === entered_person_id.value);
    
    if (personel_objects !== undefined) {
        main_section.style.visibility = "visible";
        body.appendChild(main_section);
        const alert_span = document.querySelector('.alert-span');
        alert_span !== null ?  alert_span.remove() : null;
        

    } else {
        main_section.style.visibility = "hidden";
        main_section.remove();
        const alert_span = createElement('span','هیچ رکوردی یافت نشد','alert-span');
        body.appendChild(alert_span);
            
        return;
    }

    let main_section_width = main_section.offsetWidth;
    console.log(main_section_width);
    let ul_width = Math.round(main_section_width / finance_group.length);
    

    let total_income = 0;
    let total_deduction = 0;


    const header_section = createElement('section', '', 'header-section');
    main_section.appendChild(header_section);
    const right_ul = createElement('ul', '', 'header-section-right');
    header_section.appendChild(right_ul);
    const left_ul = createElement('ul', '', 'header-section-left');
    header_section.appendChild(left_ul);

    for (p_info of personel_objects.personal_info.sort((a, b) => (a.display_order > b.display_order ? 1 : -1))) {
        const li = createElement('li');
        p_info.group_key === 'person_Info' ? right_ul.appendChild(li) : left_ul.appendChild(li);

        const sp_key = createElement('span', p_info.key);
        li.appendChild(sp_key);

        const sp_value = createElement('span', p_info.value);
        li.appendChild(sp_value);
    }

    const finance_section = createElement('section', '', 'finance-box');
    main_section.appendChild(finance_section);

    for (group_item of finance_group.sort((a, b) => (a.display_order > b.display_order ? 1 : -1))) {

        const span_item = createElement('span', group_item.title, 'header-span');
        const ul_item = createElement('ul', '', 'finance-box_ul');

        const new_section = createElement('section', '', 'income');
        
        if (finance_group[finance_group.length - 1] === group_item) {
            new_section.style.borderLeft = 'none';
        }

        finance_section.appendChild(new_section);
        ul_item.appendChild(span_item);
        new_section.appendChild(ul_item);

        const total = { key: "", value: 0 };

        for (pers of personel_objects.salary_details
            .sort((a, b) => (a.display_order > b.display_order ? 1 : -1))) {

            if (pers.group_key === group_item.key) {

                total.value += parseInt(pers.amount);
                total.key = pers.group_key;

                const li_item = createElement('li', pers.title, 'finance-box_li');
                ul_item.appendChild(li_item);

                const sp_count = createElement('span', pers.count);
                li_item.appendChild(sp_count);

                const sp_amount = createElement('span', pers.amount);
                li_item.appendChild(sp_amount);
            }
        }

        const total_section = createElement('section', 'جمع:', 'total_section');
        new_section.appendChild(total_section);
        total.key === 'income' ? total_income = total.value : total.key === 'deduction' ? total_deduction = total.value : null;
        const test = createElement('span', total.value);
        total_section.appendChild(test);
    }

    const net_payable_section = createElement('section', '', 'sum');
    main_section.appendChild(net_payable_section)
    let net_payable = total_income - total_deduction;
    const sum_of_net_payable = createElement('span', `خالص پرداختی:  ${net_payable} ریال`);
    net_payable_section.appendChild(sum_of_net_payable);

    const payable = createElement('section', '', 'payable');
    main_section.appendChild(payable);
    const payable_span = createElement('span', `خالص پرداختی به حروف: ${Num2persian(net_payable)} ریال`);
    payable.appendChild(payable_span);
}
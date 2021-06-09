const finance_group = [
    {
        "key": "income",
        "title": "درآمد",
        "display_order": "1"
    }
    ,
    {
        "key": "considerations",
        "title": "ملاحظات",
        "display_order": "3"
    },
    {
        "key": "deduction",
        "title": "کسورات",
        "display_order": "2"
    }

];

const personArray = [
    {

        personal_info: [
            {
                "key": "شماره پرسنلی",
                "value": "881416",
                "display_order": "1"
            },
            {
                "key": "نام و نام خانودگی",
                "value": "امیرحسین فهیمی",
                "display_order": "2"
            },
            {
                "key": "محل اشتغال",
                "value": "مدیریت سیستم های اطلاعاتی",
                "display_order": "3"
            },
            {
                "key": "شهر خدمت",
                "value": "تهران",
                "display_order": "4"
            }
        ],
        personelCode: "881416",
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

let p = null;
const finance_section = document.getElementById("finance-box");
const find_button = document.getElementById("btnFilter");
const entered_person_id = document.getElementById("user-Id-Input");
entered_person_id.focus();

function clear_doms() {
    overplus_doms = document.querySelectorAll(".finance-box section");
    if (overplus_doms.length > 0) {
        for (i of overplus_doms) {
            i.remove();
        }
    }
}

function createElement(tag, text, className, width) {
    let element = document.createElement(tag);
    element.textContent = text;
    element.className = className;
    element.style.width = `${width}vh`;
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

    const personel_objects = personArray.find(
        ({ personelCode }) => personelCode === entered_person_id.value);

    let ul_width = Math.round(150 / finance_group.length);

    let total_income = 0;
    let total_deduction = 0;

    const person_info = personel_objects.personal_info.sort((a, b) => (a.display_order > b.display_order ? 1 : -1));
    const header_section = document.querySelector('.header-section');
    for (p_info of person_info) {
        const li = createElement('li');
        header_section.appendChild(li);

        const sp_key = createElement('span', p_info.key);
        li.appendChild(sp_key);

        const sp_value = createElement('span', p_info.value);
        li.appendChild(sp_value);
    }

    for (group_item of finance_group.sort((a, b) => (a.display_order > b.display_order ? 1 : -1))) {

        const span_item = createElement('span', group_item.title, 'header-span');
        const ul_item = createElement('ul', '', 'finance-box_ul');

        const new_section = createElement('section', '', 'income', ul_width);
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

    let net_payable = total_income - total_deduction;
    const net_payable_section = document.querySelector('.sum');
    const sum_of_net_payable = createElement('span', `خالص پرداختی:  ${net_payable} ریال`);
    net_payable_section.appendChild(sum_of_net_payable);

    const payable = document.getElementById("payable");
    const payable_span = createElement('span', Num2persian(net_payable));
    payable.appendChild(payable_span);


}
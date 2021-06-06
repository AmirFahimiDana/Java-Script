
const personArray = [
    {
        personelCode: "881416",
        salary_details: [
            {
                title: "مبلغ حقوق",
                count: "31",
                amount: "123456",
                display_order: 1,
                display_group: "درآمد",
            },
            {
                title: "حق مسکن",
                count: "0",
                amount: "789",
                display_order: 2,
                display_group: "درآمد",
            },
            {
                title: "اولاد",
                count: "2",
                amount: "789",
                display_order: 3,
                display_group: "درآمد",
            },
            {
                title: "حق بیمه",
                count: "0",
                amount: "123456",
                display_order: 3,
                display_group: "کسورات",
            },
            {
                title: "مانده وام رفاه",
                count: "0",
                amount: "400000",
                display_order: 3,
                display_group: "ملاحظات",
            },
        ],
    },
    {
        personelCode: "961081",
        salary_details: [
            {
                title: "مبلغ حقوق",
                amount: "123456",
                count: "-",
                display_order: 1,
                display_group: "درآمد",
            },
            {
                title: "اولاد",
                amount: "789",
                count: "1",
                display_order: 2,
                display_group: "درآمد",
            },
            {
                title: "مانده وام رفاه",
                amount: "789",
                count: "-",
                display_order: 2,
                display_group: "توضیحات",
            },
        ],
    },
    {
        personelCode: "971416",
        salary_details: [
            {
                title: "حقوق پایه وزارت کار",
                amount: "123456",
                count: "-",
                display_order: 1,
                display_group: "درآمد",
            },
            {
                title: "حق اولاد اول",
                amount: "789",
                count: "-",
                display_order: 2,
                display_group: "کسورات",
            },
            {
                title: "حق اولاد دوم",
                amount: "789",
                count: "-",
                display_order: 3,
                display_group: "توضیحات",
            },
        ],
    },
];

let p = null;
let uniqe_groups = [];
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

    console.log(Num2persian(2345678));

    //let main_section = document.querySelector('.main-section');
    //let main_section_width = main_section.clientWidth;
    let group_array = [];
    let uniqe_groups;

    for (p of personArray) {
        if (p.personelCode === entered_person_id.value) {
            for (s of p.salary_details) {
                group_array.push(s.display_group);
            }
            uniqe_groups = [...new Set(group_array)];
            //console.log(p);
            break;
        }
    }

    const personel_objects = personArray.find(
        ({ personelCode }) => personelCode === entered_person_id.value);

    console.log(personel_objects);

    //let ul_width = Math.round(main_section_width / uniqe_groups.length);
    let ul_width = Math.round(150 / uniqe_groups.length);
    const total = { total_income: 0, total_deduction: 0 };

    for (group_item of uniqe_groups) {

        const span_item = createElement('span', group_item, 'header-span');
        const ul_item = createElement('ul', '', 'finance-box_ul');

        const new_section = createElement('section', '', 'income', ul_width);
        if (uniqe_groups[uniqe_groups.length - 1] === group_item) {
            new_section.style.borderLeft = 'none';
        }

        finance_section.appendChild(new_section);
        new_section.appendChild(span_item);
        new_section.appendChild(ul_item);


        for (pers of personel_objects.salary_details
            .sort((a, b) => (a.display_order > b.display_order ? 1 : -1))) {

            if (pers.display_group === group_item) {

                if (pers.display_group === 'درآمد') {
                    total.total_income += parseInt(pers.amount);
                }
                
                console.log(total.total_income);

                const li_item = createElement('li', pers.title, 'finance-box_li');
                ul_item.appendChild(li_item);
                
                for (p in pers) {
                    if (p === 'display_order' || p === 'display_group' || p === 'title') {
                        continue;
                    }

                    const sp = createElement('span', pers[p]);
                    li_item.appendChild(sp);
                }
                
            }
        }

    }
    const sum_of_sallary = document.querySelector('.sum-of-sallary');
    const sum_of_sallary_span = createElement('span', total.total_income);
    sum_of_sallary.appendChild(sum_of_sallary_span);
    
    
    
}
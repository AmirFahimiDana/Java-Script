
// const userInput = document.querySelector('input');
const personArray = [
    {
        personelCode: '881416',
        salary_details: [
            {
                title: 'مبلغ حقوق',
                amount: '123456',
                display_order: 1,
                display_group: 'درآمد'
            },
            {
                title: 'حق مسکن',
                amount: '789',
                display_order: 2,
                display_group: 'درآمد'
            }
        ]
    },
    {
        personelCode: '961081',
        salary_details: [
            {
                title: 'مبلغ حقوق',
                amount: '123456',
                display_order: 1,
                display_group: 'درآمد'
            },
            {
                title: 'حق اولاد اول',
                amount: '789',
                display_order: 2,
                display_group: 'درآمد'
            }
        ]
    },
    {
        personelCode: '961081',
        salary_details: [
            {
                title: 'حقوق پایه وزارت کار',
                amount: '123456',
                display_order: 1,
                display_group: 'درآمد'
            },
            {
                title: 'حق اولاد اول',
                amount: '789',
                display_order: 2,
                display_group: 'درآمد'
            },
            {
                title: 'حق اولاد دوم',
                amount: '789',
                display_order: 3,
                display_group: 'درآمد'
            }
        ]
    }
];

function dataHandler(userId) {
    const pers = personArray.find(personelCode === userId);
    console.log(pers);
    return pers;
}
//     this.url;
//     this.method;
//     this.data;
// }


// class info {
//     title;
//     amount;
//     count;
//     display_order;
//     display_group;

//     constructor() {
//         for (i of per)
//         const person_info = dataHandler(userId);
         
//         this.title = person_info.title;
//         this.amount = person_info.amount;
//         this.display_order = person_info.display_order;
//         this.display_group = person_info.display_group;
// }


// }



// export class person {
//     personId;
//     fullName;
//     placeEmployment;
//     monthYear;
//     city;
//     bank;
//     accountNo;

//     constructor() {
//         this.render(userInput.value);
//     }

//     render(personId) {
//         const personDataHandler = new dataHandler(personId);
//         let personData = personDataHandler;

//         this.personId = personData.personNo;
//         this.fullName = personData.personFullName;
//         this.placeEmployment = personData.placeEmployment;
//         this.monthYear = personData.monthYear;
//         this.city = personData.city;
//         this.bank = personData.bank;
//         this.accountNo = personData.accountNo;
//     }

// }


// class income {
//     title;
//     count;
//     amount;
//     constructor(title, U, amt) {
//         this.title = title;
//         this.U = uom;
//         this.amt = amount;
//     }
// }

// class deduction {
//     title;
//     amount;
// }
// class consideration {
//     title;
//     amount;
// }




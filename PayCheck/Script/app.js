const person = [
    {
        personNo: '881416',
        personFullName: 'امیر حسین فهیمی دانا',
        placeEmployment: 'مدیریت سیستم های اطلاعاتی',
        monthYear: 'فروردین 1400',
        city: 'تهران',
        bank: 'سامان',
        accountNo: '832-888-927461-1',
        childAllowanceCount: '2',
        childAllowanceAmount: '5488033'
    },
    {
        personNo: '961081',
        personFullName: 'بنفشه موسی ئی',
        placeEmployment: 'مدیریت سیستم های اطلاعاتی',
        monthYear: 'فروردین 1400',
        city: 'تهران',
        bank: 'سامان',
        accountNo: '832-888-998887-1',

    },
    {
        personNo: '941172',
        personFullName: 'مهنا',
        placeEmployment: 'مدیریت سیستم های اطلاعاتی',
        monthYear: 'فروردین 1400',
        city: 'تهران',
        bank: 'سامان',
        accountNo: '12345-888-123-1',

    }
];

function createElement(tag, text) {
    let element = document.createElement(tag);
    element.textContent = text;

    return element;
}

const mainSection = document.getElementById('main-section');
const personNo = document.getElementById('personal-No-value');
const personName = document.getElementById('full-Name-value');
const placeEmployment = document.getElementById('place-employment-value');
const monthYear = document.getElementById('month-year-value');
const city = document.getElementById('city-value');
const bank = document.getElementById('bank-value');
const accountNo = document.getElementById('account-no-value');

const btnFilter = document.querySelector('button');
const userInput = document.querySelector('input');

const childAllowance = document.getElementById('child-allowance');
const childAllowanceValue = document.getElementById('child-allowance-value');

const incomeUl = document.getElementById('income-ul');
const incomeUlCount = document.getElementById('income-ul-count');
const incomeUlAmount = document.getElementById('income-ul-amount');

userInput.addEventListener("keyup", function (event) {
    if (event.keyCode === 13) {
        btnFilter.click();
    }
});

function reloadPage(){
    window.location.reload();
 }

btnFilter.addEventListener('click', function () {

    reloadPage;
    const pers = person.find(
        ({ personNo }) => personNo === userInput.value
    );

   

    personNo.textContent = pers.personNo;
    personName.textContent = pers.personFullName;
    placeEmployment.textContent = pers.placeEmployment;
    monthYear.textContent = pers.monthYear;
    city.textContent = pers.city;
    bank.textContent = pers.bank;
    accountNo.textContent = pers.accountNo;

    if (pers.childAllowanceCount !== null && pers.childAllowanceCount > 0) {
        const childAllowancePosition = incomeUl.childNodes[5];
        const childAllowanceElement = createElement('li', 'اولاد: ');
        incomeUl.appendChild(childAllowanceElement);
        incomeUl.insertBefore(childAllowanceElement, childAllowancePosition.nextSibling)

        const childAllowanceCountPosition = incomeUlCount.childNodes[5];
        const childAllowanceCountElement = createElement('li', pers.childAllowanceCount);
        incomeUlCount.appendChild(childAllowanceCountElement);
        incomeUlCount.insertBefore(childAllowanceCountElement, childAllowanceCountPosition.nextSibling)
        
        const childAllowanceAmountPosition = incomeUlAmount.childNodes[5];
        const childAllowanceAmountElement = createElement('li', pers.childAllowanceAmount);
        incomeUlAmount.appendChild(childAllowanceAmountElement);
        incomeUlAmount.insertBefore(childAllowanceAmountElement, childAllowanceAmountPosition.nextSibling)
    }
    else{
        console.log(incomeUl.childNodes[6]);

        if (incomeUl.childNodes[6].textContent === 'اولاد: '){
            incomeUl.removeChild(incomeUl.childNodes[6]);
            incomeUlCount.removeChild(incomeUlCount.childNodes[6]);
            incomeUlAmount.removeChild(incomeUlAmount.childNodes[6]);
        }
    }

});





// * 오늘 날짜 출력 ======================== *
const txtDate = document.querySelector('.today .date');
const txtDay = document.querySelector('.today .day');

let today = new Date(); 
let year = today.getFullYear(); // 년도
let month = today.getMonth() + 1;  // 월
let date = today.getDate();  // 날짜
let week = ['SUN','MON','TUE','WED','THU','FRI','SAT']; // 요일 0~7을 영문으로
let day = week[today.getDay()];  // 요일

// 만약 월 또는 일이 한자리 수면 앞에 0을 붙여주도록 함
if (month < 10) {
    month = '0' + month;
}
if (date < 10) {
    date = '0' + date;
}

txtDate.innerHTML = year + '/' + month + '/' + date;
txtDay.innerHTML = day;


// * TODO List ========================== *
const txtBox = document.querySelector('.schedule input'); // input
const addBtn = document.querySelector('.schedule .btn-add'); // add button
const delBtn = document.querySelector('#btn-del'); // delete button
const list = document.querySelector('.list'); // ul
let num = 0; // li 인덱스 카운트

function addSchedule () {
    // li 요소를 만들고 listItem에 저장
    const listItem = document.createElement('li');

    // li에 input의 값을 넣어 줌 
    listItem.innerHTML = txtBox.value + '<span id="btn-del" onclick="delSchedule('+num+')">삭제</span>';
    // li에 각각 id값을 지정 (ex/ todo0, todo1, todo2)
    listItem.setAttribute('id','todo'+num);
    // 값이 입력된 li를 ul의 자식요소로 넣어 줌
    list.appendChild(listItem);

    // input은 다시 빈 값으로 변경
    txtBox.value = null;

    // 인덱스 카운트르르 위해 num값을 하나씩 증가
    num++;
}

function delSchedule (num) {
    // 삭제하려는 li의 id값을 받아와서
    let liIndex = document.getElementById('todo'+num);
    // 해당 li를 삭제처리
    list.removeChild(liIndex);
}

function delAll () {
    // ul이 자식요소를 가지고 있는 동안 첫번째 자식 요소를 삭제처리
    while (list.hasChildNodes()) {
        list.removeChild(list.firstChild);
        num = 0;
    }

    // let test = document.querySelectorAll('.list li');
    // test.remove();
}

function pressEnter(){
    // input에서 엔터키를 눌렀을 때도 일정이 추가되도록 함
    if(event.keyCode == 13){
        if (txtBox.value == "") {
            alert('일정을 입력하세요.')
        } else {
            addSchedule();
        }
    }
}

addBtn.addEventListener('click', () => {
    // 만약 사용자가 빈 값을 입력했다면 알림창을 띄우고, 값을 입력했다면 addSchedule 함수를 실행
    if (txtBox.value == "") {
        alert('일정을 입력하세요.')
    } else {
        addSchedule();
    }
});
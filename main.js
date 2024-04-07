const txt = document.querySelector('.txt');
const save = document.querySelector('.save');
const list = document.querySelector('.list');


let data = [];
//     {
//         'content': '代辦事項1' 
//     },
//     {
//         'content': '週五打排球'
//     },

function renderData(){

    let str = '';
    data.forEach(function(item,index){
        str+=`
        <li>
              <input type="checkbox" id="todo_1">
              <label for="todo_1">
                <span class="check"></span>
                ${item.content}
              </label>
              <i class="far fa-trash-alt delete" data-num="${index}" id="delete"></i>
            </li>
        `
    })
    // console.log(str);
    
    const list = document.querySelector('.list');
    list.innerHTML = str;
};

// 新增待辦功能
save.addEventListener('click',function(e){
    if(txt.value == ''){
        alert('請輸入內容');
        return;
    }else{
        // {
        //     'content': '週五打排球'
        // },
        let obj = {};
        obj.content = txt.value;
        data.push(obj);
        console.log(obj);

        txt.value = '';
        renderData();

    }

})
// 刪除待辦功能
list.addEventListener('click',function(e){
    // console.log(e.target.nodeName);
    if(e.target.getAttribute('id') !== 'delete'){
        // console.log(e.target.getAttribute('class'));
        alert('not button');
        return;
    }
    // alert('this is delete button!');
    let num = e.target.getAttribute('data-num');
    console.log(num);
    data.splice(num,1);//data.splice(從哪一筆開始刪除,刪除幾筆)
    renderData();
});

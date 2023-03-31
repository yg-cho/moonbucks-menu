// step1 요구사항 구현을 위한 전략
// TODO: 메뉴 추가 
//   - [x] 메뉴의 이름을 입력 받고 확인 버튼을 누르면 메뉴가 추가된다.
//   - [x] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴를 추가한다.
//   - [x] 메뉴의 이름을 입력 받고 ENTER키 입력으로 추가한다.
//   - [x] 메뉴가 추가되고 나면, input은 빈 값으로 초기화한다.
//   - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.
//   - [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
//   - 추가되는 메뉴의 아래 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>` 안에 삽입해야 한다.

const $ = (selector) => document.querySelector(selector);

function App(){
// TODO: 메뉴 수정
// - [ ] 메뉴의 수정 버튼클릭 이벤트를 받고, 메뉴 이름을 업데이트한다.
// - [ ] 메뉴 수정시 브라우저에서 제공하는 `prompt` 인터페이스를 활용한다.

    $("#espresso-menu-list").addEventListener("click", (e) => {
        
        if(e.target.classList.contains("menu-edit-button")){
            const $menuName = e.target.closest("li").querySelector(".menu-name")
            const updatedMenuName = prompt("메뉴명을 수정하세요",$menuName.innerText)
            $menuName.innerText = updatedMenuName;
        }
    
    })
  
    $("#espresso-menu-form").addEventListener("submit", (e)=> {
        e.preventDefault();
    })

    $("#espresso-menu-name").addEventListener("keypress", (e) => {
        if(e.key !== "Enter"){
            return;
        }
        if($("#espresso-menu-name").value === ""){
            alert("값을 입력해주세요.");
            return;
        }
        if(e.key === "Enter"){
            addItem();
        };
    })

    $("#espresso-menu-submit-button").addEventListener("click", () => {
        addItem();
    });
    
}

const addItem = () => {
    const espressoMenuName = $("#espresso-menu-name").value;
    const menuItemTemplate = (espressoMenuName) => { 
        return `
            <li class="menu-list-item d-flex items-center py-2">
                <span class="w-100 pl-2 menu-name">${espressoMenuName}</span>
                <button
                type="button"
                class="bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button"
                >
                수정
                </button>
                <button
                type="button"
                class="bg-gray-50 text-gray-500 text-sm menu-remove-button"
                >
                삭제
                </button>
            </li>`;
    };
    //HTML 생성시 위치지정 -> https://developer.mozilla.org/ko/docs/Web/API/Element/insertAdjacentHTML
    //element.insertAdjacentHTML(position, text);
    //position -> 'beforbegin', 'afterbegin', 'beforeend', 'afterend'
    $("#espresso-menu-list").insertAdjacentHTML("beforeend",menuItemTemplate(espressoMenuName))

    const menuCount = $("#espresso-menu-list").querySelectorAll("li").length;
    $(".menu-count").innerText = `총 ${menuCount}개`
    $("#espresso-menu-name").value = "";
}
App();



// TODO: 메뉴 삭제
// - [ ] 메뉴 삭제시 브라우저에서 제공하는 `confirm` 인터페이스를 활용한다.

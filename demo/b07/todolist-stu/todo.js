function checkDone() {
    // Lấy thẻ ul có id là "myUL"
    let ul = document.getElementById("myUL");
    // Lấy danh sách thẻ li
    let mangLi = ul.children;
    // Duyệt từng thẻ li. Với mỗi thẻ, thêm sự kiện click vào
    for (let i = 0; i < mangLi.length; i++) {
        mangLi[i].onclick = function () {
            this.classList.toggle("checked");
        }
    }
}

function createSpan(content) {
    let span = document.createElement("span");
    // span.className = "close";
    span.classList.add("close");
    let text1 = document.createTextNode(content);
    span.appendChild(text1);
    span.onclick = function () {
        this.parentElement.remove();
    }
    return span;
}

function newElement() {
    // Lay value trong input
    let text = document.getElementById("myInput").value;
    // Tao text node
    let textNode = document.createTextNode(text);
    // Tao li moi
    let li = document.createElement("li");
    // Them text node vao li
    li.appendChild(textNode);
    // Them su kien check cho li
    li.onclick = function () {
        this.classList.toggle("checked");
    }

    // let span = document.createElement("span");
    // // span.className = "close";
    // span.classList.add("close");
    // let text1 = document.createTextNode("x");
    // span.appendChild(text1);
    // span.onclick = function () {
    //     this.parentElement.remove();
    // }

    let span = createSpan("x");
    li.appendChild(span);

    // Tinh huong gia dinh:
    // let li2 = document.createElement("li");
    // li2.innerHTML = li.innerHTML;
    // li2.innerHTML = "Bye";

    // Lay ul
    let ul = document.getElementById("myUL");
    // Them li vao ul
    ul.appendChild(li);
    // ul.appendChild(li2);
}

function deleteTask() {
    // Lấy thẻ ul có id là "myUL"
    let ul = document.getElementById("myUL");
    // Lấy danh sách thẻ li
    let mangLi = ul.children;

    for (let i = 0; i < mangLi.length; i++) {
        // let span = document.createElement("span");
        // // span.className = "close";
        // span.classList.add("close");
        // let text = document.createTextNode("x");
        // span.appendChild(text);
        // span.onclick = function () {
        //     this.parentElement.remove();
        // }

        let span = createSpan("x");
        mangLi[i].appendChild(span);
    }
}

// checkDone();
// deleteTask();

// Gop 2 ham checkDone va deleteTask
function setUp() {
    // Lấy thẻ ul có id là "myUL"
    let ul = document.getElementById("myUL");
    // Lấy danh sách thẻ li
    let mangLi = ul.children;
    // Duyệt từng thẻ li. Với mỗi thẻ, thêm sự kiện click vào
    for (let i = 0; i < mangLi.length; i++) {
        mangLi[i].onclick = function () {
            this.classList.toggle("checked");
        };
        let span = createSpan("x");
        mangLi[i].appendChild(span);
    }
}

setUp();
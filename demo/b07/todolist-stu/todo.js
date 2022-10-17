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

function newElement() {
    // Lay value trong input
    let text = document.getElementById("myInput").value;
    // Tao text node
    let textNode = document.createTextNode(text);
    // Tao li moi
    let li = document.createElement("li");
    // Them text node vao li
    li.appendChild(textNode);
    // Lay ul
    let ul = document.getElementById("myUL");
    // Them li vao ul
    ul.appendChild(li);
}

checkDone();
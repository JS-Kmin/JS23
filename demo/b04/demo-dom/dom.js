// DOM = Document Object Model

// Hàm demo lấy element và truy xuất vào các thuộc tính
function change() {
  // Lấy element có id là fruit: Là thẻ h1
  let h1 = document.getElementById("fruit");
  console.log(h1);

  // Thay đổi content của thẻ h1
  h1.innerHTML = "Tạm biệt";
  // console.log(h1.innerHTML)

  // Thay đổi thuộc tính title của thẻ h1
  h1.title = "Bye";

  // Thay đổi thuộc tính style (inline CSS) của thẻ h1
  h1.style.color = "green";
  h1.style.backgroundColor = "pink";
  h1.style.fontSize = "50px";
}

// Hàm demo lấy element bằng class
function getItems() {
  // Lấy tất cả element có tên class là item.
  let items = document.getElementsByClassName("item");
  console.log(items);
  // Cần truy xuất vào một phần tử cụ thể thông qua chỉ số (index)
  items[0].innerHTML = "Chuối";
}

// Hàm demo lấy element bằng tên thẻ
function getLi() {
  // Lấy tất cả element có tên thẻ là li.
  let lis = document.getElementsByTagName("li");

  // Cần truy xuất vào một phần tử cụ thể thông qua chỉ số (index)
  lis[lis.length - 1].innerHTML = "Tiêu"; // Phần tử cuối cùng trong mảng được cập nhật
}

// Hàm demo lấy phần tử thông qua mối quan hệ
function getFood() {
  let ul = document.getElementById("food-list");

  // Lấy tất phần tử con của ul, trả về đối tượng dạng mảng
  let lis = ul.children;

  // Lấy li ở vị trí 1
  let li1 = lis[1];

  // In ra console phần tử anh em
  console.log(li1.nextElementSibling);
  console.log(li1.previousElementSibling);
}

// Hàm demo lấy phần tử bằng collection
function getBody() {
  let body = document.body; // collection
  console.log(body.children[2]);
}

// Hàm demo xử lý sự kiện
function setEvent() {
  let btn1 = document.getElementsByTagName("button")[1];

  // Xử lý sự kiện bằng cách dùng thuộc tính sự kiện
  btn1.onclick = function () {
    alert("Hello");
  };

  // Xử lý sự kiện bằng cách dùng hàm addEventListener
  let btn2 = document.getElementsByTagName("button")[2];
  btn2.addEventListener("click", function () {
    alert("Bye");
  });
}

// Hàm demo thêm phần tử
function addElement() {
  let btn3 = document.getElementsByTagName("button")[3];
  btn3.addEventListener("click", function () {
    // Tạo thẻ li
    let li = document.createElement("li");
    li.innerHTML = "Chuối";

    // Lấy thẻ ul
    let ul = document.getElementsByTagName("ul")[0];

    // Thêm li vào làm con của ul
    ul.appendChild(li);
    console.log(ul);
  });
}

// Hàm demo xóa element
function removeElement() {
  let btn5 = document.getElementsByTagName("button")[4];
  btn5.addEventListener("click", function () {
    // Lấy thẻ ul
    let ul = document.getElementsByTagName("ul")[0];

    // Lấy li đầu tiên
    let li = ul.children[0];

    // Xóa thẻ li
    li.remove();
  });
}


// Khu vực toàn cục, dùng để gọi hàm muốn thử nghiệm

// setEvent()

// getBody();

// getLi();

// getItems();

// change();

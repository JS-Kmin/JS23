// import books from "./data.js";
// console.log(books);

let books = [
  {
    id: 1,
    name: "Luật tâm thức",
    price: 220000,
    provider: "Fahasha",
  },
  {
    id: 2,
    name: "Chiến binh cầu vồng",
    price: 140000,
    provider: "Fahasha",
  },
  {
    id: 3,
    name: "Nghệ thuật tập trung",
    price: 90000,
    provider: "Tuổi trẻ",
  },
  {
    id: 4,
    name: "Bye Béo",
    price: 305000,
    provider: "Kmin Books",
  },
  {
    id: 5,
    name: "Sát thủ bán hàng",
    price: 180000,
    provider: "Fahasha",
  },
  {
    id: 6,
    name: "Hoàng tử bé",
    price: 50000,
    provider: "Kmin Books",
  },
  {
    id: 7,
    name: "Tâm lý học tội phạm",
    price: 400000,
    provider: "Kmin Books",
  },
  {
    id: 8,
    name: "Hiểu về trái tim",
    price: 130000,
    provider: "Tuổi trẻ",
  },
];

function locTheoGia(min, max) {
  let kq = [];
  let v = 0;
  for (let i = 0; i < books.length; i++) {
    if (books[i].price >= min && books[i].price <= max) {
      // shallow copy
      // kq[v] = books[i]; // Them sach o vi tri thu i vao kq

      // clone object
      // kq[v] = {}; // Khoi tao: kq[v] la object
      // kq[v].id = books[i].id;
      // kq[v].name = books[i].name;
      // kq[v].price = books[i].price;
      // kq[v].provider = kq[v].provider;
      kq[v] = { ...books[i] };

      v++;
    }
  }
  return kq;
}

let m = locTheoGia(200000, 400000);
m[0].name = "hihihihihi";
console.log(books);
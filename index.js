let formdata = [];



const uimakar = () => {
    document.getElementById("selling").innerHTML = "";
    formdata.map((ele, i) => {
        let img = document.createElement("img");
        img.src = ele.img;

        let prodect = document.createElement("h2");
        prodect.innerHTML = ele.prodect;
        let about = document.createElement("p");
        about.innerHTML = ele.about;
        let price = document.createElement("h3");
        price.innerHTML = ele.price;

        let btn = document.createElement("button");
        btn.innerHTML = "Delete";
        btn.addEventListener("click", () => {
            formdata.splice(i, 1);
            uimakar()
        });
        let add = document.createElement("button");
        add.innerHTML = "buy";
        add.addEventListener("click", () => {
            alert("Buy");
        });
        let div = document.createElement("div");
        div.append(img, prodect, about, price, btn, add);
        document.getElementById("selling").append(div);
    });
};

const rutudata = (e) => {
    e.preventDefault();

    let data = {
        img: document.getElementById("img").value,
        prodect: document.getElementById("prodect").value,
        about: document.getElementById("about").value,
        price: document.getElementById("price").value
    };
    formdata.push(data);
    uimakar();
};

document.getElementById("form").addEventListener("submit", rutudata);

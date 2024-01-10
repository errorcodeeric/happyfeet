let jsonBin = "https://api.jsonbin.io/v3/b/65662ba712a5d37659a03ed3";
let googleAPIKey = ""

async function getData() {
    let result = await axios.get(jsonBin);
    return result.data.record;
}

document.addEventListener("DOMContentLoaded", async function () {
    places = await getData();
    dropMarker(places);


})

let bookingItem = {
    shopname: "",
    bookingtime: "",
    duration: "",
    massageService: ""
}

let bookingHistoryData = [
    {
        "shopname": "Happy Feet",
        "bookingtime": "Mon 25 Dec 2023, 7:00PM",
        "duration": "90",
        "massageService": "Foot Massage"
    },
    {
        "shopname": "Unwind Foot Spa",
        "bookingtime": "Mon 01 Jan 2024, 4:30PM",
        "duration": "60",
        "massageService": "Body Massage"
    },
    



];

let contactInfo = {
    userName: "Ahn Jiao Shuang",
    userEmail: "ahnjiaoshuang@gmail.com",
    userMobile: 97696969
}

let userFaves = [
    "Happy Feet"
]
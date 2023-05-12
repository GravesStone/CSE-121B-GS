const num = ["one", "two", "three"];
const listNum = num.map(function (vText) {
    return `<li>${vText}</li>`;
});
document.getElementById("myList").innerHTML = listNum.join();

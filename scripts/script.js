// control basic interaction of the index page

const li = 3;
var t1 = Date.now();
var times = 0;
function showCustomAlert(message) {
    const alertDiv = document.getElementById('custom-alert');
    alertDiv.innerText = message;
    alertDiv.classList.add('alert-visible');
    setTimeout(() => {
        alertDiv.classList.remove('alert-visible');
    }, 3000);
}
function click() {
    var t2 = Date.now();
    times++;
    if (t2 - t1 <= 3000 && times>=li){
        //showCustomAlert("别戳我，我怕疼\n点太快了喵！(=>ω<=)ﾉﾞ");
        alert("别戳我，我怕疼\n点太快了喵！(=>ω<=)ﾉﾞ");
        times = 0;
        t1 = Date.now();
    }
}
document.querySelector("html").addEventListener("click", function () {
    click();
})
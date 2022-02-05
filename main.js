let checkboxes = document.querySelectorAll('.checkbox');
let ranges = document.querySelectorAll('.range');
let rangesSum = 0;
let checkedSum = 0;
let rangesReady;
let checkedReady;

let launchButton = document.getElementById("launch-btn");

function StatusChecking() {
    rangesReady = false;
    checkedReady = false;
    launchButton.setAttribute("disabled", "disabled");
    for (let i = 0; i < ranges.length; i++) {
        rangesSum += Number(ranges[i].value);
        if (rangesSum === 500) {
            rangesReady = true;
        }
    }
    //console.log(rangesSum);
    rangesSum = 0;

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            checkedSum += 1;
            if (checkedSum === 6) {
                checkedReady = true;
            }
        }
    }
    //console.log(checkedSum);
    checkedSum = 0;

    if (checkedReady && rangesReady) {
        launchButton.removeAttribute("disabled");
    }
}

launchButton.addEventListener("click", () => {
    document.getElementById("rocket").animate([
        {left: '20%', bottom: '34%' },
        {left: '40%', bottom: '70%' } ],
        {duration: 3000, iterations: 1 })
});

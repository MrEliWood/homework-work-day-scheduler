// display today's date in header
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// listen for save button clicks
// for (let i = 0; i < 10; i++) {
//     $(`saveBtn${i}`).click(saveComment());;
// }

// save comments to local storage

// for (let i = 1; i < 10; i++) {

//     var saveBtn = $(`#saveBtn${i}`);
//     var comment = $(`#comment${i}`).val();

//     console.log(comment)

//     saveBtn.click(function() {
//         console.log(comment)
//         localStorage.setItem(`comment${i}`, comment)
//     });
    
// };


var nine = 
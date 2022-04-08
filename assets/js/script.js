// display today's date in header
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// save comments to local storage

for (let i = 0; i < 10; i++) {

    var saveBtn = $(`#saveBtn${i}`);
    var comment = $(`#nine`).val();

    saveBtn.click(function(event) {
        event.preventDefault();
        console.log(comment)
        localStorage.setItem(`comment${i}`, comment);
    });
    
};

// highlight schedule based on time
var currentTime = moment().format('H');

var allHours = [
    {
        time: 9,
        id: $('#nine')
    },
    {
        time: 10,
        id: $('#ten')
    },
    {
        time: 11,
        id: $('#eleven')
    },
    {
        time: 12,
        id: $('#twelve')
    },
    {
        time: 13,
        id: $('#thirteen')
    },
    {
        time: 14,
        id: $('#fourteen')
    },
    {
        time: 15,
        id: $('#fifteen')
    },
    {
        time: 16,
        id: $('#sixteen')
    },
    {
        time: 17,
        id: $('#seventeen')
    }
];

for (let i = 0; i < allHours.length; i++) {

    var hourId = allHours[i].id;

    if (currentTime < allHours[i].time) {
        hourId.addClass('bg-success');
    } else if (currentTime === allHours[i].time) {
        hourId.removeClass('bg-success');
        hourId.addClass('bg-danger');
    } else {
        hourId.removeClass('bg-danger');
        hourId.addClass('bg-light');
    };

}
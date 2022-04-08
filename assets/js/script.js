// display today's date in header
var currentDay = moment();
$("#currentDay").text(currentDay.format("dddd, MMMM Do"));

// save comments to local storage
for (let i = 0; i < 10; i++) {

    var savedComment = localStorage.getItem(`Comment ${i}`);
    if (savedComment) {
        $(`#comment${i}`).text(savedComment);
    }

    var saveBtn = $(`#saveBtn${i}`);

    saveBtn.click(function(event) {
        event.preventDefault();

        var comment = $(`#comment${i}`).val();
        localStorage.setItem(`Comment ${i}`, comment);
    });
    
};

// highlight schedule based on time
var currentTime = moment().format('H');

var allHours = [
    {
        time: 9,
        id: $('#comment1')
    },
    {
        time: 10,
        id: $('#comment2')
    },
    {
        time: 11,
        id: $('#comment3')
    },
    {
        time: 12,
        id: $('#comment4')
    },
    {
        time: 13,
        id: $('#comment5')
    },
    {
        time: 14,
        id: $('#comment6')
    },
    {
        time: 15,
        id: $('#comment7')
    },
    {
        time: 16,
        id: $('#comment8')
    },
    {
        time: 17,
        id: $('#comment9')
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

};
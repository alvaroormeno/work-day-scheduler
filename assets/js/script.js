var PastPresentFuture = function () {


    $(".hourStamp").each(function () {
        //grab text of hour for each element with class="hourStamp"
        var getHour = $(this).text().trim();
        // Format var getHour text into hour object
        var hourObject = moment(getHour, "LT");
        // Format hourObject to a number value
        var hourDifference = Math.floor(moment.duration(moment().diff(hourObject)).asHours());
    
        // switch statement that compares if difference between current time and textblock hour is negative or positve (past or future)
        switch (true) {
        case (hourDifference > 0):
            console.log("past");
            $(this).next().addClass("pastHour");
            break;

        case (hourDifference === 0):
            console.log("present");
            $(this).next().addClass("presentHour");
            break;

        default:
            console.log("future");
            $(this).next().addClass("futureHour");
            break;
        }

        // retrieve text of textblock from localstorage based on var gethour value
        $(this).next().text(localStorage.getItem(getHour))
    });

  




};

var saveText = function(event) {

    // savegethour var looks for the same HOUR of text block that gethour var looks on $(".hourStamp").each(function ()
    var saveGetHour = $(event.target).prev().prev().text().trim()
    var saveTextValue = $(event.target).prev().val()
    localStorage.setItem(saveGetHour, saveTextValue)
    // console.log(saveGetHour)
    // console.log(saveTextValue)
    
}

var clearLocalStorage = function () {
    localStorage.clear()
    $('textarea').val(null)
}


var startApp = function () {

    PastPresentFuture();

    $('.btn').on('click', saveText);

    //display time on intro
    var introTime = moment().format('dddd, LL');
    $('.displayTime').text(introTime);

    $('.clearBtn').on('click', clearLocalStorage);


    
}

startApp()

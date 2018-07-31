$(document).ready(function(){
    let btn = $('#btn');
    let inp = $('#input');
    let result = $('#result')
    btn.click(function(){
        if(inp.val()==""){
            alert('Please enter correct input');
        }else{
            $.ajax({
                url:`https://api.railwayapi.com/v2/pnr-status/pnr/${inp.val()}/apikey/r5jc1q46rj/`,
                method:'GET',
                // data:{pnr:inp.val(),apikey:r5jc1q46rj},
                success:function(data) {
                    //data["total_passengers should be used for the for loop for finding for how many time loops need to be runned"]
                    console.log(data);
                    if(data["response_code"]===200) {
                        console.log('data entered');
                        result.append(`<li><h4>Train Name:- ${data["train"]["name"]}</h4>
                                       <h4>Train Number:- ${data["train"]["number"]}</h4>
                                       <h4>Number of Passengers:- ${data["total_passengers"]}</h4></li>`)
                        for (let i = 0; i < data["total_passengers"]; i++) {
                            result.append(`<li><h4>Passenger Booking Status:- </h4>${data["passengers"][i]["booking_status"]}</li>`);
                        }
                    }else{
                        console.log("Enter Correct Input");
                        alert('Please enter correct input');
                        inp.val("");
                    }


                }

            })
        }
    });
    let inp2 = $('#input2');
    $('#nobtn').click(function(){
        if(inp2.val()==""){
            alert('Please enter correct input');
        }else{
            $.ajax({
                url:`https://api.railwayapi.com/v2/name-number/train/${inp2.val()}/apikey/r5jc1q46rj/`,
                method:'GET',
                // data:{pnr:inp.val(),apikey:r5jc1q46rj},
                success:function(data) {
                    //data["total_passengers should be used for the for loop for finding for how many time loops need to be runned"]
                    console.log(data);
                    if(data["response_code"]===200) {
                        $('#noresult').append(`<li><h4>Train Name:- ${data["train"]["name"]}</h4>
                                               <h4>Train Number:- ${data["train"]["number"]}</h4></li>`);
                        for (let i = 0; i < data["train"]["days"]["length"]; i++) {
                            $('#noresult').append(`<li><h4>Train running day code:- ${data["train"]["days"][i]["code"]}</h4></li>`);
                        }
                    }else{
                        console.log("Enter Correct Input");
                        alert('Please enter correct input');
                        inp2.val("");
                    }


                }

            })
        }
    });
    let inp3 = $('#input3');
    let inp31 = $('#input31');
    let inp32 = $('#input32');
    $('#tbtn').click(function(){
        if(inp3.val()==""){
            alert('Please enter correct input');
        }else{
            $.ajax({
                url:`https://api.railwayapi.com/v2/between/source/${inp3.val()}/dest/${inp31.val()}/date/${inp32.val()}/apikey/r5jc1q46rj/`,
                method:'GET',
                // data:{pnr:inp.val(),apikey:r5jc1q46rj},
                success:function(data) {
                    //data["total_passengers should be used for the for loop for finding for how many time loops need to be runned"]
                    console.log(data);
                    if(data["response_code"]===200) {
                        for (let i = 0; i < data["total"]; i++) {
                            $('#tresult').append(`<li><h4>Train Name:- ${data["trains"][i]["name"]}</h4>
                                                  <h4>Train Number:- ${data["trains"][i]["number"]}</h4>
                                                  <h4>Train travel time:- ${data["trains"][i]["travel_time"]}</h4>
                                                  <h4>Train src_departure_time:- ${data["trains"][i]["src_departure_time"]}</h4>
                                                  <h4>Train dest_arrival_time :- ${data["trains"][i]["dest_arrival_time"]}</h4>
                                                  <h4>Train src_station code:- ${data["trains"][i]["from_station"]["code"]}</h4>
                                                  <h4>Train src_station name:- ${data["trains"][i]["from_station"]["name"]}</h4>
                                                  <h4>Train dest_station code:- ${data["trains"][i]["to_station"]["code"]}</h4>
                                                  <h4>Train dest_station name:- ${data["trains"][i]["to_station"]["name"]}</h4></li>`);
                        }
                    }else{
                        console.log("Enter Correct Input");
                        alert('Please enter correct input');
                        inp3.val("");
                        inp31.val("");
                        inp32.val("");
                    }


                }

            })
        }
    });
    let inp4 = $('#input4');
    $('#cancelbtn').click(function(){
        if(inp4.val()==""){
            alert('Please enter correct input');
        }else{
            $.ajax({
                url:`https://api.railwayapi.com/v2/cancelled/date/${inp4.val()}/apikey/r5jc1q46rj/`,
                method:'GET',
                // data:{pnr:inp.val(),apikey:r5jc1q46rj},
                success:function(data) {
                    //data["total_passengers should be used for the for loop for finding for how many time loops need to be runned"]
                    console.log(data);
                    if(data["response_code"]===200) {
                        for (let i = 0; i < data["total"]; i++) {
                            $('#cancelresult').append(`<li><h4>Cancelled Train Name:- ${data["trains"][i]["name"]}
                                                      </h4><h4>Cancelled Train Number:- ${data["trains"][i]["number"]}</h4>
                                                      <h4>Cancelled Train Source Stn code:- ${data["trains"][i]["source"]["code"]}</h4>
                                                      <h4>Cancelled Train Source Stn:- ${data["trains"][i]["source"]["name"]}</h4>
                                                      <h4>Cancelled Train Dest Stn code:- ${data["trains"][i]["dest"]["code"]}</h4>
                                                      <h4>Cancelled Train Dest Stn :- ${data["trains"][i]["dest"]["name"]}</h4></li>`);
                        }
                    }else{
                        console.log("Enter Correct Input");
                        alert('Please enter correct input');
                        inp4.val("");
                    }


                }

            })
        }
    });
    let inp5 = $('#input5');
    $('#rebtn').click(function(){
        if(inp5.val()==""){
            alert('Please enter correct input');
        }else{
            $.ajax({
                url:`https://api.railwayapi.com/v2/rescheduled/date/${inp5.val()}/apikey/r5jc1q46rj/`,
                method:'GET',
                // data:{pnr:inp.val(),apikey:r5jc1q46rj},
                success:function(data) {
                    //data["total_passengers should be used for the for loop for finding for how many time loops need to be runned"]
                    console.log(data);
                    if(data["response_code"]===200) {
                        for (let i = 0; i < data["trains"]["length"]; i++) {
                            $('#reresult').append(`<li><h4>Reschedule train name:- ${data["trains"][i]["name"]}</h4>
                                                   <h4>Reschedule train number:- ${data["trains"][i]["number"]}</h4>
                                                   <h4>Reschedule train time:- ${data["trains"][i]["rescheduled_time"]}</h4>
                                                   <h4>Reschedule train date:- ${data["trains"][i]["rescheduled_date"]}</h4>
                                                   <h4>Reschedule train time difference:- ${data["trains"][i]["time_diff"]}</h4>
                                                   <h4>Reschedule train source station code:- ${data["trains"][i]["from_station"]["code"]}</h4>
                                                   <h4>Reschedule train source station name:- ${data["trains"][i]["from_station"]["name"]}</h4>
                                                   <h4>Reschedule train dest station code:- ${data["trains"][i]["to_station"]["code"]}</h4>
                                                   <h4>Reschedule  train dest station name:- ${data["trains"][i]["to_station"]["name"]}</h4></li>`);
                        }
                    }else{
                        console.log("Enter Correct Input");
                        alert('Please enter correct input');
                        inp5.val("");
                    }


                }

            })
        }
    });
    $("#railenqfn").click(function(){
        console.log('entered')
        $('#railwaysenq').fadeIn(100)
        $('#pnr').fadeOut(100)
        $('#tnumber').fadeOut(100)
        $('#between').fadeOut(100)
        $('#cancelled').fadeOut(100)
        $('#rescheduled').fadeOut(100)
        //});

    });
    $("#pnrfn").click(function(){
        console.log('entered')
        $('#railwaysenq').fadeOut(100)
        $('#pnr').fadeIn(100)
        $('#tnumber').fadeOut(100)
        $('#between').fadeOut(100)
        $('#cancelled').fadeOut(100)
        $('#rescheduled').fadeOut(100)
        //});

    });
    $("#trainnofn").click(function(){
        console.log('entered')
        $('#railwaysenq').fadeOut(100)
        $('#pnr').fadeOut(100)
        $('#tnumber').fadeIn(100)
        $('#between').fadeOut(100)
        $('#cancelled').fadeOut(100)
        $('#rescheduled').fadeOut(100)
        //});

    });
    $("#trainbtfn").click(function(){
        console.log('entered')
        $('#railwaysenq').fadeOut(100)
        $('#pnr').fadeOut(100)
        $('#tnumber').fadeOut(100)
        $('#between').fadeIn(100)
        $('#cancelled').fadeOut(100)
        $('#rescheduled').fadeOut(100)
        //});

    });
    $("#cancelfn").click(function(){
        console.log('entered')
        $('#railwaysenq').fadeOut(100)
        $('#pnr').fadeOut(100)
        $('#tnumber').fadeOut(100)
        $('#between').fadeOut(100)
        $('#cancelled').fadeIn(100)
        $('#rescheduled').fadeOut(100)
        //});

    });
    $("#rescfn").click(function(){
        console.log('entered')
        $('#railwaysenq').fadeOut(100)
        $('#pnr').fadeOut(100)
        $('#tnumber').fadeOut(100)
        $('#between').fadeOut(100)
        $('#cancelled').fadeOut(100)
        $('#rescheduled').fadeIn(100)
        //});
    });
});
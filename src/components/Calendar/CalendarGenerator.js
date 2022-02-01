export const date = new Date();


 const renderCalendar = (monthName , year , calendarDays )=>{

    // this holds the days rows of the calendars
    

    // const calendarDays = document.querySelector('.calendar-days') 
    calendarDays.innerHTML = '';


// date.getMonth() +1 gives us the current month and the 0 after it gives us the last day of the current month
    const lastDay = new Date(date.getFullYear() , date.getMonth() +1, 0).getDate();

    // this statement gives us the last day of the previous month
    const prevLastDay = new Date(date.getFullYear() , date.getMonth(), 0).getDate();

    //gives us the the first day of the next month inside the first week (zero base numbering)
    const lastDayIndex = new Date(date.getFullYear() , date.getMonth() +2, 0).getDay();

    //this will gives us the number of days for the next month to display in the table
    const nextDays = 7 - lastDayIndex -1;


    const months = ["Jan", "Feb", "Mar", "April", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    monthName.innerHTML = months[date.getMonth()]
    year.innerHTML = date.getFullYear()


    // daysTd holds the days in td tags
    let daysTd = [];

    // divide the daysTd into 7 rows and each row has 7 td tags then hold it inside daysTr
    let daysTr = [];

    //if there wes enough room , we will add the days of the previous month
    for(let x = date.getDay() ; x > 0 ; x-- ){
        daysTd.push(`<td class="prev-date">${prevLastDay - x + 1}</td>`)
    }

    //making the days of the current month (and mark the current day)
    for( let i = 1 ; i <= lastDay ; i++){
        if(i === new Date().getDate() && date.getMonth() === new Date().getMonth()){
            daysTd.push(`<td class="today">${i}</td>`);
        }else{
            daysTd.push(`<td>${i}</td>`);
        }     
    }
    
    
    //if there wes enough room , we will add the days of the next month
    for(let j = 1 ; j <= nextDays ; j++){
        daysTd.push(`<td class="next-date">${j}</td>`)
    }


    //dividing the daysTd into 7 rows and each row array stored inside daysTr. 
    let j = 0
    for(let k = 0 ; k < 5 ; k++){

        let arrayHolder = [];
        for(let l = 0 ; l < 7 ; l++){
            if(daysTd[j] === undefined){
                break;
            }
            arrayHolder.push(daysTd[j]);
            j++
        }
        daysTr.push(arrayHolder)
    }

    daysTr.map(row => {
        let tr = document.createElement('tr');
        row.map(td => {
            return tr.innerHTML += td;
        })
        return calendarDays.appendChild(tr);
    })
}


export default renderCalendar
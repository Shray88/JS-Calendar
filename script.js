// -----------------Made By Shray Sagar-----------------
const month = document.querySelector(".month-name");
const day = document.querySelector(".day");
const date = document.querySelector(".date");
const year = document.querySelector(".year");
const realdate = new Date();
month.innerHTML = realdate.toLocaleString("en",{
    month:"long"
})

day.innerHTML = realdate.toLocaleString("en",{
    weekday:"long"
})

date.innerHTML = realdate.getDate();
year.innerHTML = realdate.getFullYear();

// -----------------Made By Shray Sagar-----------------
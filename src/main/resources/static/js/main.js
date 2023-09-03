const currentDate = document.querySelector('.current-date');
daysTag = document.querySelector('.days');
prevNextIcon = document.querySelectorAll('.nav button');

let date = new Date();
currYear = date.getFullYear(),
currMonth = date.getMonth(); 

const months = [
    'January','February','March','April','May',
    'June','July','August','September','October','November','December',];


  const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay();   
    lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate();
    lastDayofMonth = new Date(currYear, currMonth ,lastDateofMonth).getDay();
    lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();

    let liTag="";

    for(let i =firstDayofMonth; i >0; i--){
        liTag += `<li class="inactive">${lastDateofLastMonth -i + 1}</li>`;
    }

    for(let i =1; i<= lastDateofMonth; i++){
        liTag += `<li>${i}</li>`;
    }

    for(let i = lastDayofMonth; i < 6; i++){
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`;
    }

    daysTag.innerHTML = liTag;
    currentDate.innerHTML =`${months[currMonth]} ${currYear}`;
};


renderCalendar();

prevNextIcon.forEach((icon) => {
    icon.addEventListener('click', () => {
      currMonth = icon.id === 'prev' ? currMonth - 1 : currMonth + 1;
      if (currMonth < 0 || currMonth > 11) {
        date = new Date(currYear, currMonth);
        currYear = date.getFullYear(); 
        currMonth = date.getMonth(); 
      } else {
        date = new Date();
      }
      renderCalendar();
    });
  });

  const options = {
    root: null, // viewport
    rootMargin: "0px",
    threshold: .5,  // 50%가 viewport에 들어와 있어야 callback 실행
  }
  
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      console.log(entry.isIntersecting);
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  }, options);
  
  const titleList = document.querySelectorAll('h2');
  
  // 반복문을 돌려 모든 DOM에 적용
  titleList.forEach(el => observer.observe(el));



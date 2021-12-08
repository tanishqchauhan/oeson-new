const hold = document.getElementById('openings-hold');
const total = document.getElementById('total-openings');
const filter = document.getElementById('location-filter');
const searchForm = document.getElementById('search-job');
const uploadBtn = document.getElementById('upload-cv-btn');
const uploadFile = document.getElementById('resume');
const uploadForm = document.getElementById('upload-form')

let locations = ['All Locations'];


const jobs = [
    { 
        title : "SDE II I Site Reliability Engineering (Consumer)", 
        post : 1, 
        department : "Technology", 
        location : "Gurugram/Bangaluru" 
    },
    {
        title : "Analyst I IT Governance",
        post : 1,
        department : "Technology",
        location : "Gurugram"
    },
    { 
        title : "SDE II I Site Reliability Engineering (Consumer)", 
        post : 1, 
        department : "Technology", 
        location : "Gurugram/Bangaluru" 
    },
    {
        title : "Analyst I IT Governance",
        post : 1,
        department : "Technology",
        location : "Gurugram"
    },
    { 
        title : "SDE II I Site Reliability Engineering (Consumer)", 
        post : 1, 
        department : "Technology", 
        location : "Gurugram/Bangaluru" 
    },
    {
        title : "Analyst I IT Governance",
        post : 1,
        department : "Technology",
        location : "Gurugram"
    },
    { 
        title : "SDE II I Site Reliability Engineering (Consumer)", 
        post : 1, 
        department : "Technology", 
        location : "Gurugram/Bangaluru" 
    },
    {
        title : "Analyst I IT Governance",
        post : 1,
        department : "Technology",
        location : "Gurugram"
    }
]


// render filter selection
jobs.forEach(job => {
    if(!locations.includes(job.location)){ locations.push(job.location) }
})
filter.innerHTML = locations.map(loc => {
    return `<option value="${loc}" selected>${loc}</option>`
}).join(' ');
filter.firstChild['selected'] = true;

// location filter
filter.onchange = (e) => {
    if(e.target.value === 'All Locations'){
        renderJobs(jobs); return;
    }
    let filtered = jobs.filter(job => job.location === e.target.value);
    renderJobs(filtered)
}


searchForm.onsubmit = (e) => {
    e.preventDefault();
    let value = document.getElementById('search-input').value;
    if(value){
        let filtered = jobs.filter(job => new RegExp(value,'i').test(job.title));
        renderJobs(filtered)
    } else {
        renderJobs(jobs);
    }
}


function renderJobs(jobs){
    total.innerHTML = jobs.length;
    hold.innerHTML = jobs.map(job => {
        return `<div class="opening">
        <div class="col-10 col-md-8 col-lg-4">
            <a href="#">
                ${job.title}
            </a>
        </div>
        <div class="col-2 col-md-4 col-lg-1">${job.post}</div>
        <div class="col-6 col-lg-3 col-xl-2">${job.department}</div>
        <div class="col-6 col-lg-3 col-xl-2">${job.location}</div>
        </div>`
    }).join(' ')
}

window.onload = () => {
    renderJobs(jobs)
}

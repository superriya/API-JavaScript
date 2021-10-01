function fetchAPIData() {
    console.log("Fetch API Data...")
    // console.log(fetch('https://bbc.uat-tribepad.com/members/oauth/api/job/search.json'));
    fetch('https://bbc.uat-tribepad.com/members/oauth/api/job/search.json', {
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
      })
    .then(response => {
        if(!response.ok){
            throw Error('Search API Error');
        }
        return response.json();
        // console.log("Search API Data...", response);
    })
    .then(data => {
        console.log("Search API Data...", data.jobs.job);
        const htmlRecord = data.jobs.job
        .map(job => {
            return `
            <div class="jobdata">
                <p>Job Title: ${job.job_title}</p>
                <p>Reference: ${job.reference}</p>
            </div>
            `;  
        })
        .join(" ");
        // console.log("Jobs Array Data....",htmlRecord);
        document.querySelector('#app').insertAdjacentHTML('afterbegin', htmlRecord); 
    })
    .catch(error => {
        console.log(error);
    })
}
fetchAPIData();


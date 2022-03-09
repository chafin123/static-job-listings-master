const joblistDiv = document.querySelector('.job-list');
const searchBox = document.querySelector('#searchBadgeBox');

//job class
class JobListing {
    constructor(companyName,icon,isFeatured,titleTags = [],jobTitle,ageOfPosting,workType,location,tags = []) {
        this.companyName = companyName,
        this.icon = icon
        this.isFeatured = isFeatured,
        this.titleTags = titleTags;
        this.jobTitle = jobTitle,
        this.ageOfPosting = ageOfPosting,
        this.workType = workType,
        this.location = location,
        this.tags = tags;
    }
    getName () {
        return this.companyName
    }
}
//making objects
let photosnapListing = new JobListing("photosnap","photosnap", true,["NEW!", "FEATURED"],"Senior Frontend Developer", "1d ago","Full Time","USA only",["Frontend", "Senior", "HTML", "CSS", "Javascript"])
let manageListing = new JobListing("Manage","manage", true, ["NEW!", "FEATURED"],"Fullstack Developer","1d ago","Part Time","Remote",["Fullstack", "Midweight","Python","React"]);
let accountListing = new JobListing("Account","account", false, ['NEW!'], "Junior Frontend Developer", "2d ago","Part Time","USA only",["Frontend","Junior","React","Sass","Javascript"]);
let myHomeListing = new JobListing("MyHome","myhome", false, [], "Junior Frontend Developer","5d ago", "Contract","USA Only",["Frontend","Junior","CSS","JavaScript"]);
let loopStudiosLising = new JobListing("Loop Studios","loop-studios",false,[],"Softwar Engineer","1w ago","Full Time","Worldwide", ["Fullstack","Midweight","JavaScript","Sass","Ruby"]);
let faceItListing = new JobListing("FaceIt","faceit", false, [],"Junior Backend Developer","2w ago","Full Time", "UK only",["Backend", "Junior", "Ruby", "RoR"]);
let shortlyListing = new JobListing("Shortly","shortly", false, [], "Junior Developer", "2w ago", "Full Time","Worldwide",["Frontend", "Junior","HTML","Sass","JavaScript"]);
let insureListing = new JobListing("Insure","insure", false, [], "Junior Frontend Developer","2w ago","Full Time", "USA only",["Frontend", "Junior", "Vue", "JavaScript","Sass"]);
let eyecamCoListing = new JobListing("Eyecam Co.","eyecam-co", false, [], "Full Stack Engineer", "3w ago", "Full Time", "Worldwide", ["Fullstack", "Midweight", "JavaScript","Django", "Python"]);
let airFilterCompanyListing = new JobListing("The Air Filter Company","the-air-filter-company", false, [], "Front-end Dev","1m ago","Part Time","Worldwide",["Frontend","Junior","React","Sass","JavaScript"])



let chosenFilters = [];
let jobArray = [photosnapListing, manageListing,accountListing,myHomeListing,loopStudiosLising,faceItListing,shortlyListing,insureListing,eyecamCoListing,airFilterCompanyListing];
const displayListings = (jobObjectArray) => {
    let newJob = [];
 
    //filtering the jobs
    let filteredJobList = [];
    //iterating over the jobs
    if(chosenFilters.length > 0) {
    jobObjectArray.forEach((job) => {
        if(chosenFilters.every(i => job.tags.includes(i))) {
            filteredJobList.push(job)
        }
    })
} else filteredJobList = jobArray
        filteredJobList.forEach(listing => {
            let key = Object.values(listing)
            
        
            newJob.push( `
            <div class="card text-center
            if(key[1] == true) {
                return featuredCard
            } ">
                <div class"card-header">
                    <img src="./images/${key[1]}.svg" class="brandThumb" alt="${listing.companyName} icon">
                    <div class="row">
                        <div class="col brandName text-start">
                            ${key[0]}
                            ${key[3].map((tag) => {
                                if(tag === "NEW!") {
                                    return `
                                    <span class="badge rounded-pill importantBadge newBadge">
                                    ${tag}
                                    </span> 
                                    `
                                }
                                if(tag === "FEATURED") {
                                    return `
                                    <span class="badge rounded-pill importantBadge featuredBadge">
                                    ${tag}
                                    </span> 
                                    ` 
                                } 
                            }).join(" ")}
                        </div>
                    </div>
                    <div class="row text-start positionHeader">
                        <h5 class="title">${key[4]}</h5>
                    </div>
                    <div class="row text-start">
                        <div class="col">
                            <p class="subText">${key[5]}</p>
                            <span class="dot"></span>
                        </div>
                        <div class="col">
                            <p class="subText">${key[6]}</p>
                            <span class="dot secondDot"></span>
                        </div>
                        <div class="col">
                            <p class="subText">${key[7]}</p>
                        </div>
                        <div class="col-2"></div>
                    </div>
                </div> 
                <div class="lineContainer"></div>
                <div class="card-body text-start">
                        ${key[8].map((tag) => {
                                return `
                                <span class="badge searchBadge" value="${tag}" onclick="pushTagToFilter('${tag}')">
                                ${tag}
                                </span>
                                `
                        }).join(" ")}
                </div>
            </div>
            `);
        
    });
    
      joblistDiv.innerHTML = newJob.join(" ");
      if(chosenFilters.length > 0) {
          searchBoxFunction();
        }
};
displayListings(jobArray)

function pushTagToFilter (tagName) {
    if(!chosenFilters.includes(tagName)) {
        chosenFilters.push(tagName);
        displayListings(jobArray)
    }
}
function searchBoxFunction () {
    if(chosenFilters.length > 0) {
        document.querySelector('.searchBox').style.display = "block";
    } else document.querySelector('.searchBox').style.display = "none"
    let tempFilters = [];
    chosenFilters.forEach((filter) => {
    tempFilters.push(
        `
            <span class="badge searchBadge">
                ${filter}
            </span> 
            <span class ="badge cancelButton" onclick="removeFilterFromSearchBar('${filter}')">
                    X
                </span>
                `
                ) 
            })    

        searchBox.innerHTML = tempFilters.join(" ");
    
}
function removeFilterFromSearchBar (filter) {
   const index = chosenFilters.indexOf(filter);
   chosenFilters.splice(index, 1);
   displayListings(jobArray);
   if(chosenFilters.length == 0) {
       document.querySelector('.searchBox').style.display= 'none';
   }
}
function clearFilters () {
    chosenFilters = [];
    displayListings(jobArray);
    if(chosenFilters.length == 0) {
        document.querySelector('.searchBox').style.display= 'none';
    }
}
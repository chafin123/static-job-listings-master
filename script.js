const joblist = document.querySelector('.job-list');
function createJobListing(companyName,titleTags,jobTitle,ageOfPosting,workType,location,tags) {
    companyName,
    titleTags = [];
    jobTitle,
    ageOfPosting,
    workType,
    location,
    tags = [];
}
class JobListing {
    constructor(companyName,isFeatured,titleTags = [],jobTitle,ageOfPosting,workType,location,tags = []) {
        this.companyName = companyName,
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
let photosnapListing = new JobListing("photosnap", true,["NEW!", "FEATURED"],"Senior Frontend Developer", "1d ago","Full Time","USA only",["Frontend", "Senior", "HTML", "CSS", "Javascript"])
let manageListing = new JobListing("Mange", true, ["NEW!", "FEATURED"],"Fullstack Developer","1d ago","Part Time","Remote",["Fullstack", "Midweight","Python","React"])


let jobsList = []; 
jobsList = photosnapListing
console.log(jobsList)
const displayListings = (joblisting) => {
    const htmlstring = jobsList;
        
        for (const key in joblisting) {
            return `
            <div class="card text-center
            if(isFeatured == true) {
                return featuredCard
            } ">
                <div class"card-header">
                    <img src="./images/${joblisting.companyName}.svg" class="brandThumb" alt="${joblisting.companyName} icon">
                    <div class="row">
                        <div class="col brandName text-start">
                            ${joblisting.companyName}
                            ${joblisting.titleTags.map((tag) => {
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
                        <h5>${joblisting.jobTitle}</h5>
                    </div>
                    <div class="row text-start">
                        <div class="col">
                            <p class="subText">${joblisting.ageOfPosting}</p>
                            <span class="dot"></span>
                        </div>
                        <div class="col">
                            <p class="subText">${joblisting.workType}</p>
                            <span class="dot secondDot"></span>
                        </div>
                        <div class="col">
                            <p class="subText">${joblisting.location}</p>
                        </div>
                        <div class="col-2"></div>
                    </div>
                </div> 
                <div class="lineContainer"></div>
                <div class="card-body text-start">
                        ${joblisting.tags.map((tag) => {
                            return `
                            <span class="badge searchBadge">
                            ${tag}
                            </span>
                            `
                        }).join(" ")}
                </div>
            </div>
            `
        }
        
};
joblist.innerHTML = displayListings(jobsList);

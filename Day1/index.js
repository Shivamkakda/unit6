
//  let mainContainer = document.getElementById("cards");
//  async function mostPopularVideo(){
//     // 
//     let r = await fetch(`https://api.imgur.com/3/gallery/search/viral/day?q=cats&q_type=jpg`,{
//         method: "GET",
//         headers: {
//             "content-type": "application/json",
//             "Authorization": "Client-ID 946e304a383aa29"
//         }
//     });
//     let data = await r.json();
//     console.log(data.data)
// }


//  mostPopularVideo();

var timerId;
var displayResult = document.getElementById("searchresult");

async function search(val) {
   
    let res = await fetch(`https://api.unsplash.com/search/photos?client_id=Wi9ocF2wz5fY5eHb5EmlIOMH5X1aq5l4GAV6-RvkhFY&query=${val}}`);
    let data = await res.json();

    return data;
    //set data to localStorage and redirect to other page
}

function appendResults(results){

    displayResult.innerHTML =  null;
    
    results.forEach((res) => {
        let title = document.createElement("p");
        title.setAttribute("id", "searchTitle");
        title.innerText = res.alt_description;
        displayResult.append(title);


    })
}

async function main(){
    let val = document.getElementById("search").value;


    if(val.length < 3)
    {
        displayResult.style.display = "none";
        return false;
    }

    let res = await search(val);
    // console.log("res:", res);

    appendResults(res.results);
}

function debounce(func, delay){

    if(timerId){
        displayResult.style.display = "none";
        clearTimeout(timerId);
    }

    timerId = setTimeout(() => {
        displayResult.style.display = "block";
        func();
    }, delay);
}


async function getData(num) {

    let r = await fetch(`https://api.unsplash.com/photos?query=random&page=${num}&per_page=30&client_id=Wi9ocF2wz5fY5eHb5EmlIOMH5X1aq5l4GAV6-RvkhFY`, {
        method: "GET",
        headers: {
            "content-type": "application/json",
        }
    });
    let data = await r.json();
    showData(data)
    console.log(data)
}

getData(3);



async function showData(data) {

    let container = document.getElementById("cards");

    data.forEach((el) => {

        
        let imgureImg = document.createElement("div");
        imgureImg.setAttribute("id", "cardDiv");

        img = document.createElement("img");
        img.setAttribute("class", "image")
        img.loading = "lazy";
        img.src = el.urls.small;

        let des = document.createElement("p");
        des.setAttribute("class" ,"text1")
        des.innerText = el.user.name
        

        imgureImg.append(img);
        img.style.cursor = "pointer";
        container.append(imgureImg); 


        fecthMasonry('cardDiv', 'image', 4);
    })
}

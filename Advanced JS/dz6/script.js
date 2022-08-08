const link = document.querySelector(".wave-btn");
const div2 = document.querySelector("#div-2");



async function getUserIp(url) {
    const response = await fetch(url);
    const result = await response.json();  
    return result;
} 

async function getFullInformation({ip}) {
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    return data;
}

const showInfoOnPage = ({continent, country, region, regionName, city, district}) => {
    div2.innerHTML += `<ul>
        <li>Your continent:  ${continent ? continent : "NO Information"}</li> <br>
        <li>Your country:  ${country}</li> <br>
        <li>Your region:  ${region}</li> <br>
        <li>Your regionName:  ${regionName}</li> <br>
        <li>Your city:  ${city} </li> <br>
        <li>Your district:  ${district ? district : "NO Information"}</li> <br>
     </ul>`
}

async function onLinkClicked (e) {
    try {
        e.preventDefault();
        let ip =  await getUserIp("https://api.ipify.org/?format=json");
        let userInfo = await getFullInformation(ip);
        showInfoOnPage(userInfo)
        }  catch (Err) {
            console.log(Err.name + Err.message);
        }      
    } 

link.addEventListener("click", onLinkClicked)




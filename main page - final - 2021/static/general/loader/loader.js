

window.addEventListener('load', async (e)=> {
  await myFunction()
  // console.log('loaded')
})

var myVar;

async function myFunction() {
    myVar = await setTimeout(showPage, 500);
    await new Promise((resolve) => setTimeout(resolve, 500))
    // adding functions that need to be run after loading
   refreshScrollValues()
   particlesJS.load("particles", "./static/about-us/particles.json", ()=>{})
}

function showPage() {
    document.getElementById("loadpack").style.display = "none";
    document.getElementById("myDiv").style.display = "block";
}
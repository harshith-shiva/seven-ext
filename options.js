function save(){
    const inputs = [
    { id: "einp", image: "envy.jpg" },
    { id: "winp", image: "wrath.jpg" },
    { id: "linp", image: "lust.jpg" },
    { id: "sinp", image: "sloth.jpg" },
    { id: "grinp", image: "greed.jpg" },
    { id: "ginp", image: "gluttony.jpg" },
    { id: "pinp", image: "pride.jpg" }
  ];

  blockedSites=[];


   inputs.forEach(item => {
    const value = document.getElementById(item.id).value.trim();
    if (value !== "") {
      blockedSites.push({
        url: value,
        image: item.image
      });
    }
  });

  chrome.storage.sync.set({ blockedSites }, () => {
    alert("Sites saved successfully 😈");
  });


      
}

document.getElementById("save").addEventListener("click",save);


document.addEventListener("DOMContentLoaded", () => {
  const myCarousel = document.querySelector('#carousel');
  const carousel = new bootstrap.Carousel(myCarousel, { interval: false });
});
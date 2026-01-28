
    function showOverlay(imageName) {
  
  const overlay = document.createElement("div");
  overlay.id = "site-block-overlay";

  Object.assign(overlay.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100vw",
    height: "100vh",
    backgroundColor: "black", 
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "2147483647", 
    pointerEvents: "auto" 
  });


  const img = document.createElement("img");
  img.src = chrome.runtime.getURL(imageName); 

  Object.assign(img.style, {
    maxWidth: "100%",
    maxHeight: "100%",
    objectFit: "contain",
    borderRadius: "15px"
  });

  
  overlay.appendChild(img);

  
  document.documentElement.appendChild(overlay);
}










chrome.storage.sync.get("blockedSites", data => {

  if (!data.blockedSites) return;

  for (let i = 0; i < data.blockedSites.length; i++) {

    let site = data.blockedSites[i];

    if (location.href.includes(site.url)) {
      showOverlay(site.image);
    }
  }

});

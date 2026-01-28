
<img width="267" height="318" alt="image" src="https://github.com/user-attachments/assets/a249fb78-86a0-434a-a631-307dadb6734b" />











SEVEN is a Chrome extension that blocks websites based on user-defined URLs and displays thematic overlays inspired by the Seven Deadly Sins. Perfect for focusing, self-discipline, or just a bit of dark humor while browsing.

Features

Block Multiple Websites: Add multiple URLs to block from options.

Custom Sin-Themed Overlay: Each blocked site shows a unique “sin” image on top of the page.

Easy Configuration: Simple carousel in the options page to assign URLs to each sin.

Persistent Settings: Uses Chrome storage.sync so your blocked sites stay synced across devices.

Maximum Impact: Overlay appears before the page fully loads, ensuring the blocked site is hidden immediately.

How It Works

Open the Options Page to add URLs for each sin (Envy, Wrath, Lust, Sloth, Greed, Gluttony, Pride).

Save your settings — these are stored in Chrome’s sync storage.

When you visit a blocked site, the extension displays a full-screen overlay with the corresponding sin image.

The page underneath is completely hidden, preventing access until you remove the URL from options.

Installation

Clone this repository:

git clone https://github.com/harshith-shiva/seven-ext.git


Open Chrome → chrome://extensions/.

Enable Developer Mode (top right).

Click Load unpacked and select the project folder.

The SEVEN extension should now appear in your toolbar.

Project Structure
seven-ext/
│
├── content.js          # Content script that blocks pages and shows overlays
├── options.html        # Options page with carousel to add blocked URLs
├── options.js          # Handles saving URLs and initializing carousel
├── popup.html          # Popup for extension (optional)
├── manifest.json       # Chrome Extension manifest
├── envy.jpg            # Sin images
├── wrath.jpg
├── lust.jpg
├── sloth.jpg
├── greed.jpg
├── gluttony.jpg
└── pride.jpg

Permissions

storage – Save blocked sites across devices.

<all_urls> – Monitor all sites to check for blocked URLs.

Notes

Web Accessible Resources: The sin images must be declared in manifest.json under web_accessible_resources for the content script to access them.

Manifest V3: Built using Chrome Manifest V3, so content scripts run securely and overlays load at document_start.

Screenshots

(You can add screenshots of the carousel and overlay here)

Future Improvements

Add a timer mode to temporarily block sites.

Support custom images uploaded by the user.

Add categories or tags for different kinds of distractions.

License

MIT License – feel free to use, modify, or improve this project.

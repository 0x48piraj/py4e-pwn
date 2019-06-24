function hello() {
  chrome.tabs.executeScript({
    file: 'pwn.js'
  }); 
}

document.getElementById('clickme').addEventListener('click', hello);
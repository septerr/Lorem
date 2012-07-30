Lorem = {}
Lorem.clipCopy = function (text) {
    clipboardholder= document.getElementById("clipboardholder");
    clipboardholder.style.display = "block";
    clipboardholder.value = text;
    clipboardholder.select();
    document.execCommand("Copy");
    clipboardholder.style.display = "none";
}

$(function(){
 Lorem.clipCopy("Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.");
 document.getElementById("messages").style.display = "block";
})
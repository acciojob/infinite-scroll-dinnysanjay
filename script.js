//your code here!
let list = document.getElementById("infi-list");

for(let i=1; i<=10; i++) {
    let listItem = document.createElement("li");
    listItem.innerHTML = "Item " + i;
    list.appendChild(listItem);
}
//Next, you need to add an event listener to the window object to listen for the scroll event and check if the user has scrolled to the bottom of the page. Here’s how you can do that:

window.addEventListener('scroll', function() {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        // user has scrolled to bottom, add more items
        for(let i=1; i<=2; i++) {
            let listItem = document.createElement("li");
            listItem.innerHTML = "Item " + i;
            list.appendChild(listItem);
        }
    }
});

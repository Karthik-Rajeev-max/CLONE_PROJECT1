function searchItem() {
    const search = document.querySelector(".srch").value;

    if (search === "") {
        alert("Please enter something to search.");
    } else {
        alert("You searched for: " + search);
    }
}

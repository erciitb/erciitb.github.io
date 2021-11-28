function checkmedia() {

}
document.getElementById('wiki-form').onsubmit = function() {
    window.location = 'https://www.tech-iitb.org/erc-wiki/index.php?search=' + document.getElementById('wiki-search').value + '&title=Special%3ASearch&go=Go';
    return false;
}

function showsidebar() {
    if (window.innerWidth < 600) {
        window.location.href = 'https://www.tech-iitb.org/erc-wiki/index.php/Main_Page'
    }
    document.getElementById("sidebar").className += " checked-sidebar"
    document.getElementById("cancel").className += " checked-cancel"
    document.getElementById("wiki-overlay").style.display = "initial"

}

function hidesidebar() {
    document.getElementById("sidebar").className = document.getElementById("sidebar").className.replace(" checked-sidebar", "")
    document.getElementById("cancel").className = document.getElementById("cancel").className.replace(" checked-cancel", "")
    document.getElementById("wiki-overlay").style.display = "none"

}
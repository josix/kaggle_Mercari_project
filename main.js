function switchContent(contentId) {
    document.getElementsByClassName("active")[0].classList.add('hide');
    document.getElementsByClassName("active")[0].classList.remove('active');
    document.getElementById(contentId).classList.add('active');
    document.getElementById(contentId).classList.remove('hide');
}
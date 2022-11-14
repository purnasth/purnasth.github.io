var percent = document.getElementById("progressbar");
    var percent = document.getElementById("percent");
    var totalHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = function()
    {
        var progress = (window.pageYOffset / totalHeight) * 105;
        progressbar.style.height = progress + "%";
    }
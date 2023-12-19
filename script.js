// get input text and display it on next/another html site
function submitName() {
    var userName = document.getElementById('inName').value;
    if (userName.trim() !== '') {
        window.location.href = 'confession.html?name=' + encodeURIComponent(userName);
    } else {
        alert('Please enter your name.');
    }
}



// Dynamic visibility check for section elements when scrolling and loading the page, so that each element apears smoothly on scroll
document.addEventListener("DOMContentLoaded", function() {
    var sections = document.querySelectorAll('.section');

    function checkVisibility() {
        sections.forEach(function(section) {
            var rect = section.getBoundingClientRect();
            var isVisible = (rect.top <= window.innerHeight * 0.75 && rect.bottom >= window.innerHeight * 0.25);

            if (isVisible) {
                section.classList.add('visible');
            } else {
                section.classList.remove('visible');
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    window.addEventListener("resize", checkVisibility);

    // Initial check when the page loads
    checkVisibility();
});



//spotify embed, for more info visit -> https://developer.spotify.com/documentation/embeds
window.onSpotifyIframeApiReady = (IFrameAPI) => {
    const element = document.getElementById('embed-iframe');
    const options = {
            width: '100%',
            height: '400',
            //keep this playlist or exchange link with you're own
            uri: 'https://open.spotify.com/playlist/1K3WG1DBmEYOSHYqN1svJJ?si=d8a224114ac5456d'
        };
        const callback = (EmbedController) => { };
        IFrameAPI.createController(element, options, callback);
};



// show the current time
function showTime(){
    var date = new Date();
    var h = date.getHours(); 
    var m = date.getMinutes(); 
    var s = date.getSeconds(); 
    var session = "AM";
  
    if(h == 0){
        h = 12;
    }
  
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
  
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
  
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
  
    setTimeout(showTime, 1000);
  }
  
  showTime();



// change Color of element on scroll
document.addEventListener("DOMContentLoaded", function() {
        var rectangleElement = document.querySelector('.rectangle');
        var colors = ['#FB4570', '#F8D210', '#FA26A0']; // you can add more colors or change them

        window.addEventListener("scroll", function() {
            // Change the color based on the scroll position
            var alpha = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * (colors.length - 1);
            var colorIndex1 = Math.floor(alpha);
            var colorIndex2 = Math.ceil(alpha);
            var alphaPercentage = alpha - colorIndex1;

            // Interpolate between the colors
            var interpolatedColor = interpolateColorWithAlpha(colors[colorIndex1], colors[colorIndex2],  alphaPercentage);

            // Change the color based on the interpolated color value
            rectangleElement.style.backgroundColor = interpolatedColor;
        });
    });

    // Function for interpolating between two colors with alpha transparency
    function interpolateColorWithAlpha(color1, color2, alpha) {
        var color1Hex = color1.replace(/#/g, '');
        var color2Hex = color2.replace(/#/g, '');

        var r1 = parseInt(color1Hex.substring(0, 2), 16);
        var g1 = parseInt(color1Hex.substring(2, 4), 16);
        var b1 = parseInt(color1Hex.substring(4, 6), 16);

        var r2 = parseInt(color2Hex.substring(0, 2), 16);
        var g2 = parseInt(color2Hex.substring(2, 4), 16);
        var b2 = parseInt(color2Hex.substring(4, 6), 16);

        var r = Math.round(r1 + alpha * (r2 - r1));
        var g = Math.round(g1 + alpha * (g2 - g1));
        var b = Math.round(b1 + alpha * (b2 - b1));

        return '#' + (1 << 24 | r << 16 | g << 8 | b).toString(16).slice(1);
    }





document.addEventListener('DOMContentLoaded', () => {
    const RCHeader = document.getElementById('h1');
    RCHeader.style.textAlign = 'center';
    sizeAdjust(window.innerWidth, window.innerHeight)
    document.body.style.backgroundColor = `rgb(${100} ${100} ${100})`;
    document.body.style.backgroundImage = 'url(images/RCBACKGROUND.GIF)';

    headerInit();
})

window.addEventListener('resize', () => {
    width = window.innerWidth;
    height = window.innerHeight;
    sizeAdjust(width, height);
})

function sizeAdjust(currWidth, currHeight)
{
    // alert("CALLED ADJUST");
    const leftTarget = document.getElementsByName('Vendor1');
    const rightTarget = document.getElementsByName('Vendor2');
    for (index = 0; index < leftTarget.length; index++)
    {
        leftTarget[index].style.display = 'inline-block';
        rightTarget[index].style.display = 'inline-block';
        leftTarget[index].style.float = 'left';
        rightTarget[index].style.float = 'right';
        leftTarget[index].contentEditable = 'false';
        rightTarget[index].contentEditable = 'false';
        leftTarget[index].style.width = ([window.innerWidth/2] - 60) + 'px';
        leftTarget[index].style.height = '700px';
        rightTarget[index].style.height = '700px';
        rightTarget[index].style.width = ([window.innerWidth/2] - 60) + 'px';
    }

    const image = document.getElementsByName('image');
    for (imgIndex = 0; imgIndex < image.length; imgIndex++)
    {
        image[imgIndex].style.width = '100px';
        image[imgIndex].style.height = '100px';
        image[imgIndex].style.display = 'inline-block';
        image[imgIndex].style.float = 'right';
        image[imgIndex].isContentEditable = 'false';
    }
}

function headerInit()
{
    const RCHEADER = document.getElementById("h1");
    // RCHEADER.style.backgroundColor = `rgb(${120} ${90} ${80})`;
    RCHEADER.style.backgroundImage = `url(images/RCHEADER.jpg)`;    
}
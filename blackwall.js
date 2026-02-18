document.addEventListener('DOMContentLoaded', () => {
    const RCHeader = document.getElementById('h1');
    RCHeader.style.textAlign = 'center';
    sizeAdjust(window.innerWidth, window.innerHeight)
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
        leftTarget[index].style.width = ([window.innerWidth/2] - 70) + 'px';
        rightTarget[index].style.width = ([window.innerWidth/2] - 70) + 'px';
    }
}
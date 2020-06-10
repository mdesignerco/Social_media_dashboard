const switchTheme = document.getElementById('switch');
const switchText = document.getElementById('switchText');

function validateSwitch(){
    let validateClass = document.getElementById('switchState');
    console.log( validateClass.className )
    if(validateClass.className === 'switch-left'){
        switchText.innerText = 'Dark Mode';
        validateClass.className = 'switch';
        switchTheme.style.backgroundColor ='hsl(0, 0%, 100%)'
    } else {
        validateClass.className = 'switch-left'
        switchText.innerText = 'Light Mode';
        switchTheme.style.backgroundColor ='hsl(232, 19%, 15%)'
    }
}

switchTheme.addEventListener( 'click', () => validateSwitch() );
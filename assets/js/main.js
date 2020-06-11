const switchTheme = document.getElementById('switch');
const switchText = document.getElementById('switchText');
const body = document.getElementById('body');
const bgHeader = document.getElementById('bgHeader');
const darkColor = document.getElementsByClassName('darkColor')
const card = document.getElementsByClassName('card')
const colorCard = document.getElementsByClassName('colorCardLight')

function validateSwitch(){
    let validateClass = document.getElementById('switchState');
    console.log( validateClass.className )
    if(validateClass.className === 'switch-left'){
        colorLightTheme()
        switchText.innerText = 'Dark Mode';
        validateClass.className = 'switch';
        switchTheme.style.backgroundColor ='hsl(0, 0%, 100%)'
    } else {
        colorDarkTheme()
        validateClass.className = 'switch-left'
        switchText.innerText = 'Light Mode';
        switchTheme.style.backgroundColor ='hsl(232, 19%, 15%)'
    }
}

function colorDarkTheme() {
    body.style.backgroundColor = 'hsl(230, 17%, 14%)';
    bgHeader.style.backgroundColor = 'hsl(232, 19%, 15%)';
    body.style.color = 'hsl(0, 0%, 100%)'
    fontColor( 'hsl(0, 0%, 100%)' );
    cardColor( 'colorCardDark','colorCardLight' );
}

function colorLightTheme() {
    body.style.backgroundColor = 'hsl(0, 0%, 100%)';
    bgHeader.style.backgroundColor = 'hsl(225, 100%, 98%)';
    body.style.color = 'hsl(228, 12%, 44%)'
    fontColor('hsl(230, 17%, 14%)');
    cardColor('colorCardLight','colorCardDark');
}

function fontColor( colorFont) {
    for ( let i = 0; i < darkColor.length; i++  ) {
        darkColor[i].style.color = colorFont;
    }
}

function cardColor( addClass, removeClass ) {
    for ( let i = 0; i < card.length; i++  ) {
        card[i].classList.remove( removeClass );
        card[i].classList.add( addClass );
    }
}



switchTheme.addEventListener( 'click', () => validateSwitch() );
document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.getElementsByClassName('faq');
    const faqAnswers = document.getElementsByClassName('faqAnswer');
    let activeButton = -1;
    let click = Array(faqButtons.length).fill(true);

    function changeActiveButtonProps(buttonIndex) {
        faqAnswers[buttonIndex].style.display = 'none';
        faqButtons[buttonIndex].innerHTML = '+';
        faqButtons[buttonIndex].style.fontSize = '3rem';
    }

    function changeClickButtonStatus(buttonIndex) {
        faqAnswers[buttonIndex].style.display = 'block';        
        activeButton = buttonIndex;
        faqButtons[buttonIndex].innerHTML = 'x';
        faqButtons[buttonIndex].style.fontSize = '2.5rem';
        click[buttonIndex] = false;
    }

    function changeUnclickButtonStatus(buttonIndex) {
        faqAnswers[buttonIndex].style.display = 'none';
        activeButton = -1;
        faqButtons[buttonIndex].innerHTML = '+';
        faqButtons[buttonIndex].style.fontSize = '3rem';
        click[buttonIndex] = true;
    }

    function handleClick(buttonIndex) {
        if (activeButton !== -1) {
            changeActiveButtonProps(activeButton);
        }
        if (click[buttonIndex] === true) {
            changeClickButtonStatus(buttonIndex);
        } else {
            changeUnclickButtonStatus(buttonIndex);
        }
    }

    for (let i = 0; i < faqButtons.length; i++) {
        faqButtons[i].addEventListener('click', function() {
            handleClick(i);
        });
    }
});
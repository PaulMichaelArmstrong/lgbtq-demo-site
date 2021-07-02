function allyPrompt() {
    let userAnswer = prompt('Do you support LGBTQ+ rights? (yes/no)').toLowerCase();
    while(userAnswer == 'yes' || userAnswer == 'no')
    if(userAnswer == 'yes'){
        document.write ('<img src="yes.png" class="confirm-image" id="hideMe">');
        break;
    } else if (userAnswer == 'no'){
        document.write ('<img src="no.png" class="confirm-image" id="hideMe">');
        break;
    } else {
        alert('Silly goose! It is a yes or no queston.');
    }
}

allyPrompt()


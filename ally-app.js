function allyPrompt() {
    let userAnswer = prompt('Do you support LGBTQ+ rights? (yes/no)');
    while((userAnswer.toLowerCase() != 'yes') && (userAnswer.toLowerCase() != 'no')){
        userAnswer = prompt('Do you support LGBTQ+ rights? (yes/no)');
    }
    if(userAnswer.toLowerCase() == 'yes'){
        document.write ('<img src="yes.png" class="confirm-image" id="hideMe">');
    } else if (userAnswer.toLowerCase() == 'no'){
        document.write ('<img src="no.png" class="confirm-image" id="hideMe">');
    }
}
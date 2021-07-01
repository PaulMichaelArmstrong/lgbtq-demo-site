function allyPrompt() {
    let ally = prompt('Do you support LGBTQ+ rights? (yes/no)').toLowerCase();
    if(ally == 'yes'){
        document.write ('<img src="yes.png" class="confirm-image" id="hideMe">')
    } else if (ally=='no'){
        document.write ('<img src="no.png" class="confirm-image" id="hideMe">')
    } else {
        document.write ('<img src="else.png" class="confirm-image" id="hideMe">')
    }
}

allyPrompt();




// ==UserScript==
// @name         Sporcle Smashed
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  A simple script that auto answers on any sporcle game
// @author       HarryFoster1812
// @match        https://www.sporcle.com/games/*
// @icon         https://s3.amazonaws.com/sporcle-game/wp-content/uploads/2020/05/sporcle_logo.png
// ==/UserScript==

(function() {
    'use strict';

    function save_to_cache(answers_){
        localStorage.setItem('Sporcle_answers', JSON.stringify(answers_));
    };

    function read_from_cache(){
        let answers = localStorage.getItem('Sporcle_answers');
        answers = JSON.parse(answers);
        return answers
    };

    function scrape(){
        let _answers = document.querySelectorAll(".d_value.wrong");
        let text_answers = [];
        for (let i=0; i<_answers.length; i++){
          text_answers.push(_answers[i].innerText);
        };
        save_to_cache(text_answers);
        alert('successfuly scraped and wrote answers to cache');
    };

    function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

    async function output(im_not_good_at_variable_names, delay){
        if (im_not_good_at_variable_names.length === 1){
            alert('Answers list is empty');
            return
        };

        for (const element of im_not_good_at_variable_names){
            let input = document.getElementById('gameinput');
            input.value = element;
            let inputEvent = new Event('input');
            input.dispatchEvent(inputEvent);
            await sleep(delay);
        };
    };

    document.addEventListener("keydown", (event) => {
        if (event.altKey && event.keyCode === 65) {
            var answers = read_from_cache();
            let delay = parseInt(prompt('How many ms delay'))
            output(answers, delay);
        };
    });

    document.addEventListener("keydown", (event) => {
        if (event.altKey && event.keyCode === 82) {
            scrape();
        };
    });

    document.addEventListener("keydown", (event) => {
        if (event.altKey && event.keyCode === 81) {
            let time = document.getElementById('time');
            time.textContent = prompt('What time do you want to display');
        };
    });

    document.addEventListener("keydown", (event) => {
        if (event.altKey && event.keyCode === 87) {
            let score = document.getElementsByClassName('currentScore')[0];
            let percentage = document.getElementById('userPct');
            let new_score = parseInt(prompt('What is your new score'));
            let total = score.textContent.split('/')[1];
            total = parseInt(total);
            score.textContent = new_score.toString().concat('/', total.toString());
            percentage.textContent = Math.round((new_score/total)*100);
        };
    });

})();

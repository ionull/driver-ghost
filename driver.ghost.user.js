// ==UserScript==
// @name        driver ghost
// @description automatically commit driver training
// @include     http://www.350500.prcjx.net/admin/std/training/*
// @require     http://code.jquery.com/jquery-2.1.1.min.js
// @version     1
// ==/UserScript==
$(function () {
    var url = location.href;

    function commit() {  
        var i = setInterval(function() {
            location.href = url;
            clearInterval(i);
        }, 2);
        
        save_study_time('out');
    };

    var tid;

    function startTimer() {
    	clearInterval(tid);
        var r = Math.random();
        if (r < 0.5) {
            r += 0.5;
        }
        
        var m = Math.round(r*20+5);            
        var rand = m*60*1000;
        
    	tid = setInterval(commit, rand);
        console.log('starting...' + tid + " in " + m + " minuts");
    }

    startTimer();
});
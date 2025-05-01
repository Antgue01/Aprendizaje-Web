"use strict";
import { stagger, utils, eases, createTimeline } from 'https://cdn.jsdelivr.net/npm/animejs/+esm';


const treesDuration = 1000;
const ballDelay = treesDuration * .8;
const ballDuration = 1000;
const treesStrikeDelay = ballDelay + ballDuration * .3;
const treesStrikeDuration = 350;



const trees = document.querySelectorAll('.bowling__container .pins__container i');
const ball = document.querySelector('.bowling__container .fa-bowling-ball');


const timeline = createTimeline({
    autoplay: true,
    loop: true,
    //Trees setting
}).add(trees, {


    keyframes: [
        {
            opacity: 0,
            translateY: stagger(["-10px", "-40px"]),
        },

        {
            opacity: 1,
            translateY: '0px',
        }],
    duration: treesDuration,
    delay: () => utils.random(100, 300),
    ease: eases.outElastic(.1, .8)
    //Ball setting
}).add(ball, {
    keyframes: {

        '0%': {
            opacity: 0
        },
        '20%': {
            translateY: '-40px',
            translateZ: '-50px',
            rotate: '-100deg',
        },
        '25%': {
            translateY: '0px',
            translateZ: '0px',
            rotate: '0deg',
            opacity: 1,

        },
        '77%': {
            opacity: 1,
        },
        '100%': {
            opacity: 0,
            translateY: '90px',
            translateZ: '40px',
            rotate: '1030deg',
        },
    },
    duration: ballDuration,
    easing: 'linear',
},ballDelay)
//Trees strike 
.add(trees, {
        keyframes: {

        '30%': {
            rotate: 0
        },
        '65%': {

            translateY: stagger(["0px", "0px"],{
                modifier: v => utils.random(-30, -10) ,
            }),
            
        },
        '100%': {
            rotate: stagger(["0", "0"],{
                //cambiamos el valor por un valor aleatorio entre 15 y 90 en una dirección aleatoria
                modifier: v=> utils.random(15,90) * (Math.random() < 0.5 ? 1 : -1),
            }) ,
            translateY: 0,
        },
    },
    easing:'linear',
    delay: stagger([100, 350]),
    duration: treesStrikeDuration
    
},treesStrikeDelay).add(trees, {
    keyframes: {
        '0%':{
            opacity: 1,
        },
        '100%': {
            opacity: 0,
        },
    }
    ,duration:500,
},treesStrikeDelay + treesStrikeDuration);
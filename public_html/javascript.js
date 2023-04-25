/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$(document).ready(inicio);

function inicio() {
    
    

    //ESCRIBIR PARÃ€METROS DE TYPE IT
    new TypeIt("#simpleUsage", {
        strings: "",
        speed: 50,
        waitUntilVisible: true
    }).go();
    
    // DAR INICIO A BX SLIDER
    $('.slider').bxSlider();


}
    
    
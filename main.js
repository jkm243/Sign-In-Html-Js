$(document).ready(function () {
  

$(".login2").hide();

// La fonction qui fait le changement de form
function changement(s,s1,active,underl,s2,login,login2){
  $(s).click(function () {
    $(s1).removeClass(active).addClass( underl);
    $(s2).removeClass( underl ).addClass(  active );
    $(login2).parent().addClass(active);
    $(login).parent().siblings().removeClass(active);
    $(login).hide();
    $(login2).show();
  });
}

// On l'execute pour quitter de sign in a signup et inversement
changement("#SU",".s1"," active"," underlineHover", ".s2", ".login",".login2");
changement("#SI",".s2"," underlineHover", " active", ".s1", ".login2",".login");


// Voila donc comment chacune de ces deux fonctions lancees ci-haut s'executera
  // $("#SU").click(function () {
  //   $(".s1").removeClass( " active" ).addClass( " underlineHover" );
  //   $(".s2").removeClass( " underlineHover" ).addClass( " active" );
  //   $(".login2").parent().addClass("active");
  //   $(".login").parent().siblings().removeClass("active");
  //   $(".login").hide();
  //   $(".login2").show();
  // });

  // $("#SI").click(function () {
  //   $(".s2").removeClass( " active" ).addClass( " underlineHover" );
  //   $(".s1").removeClass( " underlineHover" ).addClass( " active" );
  //   $(".login").parent().addClass("active");
  //   $(".login2").parent().siblings().removeClass("active");
  //   $(".login2").hide();
  //   $(".login").show();
  // });

});

// P.S: J'ai laisse la majorite de ton code et n'ai touche qu'a ce qu'il fallait pour l'execution 
// du travail demande. si donc il y a du superflu et de la redondance enleve juste le code 
// que tu as qui ne servirait a rien.
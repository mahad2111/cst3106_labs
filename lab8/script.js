$(document).ready(function() {
    $('#rollButton').click(function() {
      
      $('#dice').addClass('rolling');
  
     
      const rollingInterval = setInterval(() => {
        const unicodeDice = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
        const randomIndex = Math.floor(Math.random() * 6);
        $('#dice').text(unicodeDice[randomIndex]);
      }, 100);
  
     
      setTimeout(() => {
        clearInterval(rollingInterval);
        $('#dice').removeClass('rolling');
  
        const finalValue = Math.floor(Math.random() * 6) + 1;
        const unicodeDice = ["\u2680", "\u2681", "\u2682", "\u2683", "\u2684", "\u2685"];
        $('#dice').text(unicodeDice[finalValue - 1]);
      }, 1000);
    });
  });
  
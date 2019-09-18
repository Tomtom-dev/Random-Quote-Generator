// You can find below an array of quotes with 4 information:  quote, sources, year and citation if possible.

var quotes =[
    {
    quote : 'The success is a consequence not a goal. ',
    source : 'Gustave Flaubert',
    year: 1862
    },
    {
    quote: 'You must eat to live. You must not live to eat.',
    source: 'Moliere',
    year: 1668
    },
    {
    quote: 'There is only one way to learn, it’s throught action .',
    source: 'Paolo Coelho',
    citation: 'The alchemist',
    year: 1988
    },
    {
    quote: 'We only see clearly with the heart. The essential is invisible to the eyes. ',
    source: 'Antoine de Saint-Exupery',
    citation: 'Le petit prince',
    year:1943
    },
    {
    quote: 'The best way to predict futur is to create it.',
    source:'Peter Drucker',
    year: 2000
    },
    {
    quote: 'What i know is just i don’t know anything',
    source: 'Socrate',
    year: 'IV century B.C'
    }
    ];
 
// Hereby the function to get a random quote

console.log(quotes)

        function getRandomQuote(){
    var RandomNum= Math.floor(Math.random()*(quotes.length));
    return quotes [RandomNum];
        }
    
// Below the function to write the proprieties of the quote selected randomly 

console.log(getRandomQuote());


    function printQuote (){

        var random= getRandomQuote();

        var message = '';

        message+='<p class="quote">'+ random.quote + '</p>'

        message+='<p class="source">'+ random.source 
        if (random.citation){
        message+= '<span class="citation"> '+ random.citation+' </span>'
        }

        if (random.year){
        message+= '<span class="year"> '+ random.year+' </span>'
        }
        message+= '</p>'


document.getElementById('quote-box').innerHTML=message;

return message;
    }


// extra credit generate a random color in the background

function random_bg_color() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
 console.log(bgColor);
  
    document.body.style.background = bgColor;
    document.getElementById('loadQuote').onclick = bgColor;
    }

    random_bg_color();


// extra credit auto refresh the quote and color background every 4 second 

setInterval(printQuote,4000);
setInterval(random_bg_color,4000);


/** click the button it for load a random quote 
    click the button it load a random color
  **/


    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
    document.getElementById('loadQuote').addEventListener('click', random_bg_color, false);
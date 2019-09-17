// You can find below an array of quotes with 3 information:  quote sources and year.

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
    source: 'The alchemist,Paolo Coelho',
    year: 1988
    },
    {
    quote: 'We only see clearly with the heart. The essential is invisible to the eyes. ',
    source: 'Le petit Prince, Antoine de Saint-Exupery',
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

console.log(message)
document.getElementById('quote-box').innerHTML=message;

return message;
    }

// the button to click for load a random quote

    document.getElementById('loadQuote').addEventListener("click", printQuote, false);
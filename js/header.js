var api = 'https://raw.githubusercontent.com/Musaib/responsigation/master/navigation.json';

$.getJSON(api, getData)

function getData(data){
    var main = Handlebars.compile( $( "#header" ).html() );
    Handlebars.registerPartial( "list", $( "#list" ).html() );
    $( "#nav" ).html( main({ items: data.items }) );
}
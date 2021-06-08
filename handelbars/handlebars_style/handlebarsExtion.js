$(document).ready( () => {
    const script = $("#script_template").html();

    const scriptCompile = Handlebars.compile(script);

    const object_country = {
        "form_text" : "form validation in Handlebars.js",
        "countryName" : [
            {option : "India"},
            {option : "Cambodia"},
            {option : "Malaysia"},
            {option : "Vietnam"},
            {option : "Philippines"},
            {option : "Bahrain"},
            {option : "Taiwan"},
            {option : "Singapore"},
            {option : "Japan"},
            {option : "Thailand"}
        ],

        "cityName" : [
            {capital : "Delhi"},
            {capital : "Phnom Penh"},
            {capital : "Kuala Lumpur"},
            {capital : "Hanoi"},
            {capital : "Manila"},
            {capital : "Manama"},
            {capital : "Taipei"},
            {capital : "Singapore"},
            {capital : "Tokyo"},
            {capital : "Bangkok"},
        ],

        "form" : {
            "information" : "Form validation is a “technical process where a web-form checks if the information provided by a user is correct."
        }
    }

    const coutryList = scriptCompile(object_country);

    $("#output").html(coutryList);
})

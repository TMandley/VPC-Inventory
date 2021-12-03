jQuery(document).ready(function () {
    //list of names from product list
    let myListy = [];
    $('table.ellipsis-wrap tbody tr td:first-of-type a').each(function () {
        myListy.push($(this).text());
    });
    
    $('table.waffle tbody tr').on("load", $('table.waffle tbody tr').each(function () {
        if ($(this).children().length > 0) {
            let searchName = $(':nth-child(3)', this).text();
            let listIndex = myListy.indexOf(searchName);
            //if value is in list, set quantity via attr change
            if (listIndex !== -1) {
                let changer = $(`table.ellipsis-wrap tbody tr:nth-child(${listIndex + 1}) td input.onhand`);
                changer.focus();
                changer.trigger("click");
                changer.attr('value', $(':nth-child(4)', this).text());
            };
        };
    }));
});

$(document).ready(function () {
    const productUsers = [2, 21, 30, 53];
    let currUser = walkMeData.currentUser.id;
    let myDeleteFunction = function (e) {
      let idx = $(this).index();
      return idx == 1 || idx == 2 || idx == 3 || idx == 4 || idx == 6;
    };
    let thePageIAmOn = window.location.pathname;
    let myRegExGuy = /view/;
    if(productUsers.includes(currUser)){
      console.log('hello');
    }else{
      console.log('nope');
      if(thePageIAmOn == '/products/' || thePageIAmOn == '/products'){
        let addButton = document.getElementsByClassName('btn btn-large pull-right no-print btn-success ng-isolate-scope')[0];
        addButton.style.display = 'none';
        $('form table tr td').filter(myDeleteFunction).css("display", "none");
        $('form table tr td div div').filter(function(e) {
          let idx = $(this).index();
          return idx == 1 || idx == 2;
        }).css("display", "none");
        $('form table thead tr th').filter(myDeleteFunction).css("display", "none");
        $('form table tbody tr td a').each(function() {
            $(this).css("pointer-events", "none");
        });
      }
      else if(myRegExGuy.test(thePageIAmOn)){
        console.log('nah');
        window.location.href = 'https://us.idexxneo.com/products/';
      }
    }
});

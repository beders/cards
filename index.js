$ = require('bootstrap');
require('jquery-ui');

function cards() {
  console.log('cards!!');
  $('.card').draggable({ revert:'invalid', zIndex:100 });
  $('.stream,.work-area,.team-area,.tracker,.card').droppable({ greedy: true, hoverClass: 'over',tolerance: 'pointer', drop: handleDrop
  });
}

function handleDrop(e, ui) {
    var dropTarget = $(this);
    // stolen from Dana Hartweg
    //making sure the draggable div doesn't move on its own until we're finished moving it
    ui.draggable.draggable("option", "revert", false);

    //getting current div old absolute position
    var oldPosition = ui.draggable.offset();

    //assigning div to new parent
    ui.draggable.appendTo(dropTarget);

    //getting current div new absolute position
    var newPosition = ui.draggable.offset();

    //calculate correct position offset
    var leftOffset = oldPosition.left - newPosition.left;
    var topOffset = oldPosition.top - newPosition.top;
    /*if(oldPosition.left > newPosition.left) {
     leftOffset = (oldPosition.left - newPosition.left);
     } else {
     leftOffset = -(newPosition.left - oldPosition.left);
     }

     if(oldPosition.top > newPosition.top) {
     topOffset = (oldPosition.top - newPosition.top);
     } else {
     topOffset = -(newPosition.top - oldPosition.top);
     }*/

    //instantly offsetting the div to it current position
    ui.
        draggable.animate( {
            left: '+=' + leftOffset,
            top: '+=' + topOffset
    }

        , 0 );
    //allowing the draggable to revert to it's proper position in the new column
    ui.draggable.draggable( "option","revert",

        'invalid' );
     if (dropTarget.hasClass('tracker')) {
         ui.draggable.fadeOut();
         // dropTarget.css('background-image','url(' + ui.draggable.find('.card-image').attr('src') + ')');
         $('<img>').attr('src', ui.draggable.find('.card-image').attr('src')).addClass('img-rounded').fadeIn().appendTo(dropTarget);
     }
}

module.exports = cards;

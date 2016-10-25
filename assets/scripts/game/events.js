'use strict';

const addHandlers = () => {
  $('.instruction-page').hide(0);
  $('.home-page').fadeOut(4000,function(){
  $('.instruction-page').show();
});

};


module.exports = {
  addHandlers
};

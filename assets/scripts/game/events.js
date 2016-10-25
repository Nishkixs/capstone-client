'use strict';

const addHandlers = () => {
  $('.instruction-page').hide(0);
  $('.instruction2-page').hide(0);
  $('.home-page').fadeOut(6000,function(){
  $('.instruction-page').show();
  $('.instruction-page').fadeOut(4000,function(){
  $('.instruction2-page').show();
  });
});

};


module.exports = {
  addHandlers
};

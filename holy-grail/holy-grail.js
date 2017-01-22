/*
* Simple script to add option for user to change the layout
* orientation of the page.
*/
var layoutToggle = document.getElementById('layout-toggle'),
    contEl       = document.getElementsByClassName('container')[0],
    footEl       = document.getElementsByClassName('footer')[0],
    layoutToggle = false;

function toggle() {
  if(!layoutToggle) {
    layoutToggle = true;
    console.log('turned on', layoutToggle);

    contEl.style.width = 100 + '%';
    contEl.style.marginTop = 0 + 'px';
    footEl.style.width = 100 + '%';
    footEl.style.marginBottom = 0 + 'px';
  }
  else {
    layoutToggle = false;
    console.log('turned off', layoutToggle);
    contEl.style.width = 90 +'%';
    contEl.style.marginTop = 40 + 'px';
    footEl.style.width = 90 + '%';
    footEl.style.marginBottom = 40 + 'px';
  }

}

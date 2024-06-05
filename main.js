/* eslint-disable no-unused-vars */
/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
// eslint-disable-next-line no-unused-vars
function myFunction () {
  document.getElementById('myDropdown').classList.toggle('increase-height')
  document.getElementsByClassName('dropbtn headerLogo').style.color = 'white'
  const element = document.getElementById('dropbtn')
  if (element.style.color === 'black') {
    element.style.color = 'white'
  } else {
    element.style.color = 'red'
  }
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches('.dropbtn')) {
    const dropdowns = document.getElementById('myDropdown')

    dropdowns.classList.remove('increase-height')
    // var i;
    // for (i = 0; i < dropdowns.length; i++) {
    //   var openDropdown = dropdowns[i];
    //   if (openDropdown.classList.contains('show')) {
    //     openDropdown.classList.remove('show');
    //   }
    // }
  }
}
// eslint-disable-next-line no-unused-vars
function more () {
  const plusDropdown = document.getElementById('plus')
  const moreContent = document.getElementById('moreDropdown')
  const minusDropdown = document.getElementById('minus')

  if (moreContent.style.display === 'none') {
    moreContent.style.display = 'block'
  } else {
    moreContent.style.display = 'none'
  }

  if (minusDropdown.style.display === 'none') {
    minusDropdown.style.display = 'block'
    plusDropdown.style.display = 'none'
  } else {
    minusDropdown.style.display = 'none'
    plusDropdown.style.display = 'block'
  }
}

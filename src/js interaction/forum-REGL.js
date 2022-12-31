var item1 = document.getElementById("first-item")
var item2 = document.getElementById("second-item")
var flexbox = document.getElementById("flexbox")

item1.addEventListener('mouseover', function() {

    item1.style.color = 'red'

})

item1.addEventListener('mouseout', function() {

    item1.style.color = 'white'

})

item2.addEventListener('mouseover', function() {

    item2.innerHTML = 'Forum (here)' 
    item2.style.color = 'red'

})

item2.addEventListener('mouseout', function() {

    item2.innerHTML = 'Forum'
    item2.style.color = 'white'

})

flexbox.addEventListener('mouseover', function() {

    flexbox.style.borderColor = 'red'

})

flexbox.addEventListener('mouseout', function() {

    flexbox.style.borderColor = 'white'

})


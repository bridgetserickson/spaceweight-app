
var planets = [
    ['Pluto', 0.06],
    ['Neptune', 1.148],
    ['Uranus', 0.917],
    ['Saturn', 1.139],
    ['Jupiter', 2.640],
    ['Mars', 0.3895],
    ['Moon', 0.1655],
    ['Earth', 1],
    ['Venus', 0.9032],
    ['Mercury', 0.377],
    ['Sun', 27.9]
                    ];    

var sel = document.getElementById('planets');
var fragment = document.createDocumentFragment();
planets.forEach(function(planet, index) {
    var opt = document.createElement('option');
    opt.innerHTML = planet[0];
    opt.value = planet[1];
    fragment.appendChild(opt);
});
sel.appendChild(fragment);

function handleClickEvent(e) {
    var input = document.getElementById('user-weight').value;
    var planetWeight = document.getElementById('planets').value;
    var planetName = sel.options[sel.selectedIndex].innerHTML;
    var output = input * planetWeight;
    document.getElementById('output').innerText = `If you were on ${planetName}, you would weigh ${output}lbs!`;
    }

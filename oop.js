let person = new Object({
    name: 'Chris',
    age: 38,
    greeting: function() {
        alert('Hi! I\'m ' + this.name + '.');
    }
});

function person1(){
    person.greeting()
    document.getElementById("demo").innerHTML = person.name
}
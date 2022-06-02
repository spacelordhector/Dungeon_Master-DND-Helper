//Example fetch using DnD5eAPI - place subclasses in ul

//Starting the showing the spells button.
document.querySelector('#show-spells').addEventListener('click', showSpells)

function showSpells() {
    fetch(`https://www.dnd5eapi.co/api/spells`)
        .then(res => res.json())
        .then(data => {
            console.log(data.results)
            if ()//LEFT OFF HERE TO FIND OUT HOW TO KNOW IF THERE IS SOMETHING IN THE DOM.
                for (let i = 0; i < data.results.length; i++) {
                    //console.log(data.results[i].name) ---- This shows the user all the spells in DND.
                    let name = document.createElement('li')
                    name.textContent = data.results[i].name
                    document.querySelector('#list-spells').appendChild(name)
                }
        })
        .catch(error => console.log(error))
}

//This function outputs to the DOM 
document.querySelector('button').addEventListener('click', getFetch)

function getFetch() {
    // if (document.querySelector('#list-spells').textContent) {
    //     document.querySelector('#list-spells').style.display = 'none'
    // }
    const choice = document.querySelector('input').value
    const url = `https://www.dnd5eapi.co/api/spells/${choice}`

    fetch(url)
        .then(res => res.json()) // parse response as JSON
        .then(data => {
            console.log(data)
        })
        .catch(err => {
            console.log(`error ${err}`)
        });
}


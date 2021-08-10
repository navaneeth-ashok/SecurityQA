const addHeading = 
(elem, txt) => {
    elem.innerHTML = `<h1>${txt}</h1>`
};

const addContent = 
(elem, txt) => {
    elem.innerHTML = `<p>${txt}</p>`
}

export {addHeading, addContent};
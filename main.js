function generateList(array) {
    let list = '<ul>';

    array.map((el) => {
        if (Array.isArray(el)) {
            list += `<li>${generateList(el)}</li>`;
        } else {
            list += `<li>${el}</li>`;
        }
    });

    return list += '</ul>'
}

const array = [1,2, [1.1, 1.2, [2.1, 2.2, [3.1, 3.2], 2.3], 1.3], 3];

document.body.innerHTML = generateList(array);
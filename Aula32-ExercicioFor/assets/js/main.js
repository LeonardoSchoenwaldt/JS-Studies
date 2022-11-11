const elements = [
    { tag: 'p', text: 'Deus é top.' },
    { tag: 'div', text: 'Deus é top.' },
    { tag: 'section', text: 'Deus é top.' },
    { tag: 'footer', text: 'Deus é top.' }
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];
    let createdTag = document.createElement(tag);
    let createdText = document.createTextNode(text);

    createdTag.appendChild(createdText);
    div.appendChild(createdTag);
}

container.appendChild(div);
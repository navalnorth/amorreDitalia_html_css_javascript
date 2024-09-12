function adjustPadding() {
    const contents = document.querySelectorAll('.content');

    contents.forEach(content => {
        const titreElement = content.querySelector('.titre');
        const functionElement = content.querySelector('.function, .function2');
        if (titreElement && functionElement) {
            const functionHeight = functionElement.offsetHeight;
            titreElement.style.height = `${functionHeight}px`;
            titreElement.style.padding = '0 15px';
            titreElement.style.display = 'flex';
            titreElement.style.alignItems = 'center';
            titreElement.style.justifyContent = 'center';
        }
    });
}

window.onload = adjustPadding;
window.onresize = adjustPadding;

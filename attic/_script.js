function freeplane_docs_execute_script() {
    const questionMarkAll = /\?.*/;
    const fourZeroFour = document.querySelector('div#four-zero-four');
    if (fourZeroFour) {
        const locationShort = location.href.replace(location.origin, '');
        const atticHref = locationShort.split('/docs/')[0] + '/docs/attic/#/';
        const lastSegment = location.href.replace(questionMarkAll, '').split('/').pop();
        const targetHref = atticHref + lastSegment;
        const fourZeroFour = document.querySelector('div#four-zero-four');
        fourZeroFour.innerHTML = `Try the Attic: <a href="${targetHref}">${targetHref}</a>`;
    } else {
        const toc = document.querySelector('div#toc');
        if (toc) {
            const lst = document.querySelector('section.content').querySelectorAll('h1,h2,h3,h4,h5,h6');
            if (lst.length > 0) {
                let topH = 'H6';
                for (let h of lst) {
                    topH = h.tagName < topH ? h.tagName : topH;
                }
                const blockquote = document.createElement('blockquote');
                toc.insertAdjacentElement('afterBegin', blockquote);
                blockquote.insertAdjacentHTML('afterBegin', '<span style="font-weight: 600;">Contents</span><br>');
                const ul = document.createElement('ul');
                blockquote.insertAdjacentElement('beforeEnd', ul);
                for (let h of lst) {
                    const li = document.createElement('li');
                    ul.insertAdjacentElement('beforeEnd', li);
                    li.style.marginLeft = `${h.tagName[1]-topH[1]}em`;
                    const a = document.createElement('a');
                    li.insertAdjacentElement('beforeEnd', a);
                    a.href = `${location.hash.replace(questionMarkAll, '')}?id=${h.id}`;
                    a.textContent = h.textContent;
                }
                //toc.insertAdjacentHTML('afterEnd', '<hr>');
            }
        }
    }
}

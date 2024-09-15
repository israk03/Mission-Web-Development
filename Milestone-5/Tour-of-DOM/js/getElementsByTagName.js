const paragraphs = document.getElementsByTagName("p");

for(let i = 0; i < paragraphs.length; i++){
    console.log(paragraphs[i]);
}

// lets modify each p tag's text
for(let i = 0; i < paragraphs.length; i++){
    paragraphs[i].textContent = `This is updated paragrap ${i+1}`;
}
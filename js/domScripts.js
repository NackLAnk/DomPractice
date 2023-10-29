document.addEventListener("DOMContentLoaded", function () {
    const paragraph = document.getElementById("head");
    
    const text = paragraph.innerHTML;
    const words = text.split(" ");
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > 8) {
            words[i] = `<span style="background-color: yellow">${words[i]}</span>`;
        }
    }
    paragraph.innerHTML = words.join(" ");
    
    const sourceLink = document.createElement("a");
    sourceLink.href = "https://www.inc.com/jeff-haden/this-new-linkedin-study-reveals-top-8-job-interview-questions-and-how-great-job-candidates-answer-them.html";
    sourceLink.textContent = "Source";
    paragraph.insertAdjacentElement("afterend", sourceLink);
    
    paragraph.innerHTML = paragraph.innerHTML.replace(/\./g, ".<br>");
    
    const wordCount = text.split(" ").length;
    const heading = document.createElement("h2");
    heading.textContent = `Word Count: ${wordCount}`;
    document.body.insertBefore(heading, paragraph);
    
    paragraph.innerHTML = paragraph.innerHTML.replace(/\?/g, '&#129320;').replace(/!/g, '&#128558;');
});

const cvButton = document.getElementById('cvButton');
let resume = document.getElementById('res');
resume.style.visibility = 'hidden'; 

cvButton.addEventListener('click', ()=>{
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF('p', 'pt', 'letter');
    resume.style.visibility = 'visible';
    doc.html(resume, {
        callback: function (doc) {
            doc.save('Resume - Hazel Rojas Zamora.pdf');
            resume.style.visibility = 'hidden'; 
        },
        x: 15,
        y: 40,
        width: 532, 
        windowWidth: 1400, 
        html2canvas: {
            scale: 0.4
        }
    });
});
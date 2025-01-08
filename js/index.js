const cvButton = document.getElementById('cvButton');
let resume = document.getElementById('resume');
resume.style.display = 'none'; 

cvButton.addEventListener('click', ()=>{
    const { jsPDF } = window.jspdf;
    let doc = new jsPDF('p', 'pt', 'letter');
    resume.style.display = 'block';
    doc.html(resume, {
        callback: function (doc) {
            doc.save('Resume - Hazel Rojas Zamora.pdf');
            resume.style.display = 'none'; 
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
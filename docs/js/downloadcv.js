
    document.getElementById('downloadCV').addEventListener('click', function() {
        const link = document.createElement('a');
        link.href = './images/CV_Pesimo-Wendy.pdf'; 
        link.download = 'CV_Pesimo-Wendy.pdf'; //file name pag na-dl yung cv q
        link.click(); // triggers the download
    });

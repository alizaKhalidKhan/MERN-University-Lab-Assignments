function displayContent() {
    const selector = document.getElementById('contentSelector');
    const contentDisplay = document.getElementById('contentDisplay');
    
    const selectedValue = selector.value;
    let content = '';

    if (selectedValue === 'option1') {
        content = `
            <h2>Web Development</h2>
            <p>Web development involves building and maintaining websites. It includes aspects such as web design, web programming, and database management.</p>
            <p>Key technologies include:</p>
            <ul>
                <li>HTML (HyperText Markup Language)</li>
                <li>CSS (Cascading Style Sheets)</li>
                <li>JavaScript</li>
                <li>Backend languages (e.g., Node.js, PHP, Python)</li>
            </ul>
            <p>Web developers can specialize in frontend, backend, or full-stack development.</p>
        `;
        document.body.style.backgroundColor='aliceblue';
    } else if (selectedValue === 'option2') {
        content = `
            <h2>Data Science</h2>
            <p>Data science is a multidisciplinary field that uses scientific methods, algorithms, and systems to extract knowledge and insights from structured and unstructured data.</p>
            <p>Key areas include:</p>
            <ul>
                <li>Data analysis and visualization</li>
                <li>Machine learning</li>
                <li>Statistical modeling</li>
                <li>Big data technologies (e.g., Hadoop, Spark)</li>
            </ul>
            <p>Data scientists often use programming languages like Python and R for their work.</p>
        `;
        document.body.style.backgroundColor='pink';
    } else if (selectedValue === 'option3') {
        content = `
            <h2>Artificial Intelligence</h2>
            <p>Artificial Intelligence (AI) involves creating systems that can perform tasks that typically require human intelligence. This includes areas like speech recognition, decision-making, and language translation.</p>
            <p>Key concepts include:</p>
            <ul>
                <li>Machine Learning</li>
                <li>Natural Language Processing (NLP)</li>
                <li>Computer Vision</li>
                <li>Robotics</li>
            </ul>
            <p>AI is transforming industries by improving efficiency and enabling new capabilities.</p>
        `;
        document.body.style.backgroundColor='plum';
    } else {
        content = ''; 
        document.body.style.backgroundColor='white';// Clear content if no valid option is selected
    }

    contentDisplay.innerHTML = content;
}

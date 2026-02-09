const http = require('http');

const PORT = 3000;

const html = `
<!DOCTYPE html>
<html>
<head>
    <title>Project 1 | AWS DevOps CI/CD</title>
    <style>
        body {
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            color: #ffffff;
            text-align: center;
        }
        .container {
            padding: 40px;
        }
        .card {
            background: #ffffff;
            color: #333;
            border-radius: 15px;
            padding: 30px;
            max-width: 800px;
            margin: auto;
            box-shadow: 0 20px 40px rgba(0,0,0,0.3);
        }
        h1 {
            color: #2c5364;
            margin-bottom: 10px;
        }
        h2 {
            color: #0f2027;
        }
        .success {
            background: #4CAF50;
            color: white;
            padding: 15px;
            border-radius: 10px;
            font-size: 20px;
            margin-bottom: 20px;
        }
        .badge {
            display: inline-block;
            background: #ff9800;
            color: #fff;
            padding: 8px 15px;
            border-radius: 20px;
            font-weight: bold;
            margin: 10px 0;
        }
        .info {
            text-align: left;
            margin-top: 20px;
            font-size: 16px;
        }
        .info p {
            margin: 8px 0;
        }
        .footer {
            margin-top: 30px;
            font-size: 14px;
            color: #ddd;
        }
        .gift {
            margin-top: 25px;
            padding: 20px;
            border: 2px dashed #4CAF50;
            border-radius: 10px;
            background: #f9fff9;
            color: #2c5364;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="card">
            <div class="success">
                🚀 CI/CD PIPELINE EXECUTED SUCCESSFULLY
            </div>

            <h1>Project 1 – AWS DevOps CI/CD Pipeline</h1>
            <h2>JALA Academy Assignment</h2>

            <div class="badge">✅ COMPLETED SUCCESSFULLY</div>

            <div class="info">
                <p><strong>👨‍💻 Candidate Name:</strong> Mojjada Sai Kumar</p>
                <p><strong>🏫 Institute:</strong> JALA Academy</p>
                <p><strong>📞 Contact:</strong> 8919482513 / 7799329181</p>
                <p><strong>🛠 Tools Used:</strong> Jenkins, Docker, AWS EC2, Amazon ECR, GitHub</p>
                <p><strong>🔐 Security:</strong> IAM Role based authentication (No hardcoded keys)</p>
                <p><strong>⚙️ Deployment:</strong> Automated CI/CD using Jenkins</p>
            </div>

            <div class="gift">
                🎁 <strong>Special Note:</strong><br/>
                This application was built and deployed automatically using a real-time DevOps CI/CD pipeline.
                Any code change triggers Jenkins to rebuild, push, and redeploy without manual intervention.
            </div>

            <div class="footer">
                🌐 Powered by AWS | 🚀 DevOps in Action | © Project 1
            </div>
        </div>
    </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(html);
});

server.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Sparky Test Deployment</title>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                margin: 0;
                padding: 40px 20px;
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            .container {
                text-align: center;
                max-width: 600px;
                background: rgba(255,255,255,0.1);
                padding: 40px;
                border-radius: 20px;
                backdrop-filter: blur(10px);
            }
            h1 { font-size: 3em; margin-bottom: 0.5em; }
            p { font-size: 1.2em; margin-bottom: 1em; }
            .status { 
                background: rgba(0,255,0,0.2);
                padding: 15px;
                border-radius: 10px;
                border: 1px solid rgba(0,255,0,0.3);
            }
        </style>
    </head>
    <body>
        <div class="container">
            <h1>⚡ Sparky Test Deployment</h1>
            <p>If you're seeing this, the pipeline is working!</p>
            <div class="status">
                <strong>✅ Status:</strong> Docker + GitHub + Hostinger = Success!
            </div>
            <p><small>Deployed at: ${new Date().toISOString()}</small></p>
            <p><small>Build: SSH key updated ✨</small></p>
        </div>
    </body>
    </html>
  `;
  res.send(html);
});

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'healthy', 
    timestamp: new Date().toISOString(),
    message: 'Sparky deployment pipeline test successful!'
  });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Sparky test app running on port ${PORT}`);
});
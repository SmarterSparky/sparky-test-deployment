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
        <title>⚡ Sparky's AI Revolution Demo</title>
        <style>
            body { 
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                color: white;
                margin: 0;
                padding: 20px;
                min-height: 100vh;
                overflow-x: hidden;
            }
            .container {
                text-align: center;
                max-width: 800px;
                margin: 0 auto;
            }
            h1 { 
                font-size: 3.5em; 
                margin-bottom: 0.2em;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                animation: pulse 2s ease-in-out infinite alternate;
            }
            @keyframes pulse {
                from { transform: scale(1); }
                to { transform: scale(1.05); }
            }
            .tagline {
                font-size: 1.4em;
                margin-bottom: 2em;
                opacity: 0.9;
            }
            .demo-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
                gap: 20px;
                margin: 40px 0;
            }
            .demo-card {
                background: rgba(255,255,255,0.1);
                padding: 30px 20px;
                border-radius: 15px;
                backdrop-filter: blur(10px);
                border: 1px solid rgba(255,255,255,0.2);
                transition: all 0.3s ease;
                cursor: pointer;
            }
            .demo-card:hover {
                transform: translateY(-5px);
                background: rgba(255,255,255,0.15);
                box-shadow: 0 10px 30px rgba(0,0,0,0.2);
            }
            .demo-icon {
                font-size: 3em;
                margin-bottom: 15px;
            }
            .demo-title {
                font-size: 1.3em;
                font-weight: bold;
                margin-bottom: 10px;
            }
            .demo-desc {
                font-size: 0.9em;
                opacity: 0.8;
                line-height: 1.4;
            }
            .status-banner {
                background: rgba(0,255,100,0.2);
                padding: 20px;
                border-radius: 10px;
                border: 1px solid rgba(0,255,100,0.3);
                margin: 30px 0;
                box-shadow: 0 0 20px rgba(0,255,100,0.1);
            }
            .deploy-info {
                background: rgba(0,0,0,0.2);
                padding: 15px;
                border-radius: 8px;
                font-size: 0.85em;
                margin-top: 30px;
                border-left: 3px solid #00ff64;
            }
            .sparkles {
                position: fixed;
                width: 100%;
                height: 100%;
                pointer-events: none;
                z-index: -1;
            }
            .sparkle {
                position: absolute;
                width: 4px;
                height: 4px;
                background: white;
                border-radius: 50%;
                animation: twinkle 3s ease-in-out infinite;
            }
            @keyframes twinkle {
                0%, 100% { opacity: 0; transform: scale(0); }
                50% { opacity: 1; transform: scale(1); }
            }
        </style>
    </head>
    <body>
        <div class="sparkles" id="sparkles"></div>
        
        <div class="container">
            <h1>⚡ Sparky's AI Revolution</h1>
            <p class="tagline">Smarter Revolution • Live Pipeline Demo</p>
            
            <div class="status-banner">
                <strong>🚀 LIVE DEPLOYMENT SUCCESS!</strong><br>
                Docker → GitHub Actions → Hostinger → You're Here!
            </div>
            
            <div class="demo-grid">
                <div class="demo-card" onclick="simulateAI()">
                    <div class="demo-icon">🤖</div>
                    <div class="demo-title">AI Video Generator</div>
                    <div class="demo-desc">Click to see how we transform scripts into professional videos</div>
                </div>
                
                <div class="demo-card" onclick="simulateTraining()">
                    <div class="demo-icon">🎯</div>
                    <div class="demo-title">Smart Training Hub</div>
                    <div class="demo-desc">Unified platform for learning, progress tracking, and enablement</div>
                </div>
                
                <div class="demo-card" onclick="simulateRevolution()">
                    <div class="demo-icon">⚡</div>
                    <div class="demo-title">Business Revolution</div>
                    <div class="demo-desc">Mid-market companies getting superpowers through AI</div>
                </div>
            </div>
            
            <div class="deploy-info">
                <strong>⚙️ Pipeline Status:</strong> All systems operational<br>
                <strong>📦 Build:</strong> Docker containerized<br>
                <strong>🕐 Deployed:</strong> ${new Date().toISOString()}<br>
                <strong>🎯 Target:</strong> Mid-market AI transformation
            </div>
        </div>

        <script>
            // Create sparkles
            function createSparkles() {
                const container = document.getElementById('sparkles');
                for(let i = 0; i < 15; i++) {
                    const sparkle = document.createElement('div');
                    sparkle.className = 'sparkle';
                    sparkle.style.left = Math.random() * 100 + '%';
                    sparkle.style.top = Math.random() * 100 + '%';
                    sparkle.style.animationDelay = Math.random() * 3 + 's';
                    container.appendChild(sparkle);
                }
            }
            
            function simulateAI() {
                alert('🎬 AI Video Magic!\\n\\nInput: "How to use our new CRM"\\nOutput: Professional training video with:\\n• AI voice narration\\n• Dynamic visuals\\n• Interactive elements\\n• Multi-language support\\n\\nFrom script to video in minutes, not weeks!');
            }
            
            function simulateTraining() {
                alert('🎯 Smart Training Revolution!\\n\\n• AI-powered content delivery\\n• Progress tracking & analytics\\n• Voice assistant for instant help\\n• Unified web presence\\n\\nOne platform. Every employee. Unlimited potential.');
            }
            
            function simulateRevolution() {
                alert('⚡ The Business Empowerment Revolution™\\n\\nWe don\\'t replace your team — we give them superpowers!\\n\\n$10M-$250M companies getting enterprise-grade AI:\\n• Manufacturing efficiency\\n• Hospitality training\\n• Healthcare protocols\\n• Financial services enablement\\n\\nReady to revolutionize?');
            }
            
            createSparkles();
        </script>
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
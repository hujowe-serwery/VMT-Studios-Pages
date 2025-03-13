document.addEventListener('DOMContentLoaded', function() {
    // Form submission handler
    const testerForm = document.getElementById('tester-form');
    
    if (testerForm) {
        testerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const email = document.getElementById('email').value;
            const username = document.getElementById('username').value;
            const userid = document.getElementById('userid').value;
            const experience = document.getElementById('experience').value;
            
            // In a real app, you would send this data to a server
            // For now, just show an alert
            alert(`Thank you for applying!\nYour application has been received.\nWe'll contact you at ${email} if you're selected.`);
            
            // Reset the form
            testerForm.reset();
        });
    }

    // Load game data from JSON files
    fetch('about.json')
        .then(response => response.json())
        .then(data => {
            console.log('About data loaded:', data);
            // You can use this data to dynamically populate the page
        })
        .catch(error => console.error('Error loading about.json:', error));
        
    fetch('gamefeatures.json')
        .then(response => response.json())
        .then(data => {
            console.log('Game features loaded:', data);
            // Display core features
            const coreFeatures = document.getElementById('core-features');
            if (coreFeatures) {
                coreFeatures.innerHTML = `
                    <div class="feature-section">
                        <h3>Core Features</h3>
                        ${data.core_features.map(feature => `
                            <div class="feature-card">
                                <div class="feature-title">${feature.name}</div>
                                <p>${feature.description}</p>
                            </div>
                        `).join('')}
                    </div>
                `;
            }
            
            // Display environments
            const environments = document.getElementById('environments');
            if (environments) {
                environments.innerHTML = `
                    <div class="feature-section">
                        <h3>Environments</h3>
                        <div class="feature-card">
                            ${data.environments.map(env => `
                                <span class="environment-tag">${env}</span>
                            `).join('')}
                        </div>
                    </div>
                `;
            }
        })
        .catch(error => console.error('Error loading gamefeatures.json:', error));
});
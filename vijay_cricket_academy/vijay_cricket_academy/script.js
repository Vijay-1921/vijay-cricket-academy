document.addEventListener("DOMContentLoaded", function() {
    const footerContent = `
    <footer>
        <div class="footer-container">
            <div class="footer-col">
                <h4>Vijay Cricket Academy</h4>
                <p style="color: #cca43b; font-weight: 600;">TRAIN • DEVELOP • EXCEL</p>
                <p style="margin-top: 10px; font-size: 14px; color: #bbb;">Building Skills. Creating Champions.</p>
            </div>
            <div class="footer-col">
                <h4>Contact Details</h4>
                <p>📞 Phone: +91 7601004665</p>
                <p>🌐 Web: www.vijaycricketacademy.com</p>
            </div>
            <div class="footer-col">
                <h4>Academy Address</h4>
                <p>📍 Vijay Sports Club Yemmiganur,<br>Kurnool District, Andhra Pradesh</p>
            </div>
        </div>
        <div class="footer-bottom">
            <p>&copy; 2026 Vijay Cricket Academy. All rights reserved.</p>
        </div>
    </footer>`;
    
    document.body.insertAdjacentHTML('beforeend', footerContent);
});
// WhatsApp functionality
document.addEventListener('DOMContentLoaded', function() {
    // Create WhatsApp button
    const whatsappButton = document.createElement('a');
    whatsappButton.href = 'https://wa.me/919880779843';
    whatsappButton.target = '_blank';
    whatsappButton.className = 'fixed bottom-6 left-6 bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:bg-[#128C7E] transition-all duration-300 z-50 whatsapp-float';
    whatsappButton.setAttribute('aria-label', 'Chat with us on WhatsApp');
    
    // Add WhatsApp icon SVG - Simplified and reliable version
    whatsappButton.innerHTML = `
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.966-.273-.099-.471-.148-.67.15-.197.297-.767.963-.94 1.16-.173.199-.347.221-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.795-1.484-1.784-1.66-2.087-.173-.297-.018-.458.13-.606.136-.133.296-.347.445-.52.146-.181.194-.298.296-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.508-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.361-.272.3-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.87.118.571-.085 1.758-.719 2.005-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.345m-5.422 7.118h-.016a9.57 9.57 0 01-5.031-1.44l-.361-.216-3.741.982.998-3.648-.235-.374a9.568 9.568 0 01-1.454-5.085c.003-5.314 4.37-9.678 9.8-9.678 2.618 0 5.078 1.027 6.93 2.89a9.71 9.71 0 012.864 6.86c-.003 5.32-4.402 9.726-9.817 9.726M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .103 5.313.101 11.853c-.001 2.05.545 4.062 1.574 5.822L0 24l6.33-1.652a12.01 12.01 0 005.724 1.465h.006c6.585 0 11.946-5.336 11.946-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
        </svg>
    `;
    
    // Add button to the body
    document.body.appendChild(whatsappButton);

    // Optional: Add animation on page load
    setTimeout(() => {
        whatsappButton.style.transform = 'scale(1.1)';
        setTimeout(() => {
            whatsappButton.style.transform = 'scale(1)';
        }, 200);
    }, 1000);

    // Optional: Add click tracking
    whatsappButton.addEventListener('click', function() {
        // You can add analytics tracking here if needed
        console.log('WhatsApp button clicked');
    });
});

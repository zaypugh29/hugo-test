import axios from "axios";

export default async function main() {
    console.log('Hello, world!');

    const contactForm = document.querySelector<HTMLFormElement>('#contact-form');
    contactForm?.addEventListener('submit', async e => {
        e.preventDefault();

        axios.post('/contacts', {
            // params and what
            "name": (document.getElementById('name') as HTMLInputElement).value,
            "company": (document.getElementById('company') as HTMLInputElement).value,
            "email": (document.getElementById('email') as HTMLInputElement).value,
            "phone": (document.getElementById('phone') as HTMLInputElement).value,
            "content": "I'm not sure what this is yet", // from parameter body example
            "referrer": "https://example.com/contact", // from parameter body example
            "pageRequestID": "Fp5WjYYpIic", // from parameter body example
            "tz": "America/New_York", // from parameter body example
        }).then(resp => {
            console.log('Success!');
            // redirect to success page
            window.location.href = 'http://test.localhost:10506/contact-success/?';
        }).catch(err => alert(err));
    });
}

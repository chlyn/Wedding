import heroImage from "../assets/home-hero.png";
import "../styles/components/contact.css";

function Contact() {
    return (
        <section className="contact-banner" id="home-contact" aria-labelledby="home-contact-title">
            <img
                className="contact-banner-image"
                src={heroImage}
                alt="Outdoor wedding ceremony aisle with flowers"
            />
            <div className="contact-banner-copy">
                <p id="home-contact-title">Contact Us</p>
                <span>If you have any questions, please do not hesitate to contact us. We are happy to help with anything you need.</span>
                <div className="contact-links">
                    <a href="mailto:richmondandcherrie@gmail.com">
                        <strong>Email:</strong> richmondandcherrie@gmail.com
                    </a>
                    <a href="tel:+12405281136">
                        <strong>Richmond:</strong> (240) 528-1136
                    </a>
                    <a href="tel:+14435273714">
                        <strong>Cherrie:</strong> (443) 527-3714
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;

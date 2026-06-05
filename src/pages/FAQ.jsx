import "../styles/pages/faq.css";
import Contact from "../components/Contact";
import PageHero from "../components/PageHero";

const basePath = import.meta.env.BASE_URL.replace(/\/$/, "");

function FAQLink({ route, onNavigate, children }) {
    const handleClick = (event) => {
        if (!onNavigate) {
            return;
        }

        event.preventDefault();
        onNavigate(route);
    };

    return <a href={`${basePath}${route}`} onClick={handleClick}>{children}</a>;
}

function FAQ({ showContact = false, onNavigate }) {
    const faqItems = [
        {
            question: "Can I bring a guest?",
            answer: "Your invitation will indicate whether a guest has been included. Please RSVP only for the guests named on your invitation.",
        },
        {
            question: "Are children invited?",
            answer: "Please refer to the names listed on your invitation to see who has been included in your party.",
        },
        {
            question: "When should I RSVP?",
            answer: "Please submit your RSVP before August 4, 2026.",
        },
        {
            question: "What should I wear?",
            answer: (
                <>
                    We kindly request formal attire in shades of dusty rose, rose pink, mauve, or similar tones from our wedding palette. Please visit the <FAQLink route="/details" onNavigate={onNavigate}>Details</FAQLink> page for more information.
                </>
            ),
        },
        {
            question: "What time should I arrive?",
            answer: "Please arrive by 12:30 PM. Guests will be seated by 12:45 PM.",
        },
        {
            question: "Where will the ceremony and reception take place?",
            answer: (
                <>
                    The ceremony will be held at St. Edward the Confessor Catholic Church. The cocktail hour and reception will follow at Celebrations Event & Rental Venue. Full addresses are available in the <FAQLink route="/home/schedule" onNavigate={onNavigate}>Schedule</FAQLink>.
                </>
            ),
        },
        {
            question: "Is parking available?",
            answer: "Parking is available at both the ceremony and reception locations. We recommend allowing a little extra time when arriving.",
        },
        {
            question: "Where can I find the registry?",
            answer: (
                <>
                    Our registry and newlywed fund options are available in the <FAQLink route="/details/registry" onNavigate={onNavigate}>Registry</FAQLink>.
                </>
            ),
        },
    ];

    return (
        <main className="faq-page" id="faq-page-start">
            <PageHero title="Frequently Asked Questions" />

            <section className="faq-content" aria-labelledby="faq-title">
                <div className="faq-intro">
                    <p className="faq-kicker">Good To Know</p>
                    <h2 id="faq-title">Wedding Questions</h2>
                    <p>
                        We have gathered a few helpful answers to make planning for our wedding day as easy as possible.
                    </p>
                    <span aria-hidden="true"></span>
                    <p className="faq-contact-note">
                        Still have a question? We are always happy to <FAQLink route="/home/contact-us" onNavigate={onNavigate}>help</FAQLink>.
                    </p>
                </div>

                <div className="faq-list">
                    {faqItems.map((item, index) => (
                        <details className="faq-item" key={item.question} open={index === 0}>
                            <summary>
                                <span>{item.question}</span>
                                <i aria-hidden="true"></i>
                            </summary>
                            <p>{item.answer}</p>
                        </details>
                    ))}
                </div>
            </section>

            {showContact && <Contact />}
        </main>
    );
}

export default FAQ;

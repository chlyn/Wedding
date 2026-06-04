import { useState } from "react";
import "../styles/pages/home.css";
import dateLocationImage from "../assets/home-date-location.png";
import heroImage from "../assets/home-hero.png";
import HeaderText from "../components/HeaderText";
import HeaderPlainText from "../components/HeaderPlainText";

const scheduleItems = [
    {
        time: "1:00 PM-2:30 PM",
        activity: "Ceremony",
        place: "St. Edward the Confessor Catholic Church",
        address: "1940 Mitchellville Road, Bowie, MD 20716",
        mapUrl: "https://www.google.com/maps/place/St+Edward+the+Confessor+Catholic+Church,+Inc/data=!4m7!3m6!1s0x89b7ec99d35a1369:0x5f138933f7be582a!8m2!3d38.9147689!4d-76.7231723!16s%2Fg%2F11cmmyxf_z!19sChIJaRNa05nst4kRKli-9zOJE18?authuser=0&hl=en&rclk=1",
    },
    {
        time: "4:30 PM-5:30 PM",
        activity: "Cocktail Hour",
        place: "Celebrations Event & Rental Venue",
        address: "4831 Tesla Drive Unit # K, Bowie, MD 20715",
        mapUrl: "https://www.google.com/maps/place/Celebrations+Event+%26+Rental+Venue/@38.9565666,-76.7172814,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7edb4fe32a027:0x870f9094c3f6271!8m2!3d38.9565625!4d-76.7124105!16s%2Fg%2F11k9fwcxnr?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
        time: "5:30 PM-10:00 PM",
        activity: "Reception",
        place: "Celebrations Event & Rental Venue",
        address: "4831 Tesla Drive Unit # K, Bowie, MD 20715",
        mapUrl: "https://www.google.com/maps/place/Celebrations+Event+%26+Rental+Venue/@38.9565666,-76.7172814,17z/data=!3m1!4b1!4m6!3m5!1s0x89b7edb4fe32a027:0x870f9094c3f6271!8m2!3d38.9565625!4d-76.7124105!16s%2Fg%2F11k9fwcxnr?entry=ttu&g_ep=EgoyMDI2MDYwMS4wIKXMDSoASAFQAw%3D%3D",
    },
];

const galleryImages = [
    { src: dateLocationImage, alt: "Wedding detail with burgundy ribbon and flowers" },
    { src: dateLocationImage, alt: "Wedding invitation detail with flowers" },
    { src: dateLocationImage, alt: "Wedding flat lay with ribbon and floral details" },
];

function Home() {
    const [activeGalleryImage, setActiveGalleryImage] = useState(1);

    const showPreviousGalleryImage = () => {
        setActiveGalleryImage((currentIndex) =>
            currentIndex === 0 ? galleryImages.length - 1 : currentIndex - 1
        );
    };

    const showNextGalleryImage = () => {
        setActiveGalleryImage((currentIndex) =>
            currentIndex === galleryImages.length - 1 ? 0 : currentIndex + 1
        );
    };

    return (
        <main className="home-page">
            <section className="home-hero" aria-label="Wedding invitation">
                <img
                    className="home-hero-image"
                    src={heroImage}
                    alt="Outdoor wedding ceremony aisle with flowers at golden hour"
                />
                <div className="home-hero-overlay">
                    <p className="home-hero-kicker">Please join us for the wedding of</p>

                    <div className="home-hero-title">
                        <HeaderText text="Richmond" />
                        <HeaderPlainText text="&" className="name-amp" />
                        <HeaderText text="Cherrie" />
                    </div>

                    <span className="home-hero-line" aria-hidden="true"></span>
                </div>
            </section>

            <section className="home-date-location" aria-label="Date and location">
                <div className="home-date-image-wrap">
                    <img
                        className="home-date-image"
                        src={dateLocationImage}
                        alt="Wedding invitation with burgundy ribbon and flowers"
                    />
                </div>
                <div className="home-date-copy">
                    <p className="home-date">August 8, 2026</p>
                    <p className="home-location">Bowie, MD</p>
                    <p className="home-date-note">
                        We would be honored to have you with us as we celebrate the beginning of our marriage.    
                    </p>
                    <button className="home-date-rsvp-button" type="button">RSVP</button>
                </div>
            </section>

            <section className="home-schedule" aria-labelledby="home-schedule-title">
                <div className="home-schedule-frame">
                    <p className="home-section-kicker" id="home-schedule-title">The Day's Events</p>
                    <div className="home-schedule-list">
                        {scheduleItems.map((item) => (
                            <article className="home-schedule-item" key={`${item.time}-${item.activity}`}>
                                <div className="home-schedule-time">
                                    <time>{item.time}</time>
                                </div>
                                <div className="home-schedule-info">
                                    <h3>{item.activity}</h3>
                                    <p>{item.place}</p>
                                    <a href={item.mapUrl} target="_blank" rel="noreferrer">
                                        {item.address}
                                    </a>
                                    <a className="home-map-button" href={item.mapUrl} target="_blank" rel="noreferrer">
                                        View Map
                                    </a>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="home-rsvp" aria-labelledby="home-rsvp-title">
                <p className="home-rsvp-title" id="home-rsvp-title">RSVP</p>
                <p className="home-rsvp-copy">
                    Your love, prayers, and presence mean so much to us. We cannot wait to gather with the people we love most and celebrate the beginning of our forever.
                </p>
                <p className="home-rsvp-deadline">Kindly reply by August 4, 2026.</p>
                <button type="button">Celebrate With Us</button>
            </section>

            <section className="home-gallery" aria-label="Wedding gallery">
                <div className="home-gallery-track">
                    {galleryImages.map((image, index) => (
                        <figure
                            className={`home-gallery-card${index === 1 ? " featured" : ""}${index === activeGalleryImage ? " active" : ""}`}
                            key={`${image.alt}-${index}`}
                        >
                            <img src={image.src} alt={image.alt} />
                        </figure>
                    ))}
                </div>

                <div className="home-gallery-controls" aria-label="Gallery controls">
                    <button
                        className="home-gallery-arrow previous"
                        type="button"
                        onClick={showPreviousGalleryImage}
                        aria-label="Previous photo"
                    >
                        ‹
                    </button>
                    <div className="home-gallery-bars" aria-label={`Photo ${activeGalleryImage + 1} of ${galleryImages.length}`}>
                        {galleryImages.map((image, index) => (
                            <span
                                className={index === activeGalleryImage ? "active" : ""}
                                key={`gallery-indicator-${image.alt}-${index}`}
                            ></span>
                        ))}
                    </div>
                    <button
                        className="home-gallery-arrow next"
                        type="button"
                        onClick={showNextGalleryImage}
                        aria-label="Next photo"
                    >
                        ›
                    </button>
                </div>
            </section>

            <section className="home-contact-banner" aria-label="Questions">
                <img
                    className="home-contact-banner-image"
                    src={heroImage}
                    alt="Outdoor wedding ceremony aisle with flowers"
                />
                <div className="home-contact-banner-copy">
                    <p>Questions?</p>
                    <span>Please do not hesitate to contact us. We are happy to help with anything you need.</span>
                    <a href="tel:+13015550126">(301) 555-0126</a>
                </div>
            </section>
        </main>
    )
}

export default Home;

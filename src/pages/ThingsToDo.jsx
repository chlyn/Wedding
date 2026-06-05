import "../styles/pages/thingstodo.css";
import PageHero from "../components/PageHero";
import Contact from "../components/Contact";
import heroImage from "../assets/home-hero.png";

const destinations = [
    {
        name: "Washington, D.C.",
        description: "Our nation's capital is filled with world-class museums, historic landmarks, and vibrant neighborhoods waiting to be discovered.",
        highlights: [
            "The National Mall & Monuments",
            "Smithsonian Museums",
            "Georgetown",
            "The U.S. Capitol",
        ],
    },
    {
        name: "Annapolis",
        description: "This charming waterfront city offers the perfect blend of history, culture, and scenic views.",
        highlights: [
            "City Dock",
            "Historic Downtown Annapolis",
            "U.S. Naval Academy",
            "Maryland State House",
            "Waterfront Dining & Shopping",
        ],
    },
    {
        name: "Northern Virginia",
        description: "Northern Virginia offers a wonderful mix of history, outdoor adventures, and unique cultural experiences.",
        highlights: [
            "Old Town Alexandria",
            "George Washington's Mount Vernon",
            "Great Falls Park",
            "Udvar-Hazy Air & Space Museum",
        ],
    },
];

function ThingsToDo({ showContact = false }) {
    return (
        <main className="thingstodo-page" id="things-to-do-page">
            <PageHero title="Things To Do" />

            <section className="thingstodo-guide" aria-labelledby="thingstodo-guide-title">
                <div className="thingstodo-intro">
                    <p className="thingstodo-kicker">Explore The Area</p>
                    <h2 id="thingstodo-guide-title">A Few Places We Love</h2>
                    <p>
                        We are delighted to share a few of our favorite places to visit while you are in town. We hope you enjoy exploring the charm, history, and beauty of the surrounding area during your stay.
                    </p>
                </div>

                <div className="thingstodo-destinations">
                    {destinations.map((destination, index) => (
                        <article
                            className={`thingstodo-destination${index % 2 === 1 ? " reverse" : ""}`}
                            key={destination.name}
                        >
                            <img
                                className="thingstodo-destination-image"
                                src={heroImage}
                                alt={`${destination.name} destination placeholder`}
                            />

                            <div className="thingstodo-destination-info">
                                <h3>{destination.name}</h3>
                                <p>{destination.description}</p>

                                <p className="thingstodo-list-title">Places To Explore</p>
                                <ul>
                                    {destination.highlights.map((highlight) => (
                                        <li key={highlight}>{highlight}</li>
                                    ))}
                                </ul>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {showContact && <Contact />}
        </main>
    )
}

export default ThingsToDo;

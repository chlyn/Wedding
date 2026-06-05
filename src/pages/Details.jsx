import "../styles/pages/details.css";
import attireImage from "../assets/home-date-location.png";
import PageHero from "../components/PageHero";

const dressCodeColors = [
    { name: "Dusty Rose", value: "#BF9885" },
    { name: "Rose Pink", value: "#D8A5A8" },
    { name: "Mauve", value: "#A46A78" },
];

const registryLinks = [
    { name: "Zola", url: "https://www.zola.com/registry/richmondandcherrie" },
    { name: "Amazon", url: "https://www.amazon.com/wedding/share/richmondandcherrie" },
    { name: "Venmo", url: "https://venmo.com/ccespineda" },
    { name: "Zelle", url: "https://richmondandcherrie.my.canva.site/registry" },
];

function Details() {
    return (
        <main className="details-page" id="details-page-start">
            <PageHero title="The Details" />

            <section className="details-dress-code" aria-labelledby="dress-code-title">
                <div className="details-dress-info">
                    <p className="details-section-title" id="dress-code-title">
                        Dress Code
                    </p>

                    <p className="details-dress-label">Formal Attire</p>

                    <p className="details-dress-copy">
                        In celebration of our special day, we kindly invite our guests to wear formal attire in shades of dusty rose, rose pink, mauve, or similar tones from our wedding palette.
                    </p>

                    <div className="details-color-palette" aria-label="Dress code color palette">
                        {dressCodeColors.map((color) => (
                            <div className="details-color-item" key={color.name}>
                                <span
                                    className="details-color-swatch"
                                    style={{ backgroundColor: color.value }}
                                ></span>
                                <span>{color.name}</span>
                            </div>
                        ))}
                    </div>

                    <div className="details-dress-note">
                        <p className="details-dress-copy">
                            Gentlemen are welcome to incorporate these colors through a tie, bow tie, pocket square, or other accent, though it is not required.
                        </p>
                        <p className="details-dress-copy">
                            We respectfully ask that guests avoid wearing white, ivory, shorts, or short dresses.
                        </p>
                    </div>
                </div>

                <div className="details-attire-image" aria-label="Attire example">
                    <img src={attireImage} alt="Formal attire inspiration" />
                </div>
            </section>

            <section className="details-travel" aria-labelledby="travel-information-title">
                <div className="details-travel-inner">
                    <p className="details-section-title details-travel-title" id="travel-information-title">
                        Travel Information
                    </p>

                    <div className="details-travel-intro">
                        <p>
                            For friends and family traveling from afar, here is helpful flight information for planning your trip to Bowie, Maryland.
                        </p>
                    </div>

                    <div className="details-travel-grid">
                        <article className="details-travel-card">
                            <span className="details-travel-number">01</span>

                            <h3>BWI</h3>

                            <p className="details-travel-airport-name">
                                Baltimore/Washington International Airport
                            </p>

                            <p className="details-travel-subtitle">Closest Airport</p>

                            <p>
                                The closest airport to Bowie, approximately 30 minutes away.
                            </p>
                        </article>

                        <article className="details-travel-card">
                            <span className="details-travel-number">02</span>

                            <h3>DCA</h3>

                            <p className="details-travel-airport-name">
                                Ronald Reagan Washington National Airport
                            </p>

                            <p className="details-travel-subtitle">Great Alternative</p>

                            <p>
                                Another convenient option, located about 40 minutes away depending on traffic.
                            </p>
                        </article>

                        <article className="details-travel-card">
                            <span className="details-travel-number">03</span>

                            <h3>IAD</h3>

                            <p className="details-travel-airport-name">
                                Washington Dulles International Airport
                            </p>

                            <p className="details-travel-subtitle">Additional Option</p>

                            <p>
                                Approximately 1 hour away and may be convenient for some guests traveling from afar.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="details-registry" id="details-registry" aria-labelledby="registry-title">
                <div className="details-registry-frame">
                    <p className="details-section-title" id="registry-title">
                        Registry
                    </p>

                    <p className="details-registry-copy">
                        For friends and family who wish to honor us with a gift, we have created a newlywed fund as we begin this new chapter together.
                    </p>

                    <div className="details-registry-links">
                        {registryLinks.map((registry) => (
                            <a
                                className="details-registry-link"
                                href={registry.url}
                                key={registry.name}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {registry.name}
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Details;

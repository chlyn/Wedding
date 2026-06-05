import "../styles/pages/details.css";
import attireImage from "../assets/Dress_Code_Image.png";
import PageHero from "../components/PageHero";

// Add, remove, or replace hex color codes here to update the dress-code palette.
const dressCodeColors = [
    "#dc7882", "#d36373", "#de6377", "#e15a82", "#ee6a81", "#eb5986", "#ef6b8c", "#cd608a",
    "#e57486", "#d85c76", "#e55c86", "#e6658c", "#f9708c", "#ef648f", "#e25e8d", "#c95e8a",
    "#da657b", "#dd5875", "#ec5e86", "#e9709b", "#f76d8e", "#dc5484", "#e65d8b", "#c85f8a",
    "#d86b81", "#e35c7a", "#ed5d81", "#e76c9b", "#f6648b", "#eb5787", "#ea5c8b", "#ca5782",
    "#d5657e", "#e15979", "#e95f83", "#e66085", "#ef6386", "#e95d8b", "#e26090", "#c95e8c",
    "#d45d71", "#e05977", "#e65984", "#e05781", "#e9597b", "#e8668a", "#dd5b8b", "#c15586",
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
                        {dressCodeColors.map((color, index) => (
                            <span
                                className="details-color-swatch"
                                key={`${color}-${index}`}
                                style={{ backgroundColor: color }}
                            ></span>
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

import "../styles/pages/details.css";
import attireImage from "../assets/home-date-location.png";
import PageHero from "../components/PageHero";

const dressCodeColors = [
    { name: "Burgundy", value: "#701C21" },
    { name: "Soft Ivory", value: "#EFEEEA" },
    { name: "Dusty Rose", value: "#BF9885" },
];

function Details() {
    return (
        <main className="details-page">
            <PageHero title="The Details" />

            <section className="details-dress-code" aria-labelledby="dress-code-title">
                <p className="details-section-title" id="dress-code-title">Dress Code</p>
                <p className="details-dress-copy">
                    We would love for our guests to join us in formal wedding attire. Please feel free to dress in colors inspired by our palette so the day feels beautifully cohesive in photos.
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

                <div className="details-attire-gallery" aria-label="Attire examples">
                    <img src={attireImage} alt="Formal attire inspiration placeholder" />
                    <img src={attireImage} alt="Wedding guest attire inspiration placeholder" />
                </div>
            </section>
        </main>
    )
}

export default Details;

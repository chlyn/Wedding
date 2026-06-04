import heroImage from "../assets/home-hero.png";
import "../styles/components/page-hero.css";
import HeaderText from "./HeaderText";

function PageHero({
    title,
    image = heroImage,
    imageAlt = "Outdoor wedding ceremony aisle with flowers at golden hour",
}) {
    const titleWords = Array.isArray(title) ? title : title.split(" ");

    return (
        <section className="page-hero" aria-label={titleWords.join(" ")}>
            <img
                className="page-hero-image"
                src={image}
                alt={imageAlt}
            />
            <div className="page-hero-overlay">
                <div className="page-hero-title">
                    {titleWords.map((word) => (
                        <HeaderText text={word} key={word} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default PageHero;

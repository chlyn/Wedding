import "../styles/pages/registry.css";
import PageHero from "../components/PageHero";

const contributionOptions = [
    {
        number: "01",
        title: "Honeymoon Fund",
        description: "Help us create unforgettable memories as we celebrate our first adventure as newlyweds.",
        link: "#",
        buttonText: "Contribute to Our Honeymoon",
    },
    {
        number: "02",
        title: "Our First Home",
        description: "Support us as we build a warm and welcoming home for the many chapters ahead.",
        link: "#",
        buttonText: "Contribute to Our Home",
    },
    {
        number: "03",
        title: "Newlywed Experiences",
        description: "Treat us to a special date, shared experience, or little adventure during our first year of marriage.",
        link: "#",
        buttonText: "Gift an Experience",
    },
];

function Registry() {
    return (
        <main className="registry-page">
            <PageHero title="The Registry" />

            <section className="registry-intro" aria-labelledby="registry-intro-title">
                <p className="registry-section-title" id="registry-intro-title">
                    Your Presence Is the Greatest Gift
                </p>
                <p>
                    Celebrating our wedding with you is the greatest gift we could ask for. For those who have asked, we have created a few optional ways to help us begin our next chapter together.
                </p>
            </section>

            <section className="registry-amazon" aria-labelledby="amazon-registry-title">
                <div className="registry-amazon-inner">
                    <p className="registry-amazon-kicker">Wedding Registry</p>
                    <h2 id="amazon-registry-title">A Few Things for Our Home</h2>
                    <p>
                        We have selected a few items that will help make our house feel even more like home.
                    </p>
                    <a className="registry-primary-button" href="#" aria-label="View our Amazon registry">
                        View Our Amazon Registry
                    </a>
                </div>
            </section>

            <section className="registry-contributions" aria-labelledby="contributions-title">
                <p className="registry-section-title" id="contributions-title">
                    Our Future Together
                </p>
                <p className="registry-contributions-intro">
                    For guests who prefer to contribute toward an experience, we would be deeply grateful for your support as we build our future together.
                </p>

                <div className="registry-contribution-grid">
                    {contributionOptions.map((option) => (
                        <article className="registry-contribution-card" key={option.title}>
                            <span className="registry-contribution-number">{option.number}</span>
                            <h3>{option.title}</h3>
                            <p>{option.description}</p>
                            <a href={option.link}>{option.buttonText}</a>
                        </article>
                    ))}
                </div>
            </section>

            <section className="registry-closing">
                <p>Please know that gifts are never expected.</p>
                <span>Your love, prayers, and presence are more than enough.</span>
            </section>
        </main>
    )
}

export default Registry;

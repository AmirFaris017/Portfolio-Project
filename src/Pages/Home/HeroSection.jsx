export default function HeroSection() {
    return (
        <section id="heroSection" className="hero--section">
            <div className="hero--section--content--box">
                <div className="hero--section-content">
                    <p className="section--title">Hey I'm Amir Faris </p>
                    <h1 className="hero--section-title">
                        <span className="hero--section--title--color">Full Stack</span>{""}
                        <br />
                        Developer
                    </h1>
                    <p className="hero--section--description">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt quasi perspiciatis dolorum perferendis voluptas odit, adipisci commodi voluptatem qui laborum facere? Distinctio voluptas quia fugit hic voluptatum aspernatur, incidunt a!
                        <br />commodi blanditiis maiores quis eaque nesciunt doloremque tempore aliquid mollitia saepe.
                    </p>
                </div>
                <button className="btn btn-primary">Get In Touch
                </button>
                <div className="hero--section--img">
                    <img src="./img/hero_img.png" alt="Hero Section" />
                </div>
            </div>

        </section>
    )

}
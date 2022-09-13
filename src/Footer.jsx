const Footer = () => {

    const Links = []

    Links.push({
        url: "https://aroonsalotra.github.io/portfolio-website/",
        text: "My Website"
    })

    Links.push({
        url: "https://github.com/AroonSalotra/clicker-game",
        text: "Github Repo"
    })
    
    return (
        <footer className="footer">
            <ul>
                {Links.map(({ url, text }) => {
                    return <a href={url}
                        target="_blank"
                        rel="noreferrer"
                        key={text}>

                        <li>{text}</li>
                    </a>
                })}
            </ul>
        </footer>
    );
}

export default Footer;
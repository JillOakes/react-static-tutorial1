import logo from './logo.svg';
import './index.css';

function Header() {
    return (
        <header>
            <nav className="nav">
                <img src={logo} className="nav-logo" alt="logo"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}

function MainContent() {
    return (
        <div>
            <h1>Reasons I'm Excited to Learn React</h1>
            <ol>
                <li>It's a hireable skill.</li>
                <li>It makes me valuable to my team.</li>
                <li>It makes me a better developer.</li>
            </ol>
        </div>
    )
}

function Footer() {
    return (
        <footer>
            <small>© 2022 Oakes Development. All rights reserved.</small>
        </footer>
    )
}

function JillPage() {
    return (
        <div>
            <Header />
            <MainContent />
            <Footer />
        </div>
    )
}
export default JillPage;
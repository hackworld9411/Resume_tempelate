// Import Assets
import profile from '../assets/profile.png';

const Header = () => {
    return (
        <section className='header'>
            <img src={profile} className="logo" alt="T M Irfanulla" />

            <div className='header__content'>
                <h1>Hi, I'm Irfanulla</h1>
                <p>Gorantla, AP</p>
                <a href="https://wa.me/+917288844992/" target="_blank" rel="noreferrer" className="button">Get In Touch</a>
            </div>
        </section>
    );
}

export default Header;
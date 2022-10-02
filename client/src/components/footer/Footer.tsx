
import './footer.scss';

import FooterNav from './footer-nav/FooterNav';
import MediaIcons from './media-icons/MediaIcons';
import Yad2Nav from './yad2-nav/Yad2Nav';

const Footer = () => {
    return (
        <footer>
            <FooterNav />
            <MediaIcons />
            <p className='rights-reserved'>כל הזכויות שמורות לחברת קורל תל מפעילות לוח יד2 - לוח מודעות: דרושים IL, דירות להשכרה, בתים למכירה, בתים להשכרה, העברת בתים, הובלות אין לעשות שימוש בכל התכנים המופיעים בלוח יד2.</p>
            <hr></hr>
            <Yad2Nav />
        </footer>
    );
};

export default Footer;
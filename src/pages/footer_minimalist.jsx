import '../pages/css/MinimalFooter.css';
import MinimalFooter from '../components/Footer_Minimalist';

function FooterPage() {
    console.log('Rendering footer');
    return (
        <div className="footer">
            <MinimalFooter/>
        </div>
    );
}

export default FooterPage;
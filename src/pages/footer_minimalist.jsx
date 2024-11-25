import '../pages/css/MinimalFooter.css';
import MinimalFooter from '../components/Footer_Minimalist';

function FooterPage() {
    console.log('Rendering footer');
    return (
        <>
        <a href="/"><button className="btn" id="back">Back to Home</button></a>
        <div>
            <MinimalFooter/>
        </div>
        </>
    );
}

export default FooterPage;
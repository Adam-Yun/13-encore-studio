
import "./price.css"


const Prices = () => {
  
  return ( 
    <div className="prices-box">
        <ol className="prices">
            <li className="price">
                <h3>Package A</h3>
                <p>
                    •	30-minute on-location shoot (one setting)
                    <br></br>
                    <br></br>
                    •	10 fully retouched high-resolution digital images
                    <br></br>
                    <br></br>
                    •	Color grading + one black-and-white conversion
                    <br></br>
                    <br></br>
                    •	Online proofing gallery (view/download for 2 weeks)
                </p>
            </li>
            <li className="price">
                <h3>Package B</h3>
                <p>
                    •	1-hour shoot (up to two locations or wardrobe changes)
                    <br></br>
                    <br></br>
                    •	30 fully retouched high-resolution digital images
                    <br></br><br></br>
                    •	Color grading + two stylized presets (e.g. filmic, moody)
                    <br></br><br></br>
                    •	Online proofing gallery (4-week access) with direct download links
                    <br></br><br></br>
                    •	Behind-the-scenes “sneak peek” video clip (30 sec)
                </p>
            </li>
            <li className="price">
                <h3>Package C</h3>
                <p>
                    •	2-hour full-service shoot (studio or multiple locations)
                    <br></br><br></br>
                    •	Pre-shoot in-person styling session & custom mood board
                    <br></br><br></br>
                    •	Color grading + three advanced looks (cinematic, vintage, high-contrast)
                    <br></br><br></br>
                    •	Private online gallery (6-week access) with client-downloadable ZIP
                    <br></br><br></br>
                    •	Behind-the-scenes highlight reel (1–2 min)
                </p>
            </li>
        </ol>
    </div>
  );
};

export default Prices;
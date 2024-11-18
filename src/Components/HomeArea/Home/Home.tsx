import "./Home.css";
import logo from '../../../Assets/Images/bigLogo2.png';
import paintingImg from '../../../Assets/Images/painting.png';
import drywallImg from '../../../Assets/Images/drywall.png';
import woodImg from '../../../Assets/Images/wood.png';
import opticImg from '../../../Assets/Images/opticSieve.png';
import buildImg from '../../../Assets/Images/easyBuild.png';
import acousticImg from '../../../Assets/Images/acoustic.png';
import floorImg from '../../../Assets/Images/floor.png';
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";

export function Home(): JSX.Element {

    const imageData = [
        {
            img: paintingImg,
            text: "שפכטל וצבע: עבודות גימור מקצועיות לשיפור האסתטיקה והעמידות של קירות פנים."
        },
        {
            img: drywallImg,
            text: "עבודות גבס: בנייה והתקנת קירות ותקרות."
        },
        {
            img: woodImg,
            text: "עבודות עץ: כולל התקנות, שיופים וכל סוגי ההרכבות למראה מוקפד ואיכותי."
        },
        {
            img: opticImg,
            text: "סיבים אופטיים: התקנה ותחזוקה של תשתיות סיבים אופטיים לחיבורי אינטרנט מהירים."
        },
        {
            img: buildImg,
            text: "בנייה קלה: פתרונות בנייה מתקדמים וחסכוניים המתאימים למגוון צרכים."
        },
        {
            img: acousticImg,
            text: "תקרות אקוסטיות: התקנה ושיפור אקוסטיקה במבנים."
        },
        {
            img: floorImg,
            text: "ריצוף: שירותי ריצוף, פירוק ריצוף ישן וחידוש רובה לשדרוג מראה הרצפה."
        },
        {
            img: drywallImg,
            text: "עבודות חוץ וניקיון: כולל סידור ותחזוקת גינות."
        },
        {
            img: drywallImg,
            text: "בניית מחסנים: תכנון והקמת מבני אחסון מותאמים אישית."
        },
        {
            img: drywallImg,
            text: "פיתוח ותשתיות: עבודות עפר כולל הצבת גידור ותשתיות בטון, תשתיות מים וחשמל ופיתוח השטח לצורכי בנייה."
        }
    ];

    return (
        <div className="Home">
            <div className="first">
               <img id="logo" src={logo} alt="" />
                <p>
                    שמי ליאם אדגג, ואני הבעלים של חברה המתמחה בתחום הבנייה והתשתיות. את האהבה למקצוע רכשתי כבר מגיל צעיר, כאשר עבדתי לצידו של סבי, שלימד אותי את יסודות העבודה בידיים ובניית איכות. לאחר שנפרדתי ממנו בגיל 15, המשכתי לעסוק בתחום לצד אבי, ובבגרותי הפכתי את התשוקה למקצוע.
                    שירתתי כלוחם  בחטיבת בגולני. לאחר מכן יצאתי לאוסטרליה, שם ניהלתי פרויקט בנייה רחב היקף של ריזורט באי בצפון אוסטרליה. בפרויקט ביצענו מייקאובר מלא למתחם, ולאחר מכן ניהלתי פרויקטים נוספים לפיתוח תשתיות ומחסני חקלאות במרכז היבשת.
                    עם חזרתי לארץ, החלטתי לקחת את כל הניסיון והידע שצברתי ולהביא אותו לכאן. המטרה שלנו היא לפעול מתוך תשוקה ואהבה למקצוע, ולספק ללקוחות בארץ שירות מקצועי ואיכותי מתוך חזון של בנייה מחודשת ומקצוענות ללא פשרות.
                    עובדים מול תעשיות וחברות גדולות בין היתר קבלני משנה של חברת ״טופ סקיי ליין״
                    שירותים לחוות סולריות עבודות מול יזמים גדולים.
                </p> 
            </div>
            
            <div className="third">
                <div className="carousel">
                    <Carousel sx={{ marginTop: 5 }} animation="fade" navButtonsAlwaysVisible autoPlay={true} indicators={false}>
                        {imageData.map((item, i) => (
                            <Paper key={i}>
                                <img src={item.img} alt={`${i}`} />
                                <div className="text-overlay">
                                <p>{item.text}</p>
                                </div>
                            </Paper>
                        ))}
                    </Carousel>  
                </div>
            </div>
        </div>
    );
}

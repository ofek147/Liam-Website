import "./PageNotFound.css";
import pageNotFoundImage from "../../../Assets/Images/pageNotFound.jpg"


export function PageNotFound(): JSX.Element {
    return (
        <div className="PageNotFound">
			<p>יש בעיה עם העמוד שביקשת</p>
			<p>הוא לא קיים אצלנו והגעת אלינו מקישור לא מעודכן,</p>
			<p>או שיש בעיה זמנית. במקרה כזה כדאי לנסות מאוחר מדי</p>
            <img src={pageNotFoundImage} alt="" />
        </div>
    );
}

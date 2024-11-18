import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import { Home } from "../../HomeArea/Home/Home";
import { About } from "../../AboutArea/About/About";
import { PageNotFound } from "../PageNotFound/PageNotFound";

export function Routing(): JSX.Element {
    return (
        <div className="Routing">
			
            {/* Collection of routes: */}
            <Routes>
                
                {/* Home Route */}
                <Route path="/home" element={<Home />} />
                
                {/* About Route */}
                <Route path="/about" element={<About />} />
                
                {/* Default Route */}
                <Route path="/" element={<Navigate to="home" />} />
                
                {/* Page not found Route */}
                <Route path="*" element={<PageNotFound />} />

            </Routes>

        </div>
    );
}

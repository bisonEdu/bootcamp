

import ReactDOM from "react-dom/client";
import { restaurants } from "./constants/mock.js";

ReactDOM.createRoot(document.getElementById("root")).render(
    <div>
        <div className="restaurant-section">
            <ul>
                <li>
                    <h4>Restaurant {restaurants[0].name}</h4>
                </li>
                <li>Menu - {restaurants[0].menu[0].name}</li>
                <ul>
                    <li>{restaurants[0].menu[0].ingredients[0]}</li>
                    <li>{restaurants[0].menu[0].ingredients[1]}</li>
                </ul>
                <li>Menu - {restaurants[0].menu[1].name}</li>
                <ul>
                    <li>{restaurants[0].menu[1].ingredients[0]}</li>
                </ul>
                <li>Menu - {restaurants[0].menu[2].name}</li>
                <ul>
                    <li>{restaurants[0].menu[2].ingredients[0]}</li>
                    <li>{restaurants[0].menu[2].ingredients[1]}</li>
                </ul>
                <li>
                    Reviews
                    <ul>
                        <li>
                            {restaurants[0].reviews[0].user} -{" "}
                            {restaurants[0].reviews[0].text}
                        </li>
                        <li>
                            {restaurants[0].reviews[1].user} -{" "}
                            {restaurants[0].reviews[1].text}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className="restaurant-section">
            <ul>
                <li>
                    <h4>Restaurant {restaurants[1].name}</h4>
                </li>
                <li>Menu - {restaurants[1].menu[0].name}</li>
                <ul>
                    <li>{restaurants[1].menu[0].ingredients[0]}</li>
                    <li>{restaurants[1].menu[0].ingredients[1]}</li>
                    <li>{restaurants[1].menu[0].ingredients[2]}</li>
                </ul>
                <li>Menu - {restaurants[1].menu[1].name}</li>
                <ul>
                    <li>{restaurants[1].menu[1].ingredients[0]}</li>
                    <li>{restaurants[1].menu[1].ingredients[1]}</li>
                    <li>{restaurants[1].menu[1].ingredients[2]}</li>
                    <li>{restaurants[1].menu[1].ingredients[3]}</li>
                </ul>
                <li>
                    Reviews
                    <ul>
                        <li>
                            {restaurants[1].reviews[0].user} -{" "}
                            {restaurants[1].reviews[0].text}
                        </li>
                        <li>
                            {restaurants[1].reviews[1].user} -{" "}
                            {restaurants[1].reviews[1].text}
                        </li>
                        <li>
                            {restaurants[1].reviews[2].user} -{" "}
                            {restaurants[1].reviews[2].text}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className="restaurant-section">
            <ul>
                <li>
                    <h4>Restaurant {restaurants[2].name}</h4>
                </li>
                <li>Menu - {restaurants[2].menu[0].name}</li>
                <ul>
                    <li>{restaurants[2].menu[0].ingredients[0]}</li>
                </ul>
                <li>Menu - {restaurants[2].menu[1].name}</li>
                <ul>
                    <li>{restaurants[2].menu[1].ingredients[0]}</li>
                    <li>{restaurants[2].menu[1].ingredients[1]}</li>
                </ul>
                <li>Menu - {restaurants[2].menu[2].name}</li>
                <ul>
                    <li>{restaurants[2].menu[2].ingredients[0]}</li>
                </ul>
                <li>Menu - {restaurants[3].menu[1].name}</li>
                <ul>
                    <li>{restaurants[3].menu[1].ingredients[0]}</li>
                    <li>{restaurants[3].menu[1].ingredients[1]}</li>
                </ul>
                <li>
                    Reviews
                    <ul>
                        <li>
                            {restaurants[2].reviews[0].user} -{" "}
                            {restaurants[2].reviews[0].text}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>

        <div className="restaurant-section">
            <ul>
                <li>
                    <h4>Restaurant {restaurants[3].name}</h4>
                </li>
                <li>Menu - {restaurants[3].menu[0].name}</li>
                <ul>
                    <li>{restaurants[3].menu[0].ingredients[0]}</li>
                </ul>
                <li>Menu - {restaurants[3].menu[1].name}</li>
                <ul>
                    <li>{restaurants[3].menu[1].ingredients[0]}</li>
                    <li>{restaurants[3].menu[1].ingredients[1]}</li>
                </ul>
                <li>
                    Reviews
                    <ul>
                        <li>
                            {restaurants[3].reviews[0].user}
                            {restaurants[3].reviews[0].text}
                        </li>
                        <li>
                            {restaurants[3].reviews[1].user}
                            {restaurants[3].reviews[1].text}
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
);

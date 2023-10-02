import {Menu} from "../Menu/component.jsx";
import {Reviews} from "../Reviews/component.jsx";

export const Restaurant = ({name, menu, reviews}) => {
    return (
        <div className='restaurant-container'>
            <h3>{name}</h3>
            <Menu menu={menu}/>
            <Reviews reviews={reviews}/>
        </div>
    )
}
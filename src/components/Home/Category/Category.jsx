import {useNavigate} from "react-router-dom";
import "./Category.scss";
const Category = ({categories,headingText}) => {
    const navigate=useNavigate();
    return (
<div className="shop-by-category">
{<div  id="categories"className="sec-heading">{headingText}</div>}
    <div className="categories">
        { categories?.data?.map((item) => (
            <div key={item.id} className="category" onClick={()=>navigate(`/category/${item.id}`)}>
                <img src={item.attributes.img.data.attributes.url} alt="" />
            </div>
        ))}
    </div>
</div>
    );
};


export default Category;


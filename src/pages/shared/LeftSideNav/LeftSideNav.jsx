import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftSideNav = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    return (
        <div>
            <h2 className="text-3xl mb-[20px] font-semibold text-[#403F3F]">All Categories</h2>
            {
                categories.map(category => <NavLink
                    className="block py-[15px] pl-[50px] text-[#9F9F9F] font-semibold"
                    key={category.id}
                    to={`/category/${category.id}`}
                >
                    {category.name}</NavLink>)
            }
        </div>
    );
};

export default LeftSideNav;
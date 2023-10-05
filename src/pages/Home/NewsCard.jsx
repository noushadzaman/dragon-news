import { Link } from "react-router-dom";

const NewsCard = ({ news }) => {
    const { title, image_url, details, _id } = news;

    return (
        <div className="card bg-base-100 shadow-xl mb-16">
            <img src={image_url} />
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{
                    details.length > 200 ?
                        <p>
                            {details.slice(0, 200)} <Link
                                to={`/news/${_id}`}
                                className="font-semibold text-[#F75B5F]">Read more...</Link>
                        </p>
                        : <p>{details}</p>
                }</p>
            </div>
        </div>
    );
};

export default NewsCard;
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
    return (
        <div className="flex bg-[#F3F3F3] h-[80px] items-center px-[16px] my-[30px]">
            <button className="btn btn-error">Breaking News</button>
            <Marquee pauseOnHover={true} speed={150}>
                Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
            </Marquee>
        </div>
    );
};

export default BreakingNews;
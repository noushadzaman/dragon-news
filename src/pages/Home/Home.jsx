import Header from "../shared/Header/Header";
import LeftSideNav from "../shared/LeftSideNav/LeftSideNav";
import Navbar from "../shared/Navbar/Navbar";
import RightSideNav from "../shared/RightSideNav/RightSideNav";

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="col-span-2">
                    <h2 className="text-4xl">News Coming soon</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;
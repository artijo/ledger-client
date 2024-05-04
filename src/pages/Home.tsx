import ChartExpend from "../components/ChartExpend";

const Home = () => {
    return (
        <>
            <div className="flex gap-4">
                <div>
                    Today Expend
                    <p>75</p>
                </div>
                <div>
                    Expend(Mounth)
                    <p>500</p>
                </div>
                <div>
                    Income
                    <p>1000</p>
                </div>
                <div>
                    Balance
                    <p>500</p>
                </div>
            </div>
            <ChartExpend />
        </>
    );
    };

export default Home;
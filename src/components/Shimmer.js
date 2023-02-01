

const Shimmer = () => {
    return (
        <div className="restaurant-list">
            {Array(10).fill('').map((e, idx) => <div key={idx} className='shimmer-effect'></div>)}
        </div>
    )
};

export default Shimmer;
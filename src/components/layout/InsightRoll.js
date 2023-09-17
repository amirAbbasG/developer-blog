

const InsightRoll = ({insights}) => {
    return (
        <div className="w-full withespace-nowrap bg-accent text-light overflow-hidden">
            <div className="w-full flex items-center justify-between py-3 capitalize font-semibold tracking-wider text-base animate-roll">
                {insights.map(text => (
                    <div key={text}>
                        {text}
                        <span className="px-4">|</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InsightRoll;
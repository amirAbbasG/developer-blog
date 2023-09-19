

const InsightRoll = ({insights}) => {
    return (
        <div className="w-full whitespace-nowrap bg-accent dark:bg-accentDark text-light dark:text-dark overflow-hidden">
            <div className="w-full flex items-center justify-between py-2 sm:py-3
             capitalize font-semibold tracking-wider text-sm sm:text-base animate-roll">
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
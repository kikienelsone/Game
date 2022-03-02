import React from 'react';
import "./Stats.scss"

const Stats = (props) => {
    return (
        <div>
            <h2 className="title">Statistic</h2>

            <div className="panel stats-panel">
                <div className="money">{props.money}</div>

                <div className="days">day:{props.days}</div>
            </div>
        </div>
    );
};

export default Stats;
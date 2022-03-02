import React, {useState} from 'react';
import "./Storage.scss"

const Storage = (props) => {

    const [qty, setQty] = useState(0)

    function findGoodById(itemId) {
        return props.goods.find((item) => {
            return item.id === itemId
        }).title
    }

    function getEmptyCells() {
        if (props.storage.length < 8) {
            return Array(8 - props.storage.length).fill().map(() => {
                return <li className="good-item no-item"></li>
            })
        }


    }

    return (
        <div>
            <h2 className="title">My storage</h2>
            <div className="panel">
                <ul className="goods">
                    {props.storage.map((item) => {
                            return (
                                <li className={"good-item item-" + item.id + (props.selectedGood === item.id ? " selected" : "")}
                                    onClick={() => {
                                        props.onSelectGood(item.id)
                                    }}
                                >
                                    <span className="good-description">{item.qty} items</span>
                                </li>
                            )
                        }
                    )}
                    {getEmptyCells()}
                </ul>

                {props.selectedGood ? (
                    <div className="cell-panel">
                        <div>{findGoodById(props.selectedGood)}</div>
                        <div className="controls">
                            <input type="text" className="input" value={qty} onChange={(event)=>{
                                setQty(parseInt(event.target.value, 10))
                            }}/>{" "}items
                            <button className="button" onClick={() => {
                                props.onSell(props.selectedGood, qty)
                            }}>sale</button>
                        </div>
                    </div>
                ) : ("")}

            </div>
        </div>
    )
}

export default Storage;
import './App.scss';
import Cities from "../../Cities/Cities";
import CityStorage from "../../CityStorage/CityStorage";
import Storage from "../../Storage/Storage";
import Transportation from "../../Transportation/Transportation";
import {useState} from "react";
import Stats from "../../Stats/Stats";

function App() {

    const [currentCity, setCurrentCity] = useState(1)
    const [money, setMoney] = useState(1000)
    const [days, setDays] = useState(1)
    const [selectedGood, setSelectedGood] = useState(3)
    const [storages, setStorages] = useState(
        [
            {
                cityId: 1,
                storage: [{
                    id: 1,
                    qty: 10
                }, {
                    id: 2,
                    qty: 20
                }, {
                    id: 3,
                    qty: 25
                }, {
                    id: 4,
                    qty: 15
                }, {
                    id: 5,
                    qty: 35
                }, {
                    id: 6,
                    qty: 70
                }, {
                    id: 7,
                    qty: 55
                }, {
                    id: 8,
                    qty: 90
                }
                ]
            }, {
            cityId: 2,
            storage: [{
                id: 1,
                qty: 5
            }]
        }


        ]
    )

    const goods = [
        {
            id: 1,
            title: "apple"
        }, {
            id: 2,
            title: "honeypot"
        }, {
            id: 3,
            title: "tomato"
        }, {
            id: 4,
            title: "cake"
        }, {
            id: 5,
            title: "strawberries"
        }, {
            id: 6,
            title: "chicken"
        }, {
            id: 7,
            title: "dessert"
        }, {
            id: 8,
            title: "lemon"
        }, {
            id: 9,
            title: "avocado"
        }, {
            id: 10,
            title: "orange"
        }, {
            id: 11,
            title: "pizza"
        }, {
            id: 12,
            title: "salad"
        }, {
            id: 13,
            title: "soup"
        }, {
            id: 14,
            title: "pear"
        }]

    const [cityStorages, setCityStorages] = useState([

        {
            cityId: 1,
            storage: [{
                id: 1,
                priceStats: [23,12,45,78,12,48,90],
                maxStep: 5,
                minPrice: 10,
                maxPrice: 90
            },
                {
                    id: 2,
                    priceStats: [32,12,78,80,34,45,38],
                    maxStep: 5,
                    minPrice: 10,
                    maxPrice: 40
                }
            ]
        },
        {
            cityId: 2,
            storage: []
        }
    ])


    const getStorageByCity = () => {
        const store = storages.find((item) => {
            return item.cityId === currentCity
        })
        if (store) {
            return store.storage
        } else {
            return []
        }
    }

    const sellGoods = (goodId, qty) => {
        const storagesNew = storages
        let moneyNew = money

        const index = storagesNew.findIndex((item) => {
            return item.cityId === currentCity
        })
        if (index > -1) {
            const goodIndex = storagesNew[index].storage.findIndex((item) => {
                return item.id === goodId
            })
            if (goodIndex > -1) {
                storagesNew[index].storage[goodIndex].qty -= qty
                moneyNew += qty * 12
                setMoney(moneyNew)
            }
        }

    }

    const liveProcess = () => {
        setTimeout(() => {
            setDays(days + 1)
        }, 10000)
    }
    liveProcess()
    return (
        <div className="app">
            <div className="app-name">
                <h1>Profiteer</h1>
                <Cities currentCity={currentCity} onChange={(city) => {
                    setCurrentCity(city)
                }}/>

            </div>

            <div className="content">
                <div className="column">
                    <div className="storage">
                        <Storage currentCity={currentCity}
                                 storage={getStorageByCity()} goods={goods}
                                 selectedGood={selectedGood}
                                 onSelectGood={(goodId) => {
                                     setSelectedGood(goodId)
                                 }}
                                 onSell={(id, qty) => {
                                     sellGoods(id, qty)
                                 }}
                        />

                    </div>

                    <div className="transportation">
                        <Transportation/>
                    </div>
                    <div className="stats">
                        <Stats days={days} money={money}/>
                    </div>

                </div>
                <div className="column">
                    <div className="city-storage">
                        <CityStorage/>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;

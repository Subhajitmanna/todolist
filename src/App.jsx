import React from "react";
import { useState } from "react";

import Todo from "./Todo";
import "./style.css"

const App = () => {

    const [itemList, setItemList] = useState("");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setItemList(event.target.value)
    }

    const listOfItem = () => {
        setItems((oldItems) => {
            return [...oldItems, itemList]
        })
        setItemList("")
    }

    const deleteItem = (id) => {
        setItems((oldItems) => {
            return oldItems.filter((arrEle, index) => {
                return index !== id;
            })
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo List</h1>
                    <br />
                    <input type="text" placeholder="add a item" onChange={itemEvent} value={itemList} />
                    <button onClick={listOfItem}> + </button>

                    <div className="item_div">
                        <ol>
                            {items.map((itemval, index) => {
                                return (<Todo
                                    text={itemval}
                                    key={index}
                                    id={index}
                                    onselect={deleteItem}
                                />
                                );
                            })}
                        </ol>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;
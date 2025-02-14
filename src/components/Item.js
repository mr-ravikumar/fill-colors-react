import { useState } from "react";

function Item() {

    const [color, setColor] = useState("");

    function redColor() {
        setColor("red");
    }

    function greenColor() {
        setColor("green");
    }

    function yellowColor() {
        setColor("yellow");
    }

    function blueColor() {
        setColor("blue");
    }

    function orangeColor() {
        setColor("orange");
    }

    function removeColor() {
        setColor("")
    }

    return (<div className="flex h-screen w-screen items-center justify-center flex-col">

        <div style={{backgroundColor: `${color}`}} className="flex items-center justify-center h-[300px] w-[300px] rounded-full text-2xl font-extralight border-[2px] border-gray-400">Fill Color</div>

        <div className="translate-y-[50px]">
            <button onClick={redColor} className="m-5 px-10 py-3 rounded bg-red-500 text-white text-xl">Click me</button>
            <button onClick={greenColor} className="m-5 border px-10 py-3 rounded bg-green-500 text-white text-xl">Click me</button>
            <button onClick={yellowColor} className="m-5 border px-10 py-3 rounded bg-yellow-500 text-white text-xl">Click me</button>
            <button onClick={blueColor} className="m-5 border px-10 py-3 rounded bg-blue-500 text-white text-xl">Click me</button>
            <button onClick={orangeColor} className="m-5 border px-10 py-3 rounded bg-orange-500 text-white text-xl">Click me</button>
        </div>

        <button onClick={removeColor} className="translate-y-[30px] m-10 border px-5 py-1 rounded bg-gray-500 text-white text-xl">Reset</button>

    </div>)
}

export default Item;

import { useState } from "react";
import Description from "./ِDescription.jsx";

const Tabs = () => {

    const [active, setActive] = useState(() => {
        const saved = localStorage.getItem("activeTab");
        return saved ? Number(saved) : null;
    });

    const tab = [
        { id: 1, title: "Content 1", name: "TAB1", description: "This is a react" },
        { id: 2, title: "Content 2", name: "TAB2", description: "This is a react" },
        { id: 3, title: "Content 3", name: "TAB3", description: "This is a react" },
        { id: 4, title: "Content 4", name: "TAB4", description: "This is a react" },
    ];

    const handleTabClick = (id) => {
        setActive(id);
        localStorage.setItem("activeTab", id);
    };

    return (
        <div className="flex flex-col w-full h-screen bg-teal-400">
            <h1 className="text-white text-3xl font-bold pt-10 pb-14 px-12 mt-5 rounded-b-xl shadow-md">Tabs component with react</h1>
            <div className="w-full h-screen py-5 bg-teal-700 mt-7 px-10 py-10 rounded-t-xl shadow-2xl">
                <ul className="flex w-64">
                    {tab.map((item) => (
                        <li key={item.id} className="py-2 -ms-8 cursor-pointer">
                            <p className="text-white text-xl font-bold p-2 m-10 hover:border-b-2" onClick={() => handleTabClick(item.id)}>
                                {item.name}
                            </p>
                            <Description title={item.title} description={item.description} isActive={active === item.id}/>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default Tabs;



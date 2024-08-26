import { useState } from "react";
//Components
import Header from "./Header.jsx";

const Home = () => {
    const saveTab = localStorage.getItem("activeTab");
    const [activeTab, setActiveTab] = useState(saveTab ? JSON.parse(saveTab) :0);

    const tabs = [
        { id: 0, title: 'Tab1', content: "Content 1", description: "This is Description for Tab 1" },
        { id: 1, title: 'Tab2', content: "Content 2", description: "This is Description for Tab 2" },
        { id: 2, title: 'Tab3', content: "Content 3", description: "This is Description for Tab 3" },
        { id: 3, title: 'Tab4', content: "Content 4", description: "This is Description for Tab 4" },
    ];

    const tabHandler = (id) => {
        setActiveTab(id);
        localStorage.setItem("activeTab", JSON.stringify(id));
    }

    return (
        <>
            <div className="container w-full h-screen p-10 bg-indigo-700">
                <h1 className="bg-indigo-500 text-white text-3xl font-bold p-12 mt-5 rounded-xl shadow-xl">Tabs component with react</h1>
                <div className="mt-10 py-16 px-12 bg-indigo-500 rounded-xl shadow-xl container">
                    <ul className="w-96 flex justify-between p-5 bg-indigo-700 rounded-md shadow">
                        {tabs.map((tab) => (
                            <li className="text-lg text-white font-bold  cursor-pointer" key={tab.id} onClick={() => tabHandler(tab.id)}>
                                {tab.title}
                            </li>
                        ))}
                    </ul>
                    <Header description={tabs[activeTab].description} content={tabs[activeTab].content}/>
                </div>
            </div>
        </>
    );
};

export default Home;
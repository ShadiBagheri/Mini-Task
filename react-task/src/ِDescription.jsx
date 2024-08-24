const Description = ({ title, description, isActive }) => {
    return (
        <div className={`flex flex-col w-full ms-10 ${isActive ? 'block' : 'hidden'}`}>
            <h1 className="text-xl text-white font-bold">{title}</h1>
            <p className="text-lg text-white mt-5 ">{description}</p>
        </div>
    );
}

export default Description;
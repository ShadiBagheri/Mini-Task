const Header = ({ description, content }) => {
    return (
        <div className="container mt-10 mx-5">
            <h2 className="text-xl text-white font-bold">{content}</h2>
            <p className="mt-3 text-lg text-white font-bold">{description}</p>
        </div>
    );
};

export default Header


const Modal = ({
    id,
    title,
    description,
    selected,
    setSelected,
    buttonState,
}) => {
    const handleClick = () => {
        handleAccordionClick();
    };

    const handleAccordionClick = () => {
        if (selected.includes(id)) {
            setSelected((accordions) =>
                accordions.filter((accordion) => accordion !== id)
            );
            console.log(id);
        } else {
            if (buttonState.active) setSelected([...selected, id]);
            else setSelected([id]);
        }
    };
    return (
        <div className="max-w-4xl px-6 py-4 mt-6 mx-auto text-white bg-black">
            <div
                className="flex justify-between cursor-pointer mb-2 text-2xl"
                onClick={handleClick}
            >
                <h3 className="font-semibold">{title}</h3>
                <span>{selected.includes(id) ? "-" : "+"}</span>
            </div>
            {selected.includes(id) && (
                <p className="text-left transition duration-1000">
                    {description}
                </p>
            )}
        </div>
    );
};

export default Modal;

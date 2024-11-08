import PropTypes from "prop-types";

const ButtonGroup = ({ buttons, value, onChange }) => {
  return (
    <div className="grid grid-cols-4 grid-tem flex-1 divide-x-2">
      {buttons.map((button) => (
        <button
          key={button.value}
          className={`${
            button.value === value ? "bg-blue-700" : "bg-blue-500"
          } font-semibold text-sm text-white py-2 hover:bg-blue-700`}
          onClick={() => onChange(button.value)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
};

ButtonGroup.propTypes = {
  buttons: PropTypes.array.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ButtonGroup;

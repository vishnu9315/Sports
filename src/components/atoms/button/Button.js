import PropTypes from 'prop-types';

export const Button = ({ label, onClick, disabled }) => {
  return (
    <button
      className="rounded-lg text-sm text-center flex items-center me-2 p-2 bg-blue-500 text-white font-bold cursor-pointer"
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  //onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};


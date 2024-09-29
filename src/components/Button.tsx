interface Props {
  children?: string;
  className?: string;
  color?: 'primary' | 'secondary';
  onClick: () => void;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

function Button({ children = 'Submit', className, color, onClick, size }: Props) {
  const buttonBase =
    'rounded font-semibold shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2';
  const getColor = (color?: string) => {
    let colorClasses;

    switch (color) {
      case 'secondary':
        colorClasses = 'bg-white text-grey-900 hover:bg-gray-50';
        break;
      case 'primary':
      default:
        colorClasses = 'bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600';
        break;
    }

    return colorClasses;
  };

  const getSize = (size?: string) => {
    let sizeClasses;

    switch (size) {
      case 'xs':
        sizeClasses = 'px-2 py-1 text-xs';
        break;
      case 'sm':
        sizeClasses = 'px-2 py-1 text-sm';
        break;
      case 'lg':
        sizeClasses = 'px-3 py-2 text-sm';
        break;
      case 'xl':
        sizeClasses = 'px-3.5 py-2.5 text-sm';
        break;
      case 'md':
      default:
        sizeClasses = 'px-2.5 py-1.5 text-sm';
        break;
    }

    return sizeClasses;
  };

  return (
    <button
      className={`${buttonBase} ${getSize(size)} ${getColor(color)} ${className}`}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;

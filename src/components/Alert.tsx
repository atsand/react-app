import { ReactNode } from 'react';
import { CheckCircleIcon, XMarkIcon } from '@heroicons/react/20/solid';

interface Props {
  children?: ReactNode;
  onClose: () => void;
  title?: string;
  type?: 'success' | 'warning' | 'error' | 'alert';
}

function Alert({ children, onClose, title = 'Attention needed', type = 'alert' }: Props) {
  const getColors = (type: string) => {
    const colors = {
      backgroundClass: 'bg-blue-50',
      closeButtonClass: `bg-blue-50 text-blue-500 hover:bg-blue-100
      focus:ring-blue-600 focus:ring-offset-blue-50`,
      iconClass: 'text-blue-400',
      textClass: 'text-blue-800'
    };

    switch (type) {
      case 'warning':
        colors.backgroundClass = 'bg-yellow-50';
        colors.closeButtonClass = `bg-yellow-50 text-yellow-500 hover:bg-yellow-100
          focus:ring-yellow-600 focus:ring-offset-yellow-50`;
        colors.iconClass = 'text-yellow-400';
        colors.textClass = 'text-yellow-800';
        break;
      case 'error':
        colors.backgroundClass = 'bg-red-50';
        colors.closeButtonClass = `bg-red-50 text-red-500 hover:bg-red-100
          focus:ring-red-600 focus:ring-offset-red-50`;
        colors.iconClass = 'text-red-400';
        colors.textClass = 'text-red-800';
        break;
      case 'success':
        colors.backgroundClass = 'bg-green-50';
        colors.closeButtonClass = `bg-green-50 text-green-500 hover:bg-green-100
          focus:ring-green-600 focus:ring-offset-green-50`;
        colors.iconClass = 'text-green-400';
        colors.textClass = 'text-green-800';
        break;
      case 'alert':
      default:
        break;
    }

    return colors;
  };
  return (
    <div className={`rounded-md p-4 ${getColors(type).backgroundClass}`}>
      <div className="flex">
        <div className="flex-shrink-0">
          <CheckCircleIcon aria-hidden="true" className={`h-5 w-5 ${getColors(type).iconClass}`} />
        </div>
        <div className="ml-3">
          <div className={`text-sm font-medium ${getColors(type).textClass}`}>{title}</div>
          <div className={`text-sm font-medium ${getColors(type).textClass}`}>{children}</div>
        </div>
        <div className="ml-auto pl-3">
          <div className="-mx-1.5 -my-1.5">
            <button
              className={`inline-flex rounded-md p-1.5 focus:outline-none focus:ring-2 focus:ring-offset-2
                ${getColors(type).closeButtonClass}`}
              type="button"
              onClick={onClose}
            >
              <span className="sr-only">Dismiss</span>
              <XMarkIcon aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Alert;

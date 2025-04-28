import React, { useEffect } from 'react';
import { CheckCircleIcon, XCircleIcon } from '@heroicons/react/24/outline';

interface ToastProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, type, onClose, duration = 3000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div
        className={`flex items-center p-4 rounded-lg shadow-lg transform transition-all duration-300 ${
          type === 'success' ? 'bg-green-500' : 'bg-red-500'
        }`}
      >
        {type === 'success' ? (
          <CheckCircleIcon className="h-6 w-6 text-white mr-2" />
        ) : (
          <XCircleIcon className="h-6 w-6 text-white mr-2" />
        )}
        <span className="text-white font-medium">{message}</span>
      </div>
    </div>
  );
};

export default Toast; 
import React from 'react';

interface EventModalProps {
  event: {
    title: string;
    prompt: string;
  };
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-1/2 shadow-lg">
        <h2 className="text-xl font-bold mb-4">{event.title}</h2>
        <p className="mb-4">{event.prompt}</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded"
          onClick={onClose}
        >
          Respond
        </button>
      </div>
    </div>
  );
};

export default EventModal;
//     </div>
//   );
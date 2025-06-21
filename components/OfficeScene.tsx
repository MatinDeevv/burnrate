    import React, { useEffect, useState } from 'react';
// Make sure the path is correct; if your store is actually in '../store/gameStore', update the import:
import { useGameStore } from '../store/gameStore';
// Or, if the file does not exist, create 'components/store/gameStore.ts' with the appropriate store implementation.
import EventModal from './EventModal';

const OfficeScene: React.FC = () => {
  const { day, tasks, addTask, advanceDay, morale, mrr, burnRate, focus } = useGameStore();
  const [currentEvent, setCurrentEvent] = useState<null | { title: string; prompt: string }>(null);

  useEffect(() => {
    if (day === 2) {
      setCurrentEvent({
        title: 'Investor Pitch',
        prompt: 'A VC wants to know your CAC to LTV ratio. What’s your answer?',
      });
    }
  }, [day]);

  return (
    <div className="p-4 min-h-screen bg-[#f4f0e6] flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-2">🏠 Day {day} – Your Home Office</h1>

      <div className="flex gap-12 mt-4">
        {/* Left: Room Visual */}
        <div className="bg-[#d7ccc8] w-[400px] h-[300px] rounded-lg shadow-inner relative">
          <div className="absolute left-4 bottom-4 w-[100px] h-[60px] bg-[#6d4c41] rounded">🛋️ Couch</div>
          <div className="absolute right-4 bottom-4 w-[120px] h-[80px] bg-[#4e342e] rounded">🧑‍💻 Desk</div>
          <div className="absolute left-4 top-4 w-[60px] h-[60px] bg-[#a1887f] rounded">🛏️ Bed</div>
        </div>

        {/* Right: Stats */}
        <div className="flex flex-col">
          <div className="mb-2">💵 Burn: ${burnRate}/mo</div>
          <div className="mb-2">📈 MRR: ${mrr}</div>
          <div className="mb-2">😐 Morale: {morale}</div>
          <div className="mb-2">🔋 Focus: {focus}</div>

          <button
            className="bg-green-600 text-white px-4 py-2 rounded mt-4"
            onClick={() => {
              addTask({ title: 'Work on MVP', time: '9:00 AM' });
              advanceDay();
            }}
          >
            Next Day
          </button>

          <ul className="mt-6">
            {tasks.map((task, i) => (
              <li key={i} className="mt-1">🧠 {task.title} at {task.time}</li>
            ))}
          </ul>
        </div>
      </div>

      {currentEvent && (
        <EventModal
          event={currentEvent}
          onClose={() => setCurrentEvent(null)}
        />
      )}
    </div>
  );
};

export default OfficeScene;

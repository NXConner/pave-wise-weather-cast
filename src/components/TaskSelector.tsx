
import React from 'react';
import { Button } from '@/components/ui/button';

interface TaskSelectorProps {
  selectedTask: string;
  onTaskChange: (task: string) => void;
}

const TaskSelector = ({ selectedTask, onTaskChange }: TaskSelectorProps) => {
  const tasks = [
    { id: 'sealcoating', name: 'Sealcoating', icon: '🛡️' },
    { id: 'crack-filling', name: 'Crack Filling', icon: '🔧' },
    { id: 'patching', name: 'Patching', icon: '🏗️' },
    { id: 'line-striping', name: 'Line Striping', icon: '🎨' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Select Your Task</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {tasks.map((task) => (
          <Button
            key={task.id}
            variant={selectedTask === task.id ? 'default' : 'outline'}
            className={`h-16 flex flex-col items-center justify-center space-y-1 ${
              selectedTask === task.id 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'hover:bg-blue-50 hover:border-blue-300'
            }`}
            onClick={() => onTaskChange(task.id)}
          >
            <span className="text-lg">{task.icon}</span>
            <span className="text-xs font-medium">{task.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default TaskSelector;

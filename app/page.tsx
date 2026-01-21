'use client';

import { useState } from 'react';
import { Home, Dumbbell, Apple } from 'lucide-react';

export default function MuscleGainApp() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <div className="pb-20"><HomePage /></div>;
      case 'workout':
        return <div className="pb-20"><WorkoutPage /></div>;
      case 'food':
        return <div className="pb-20"><FoodPage /></div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 bg-white border-b border-gray-200 p-4">
        <h1 className="text-2xl font-bold text-gray-900">MuscleGain</h1>
      </header>

      {/* Content */}
      <main className="max-w-md mx-auto">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
        <div className="flex justify-around items-center">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex-1 flex flex-col items-center justify-center py-3 px-4 transition-colors ${
              activeTab === 'home'
                ? 'text-blue-600 border-t-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Home size={24} />
            <span className="text-xs mt-1">Home</span>
          </button>
          <button
            onClick={() => setActiveTab('workout')}
            className={`flex-1 flex flex-col items-center justify-center py-3 px-4 transition-colors ${
              activeTab === 'workout'
                ? 'text-blue-600 border-t-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Dumbbell size={24} />
            <span className="text-xs mt-1">Workout</span>
          </button>
          <button
            onClick={() => setActiveTab('food')}
            className={`flex-1 flex flex-col items-center justify-center py-3 px-4 transition-colors ${
              activeTab === 'food'
                ? 'text-blue-600 border-t-2 border-blue-600'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Apple size={24} />
            <span className="text-xs mt-1">Food</span>
          </button>
        </div>
      </nav>
    </div>
  );
}

// Dashboard/Home Page
function HomePage() {
  return (
    <div className="p-4 space-y-4">
      {/* Today's Workout Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">Today's Workout</h2>
        <p className="text-xl font-bold text-gray-900">Chest + Abs</p>
      </div>

      {/* Protein Intake Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">Protein Intake</h2>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold text-gray-900">38</p>
          <p className="text-lg text-gray-500">/ 65 g</p>
        </div>
        <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${(38 / 65) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Calories Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">Calories</h2>
        <div className="flex items-baseline gap-2">
          <p className="text-3xl font-bold text-gray-900">1,850</p>
          <p className="text-lg text-gray-500">/ 2,500 kcal</p>
        </div>
        <div className="mt-3 w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-green-600 h-2 rounded-full"
            style={{ width: `${(1850 / 2500) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Workout Streak Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-4 shadow-sm">
        <h2 className="text-sm font-semibold text-gray-600 mb-2">Workout Streak</h2>
        <p className="text-3xl font-bold text-gray-900">3 <span className="text-lg text-gray-500">days</span></p>
      </div>
    </div>
  );
}

function WorkoutPage() {
  const [expandedDay, setExpandedDay] = useState<string | null>(null);
  const [completedExercises, setCompletedExercises] = useState<Set<string>>(new Set());

  const weeklyWorkout = [
    {
      day: 'Monday',
      title: 'Chest + Triceps',
      isRestDay: false,
      exercises: [
        { id: 'mon-1', name: 'Bench Press', sets: 4, reps: 8 },
        { id: 'mon-2', name: 'Incline Dumbbell Press', sets: 3, reps: 10 },
        { id: 'mon-3', name: 'Tricep Dips', sets: 3, reps: 12 },
      ],
    },
    {
      day: 'Tuesday',
      title: 'Back + Biceps',
      isRestDay: false,
      exercises: [
        { id: 'tue-1', name: 'Barbell Rows', sets: 4, reps: 8 },
        { id: 'tue-2', name: 'Pull-ups', sets: 3, reps: 10 },
        { id: 'tue-3', name: 'Barbell Curls', sets: 3, reps: 10 },
      ],
    },
    {
      day: 'Wednesday',
      title: 'Rest Day',
      isRestDay: true,
      exercises: [],
    },
    {
      day: 'Thursday',
      title: 'Legs + Core',
      isRestDay: false,
      exercises: [
        { id: 'thu-1', name: 'Squats', sets: 4, reps: 8 },
        { id: 'thu-2', name: 'Leg Press', sets: 3, reps: 10 },
        { id: 'thu-3', name: 'Leg Curls', sets: 3, reps: 12 },
        { id: 'thu-4', name: 'Planks', sets: 3, reps: '60s' },
      ],
    },
    {
      day: 'Friday',
      title: 'Shoulders + Arms',
      isRestDay: false,
      exercises: [
        { id: 'fri-1', name: 'Overhead Press', sets: 4, reps: 8 },
        { id: 'fri-2', name: 'Lateral Raises', sets: 3, reps: 12 },
        { id: 'fri-3', name: 'Hammer Curls', sets: 3, reps: 10 },
      ],
    },
    {
      day: 'Saturday',
      title: 'Full Body',
      isRestDay: false,
      exercises: [
        { id: 'sat-1', name: 'Deadlifts', sets: 3, reps: 5 },
        { id: 'sat-2', name: 'Bench Press', sets: 3, reps: 8 },
        { id: 'sat-3', name: 'Barbell Rows', sets: 3, reps: 8 },
      ],
    },
    {
      day: 'Sunday',
      title: 'Rest Day',
      isRestDay: true,
      exercises: [],
    },
  ];

  const toggleExercise = (exerciseId: string) => {
    const newSet = new Set(completedExercises);
    if (newSet.has(exerciseId)) {
      newSet.delete(exerciseId);
    } else {
      newSet.add(exerciseId);
    }
    setCompletedExercises(newSet);
  };

  return (
    <div className="p-4 space-y-3">
      {weeklyWorkout.map((workout) => (
        <div
          key={workout.day}
          className={`rounded-lg border ${
            workout.isRestDay
              ? 'border-gray-200 bg-gray-50'
              : 'border-gray-200 bg-white'
          } shadow-sm overflow-hidden`}
        >
          <button
            onClick={() =>
              setExpandedDay(
                expandedDay === workout.day ? null : workout.day
              )
            }
            className="w-full p-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <div className="text-left">
              <p className="font-semibold text-gray-900">{workout.day}</p>
              <p className="text-sm text-gray-600">{workout.title}</p>
            </div>
            <div className="text-gray-400">
              {expandedDay === workout.day ? '−' : '+'}
            </div>
          </button>

          {expandedDay === workout.day && !workout.isRestDay && (
            <div className="border-t border-gray-200 p-4 space-y-3 bg-gray-50">
              {workout.exercises.map((exercise) => (
                <label
                  key={exercise.id}
                  className="flex items-start gap-3 cursor-pointer hover:bg-white p-2 rounded transition-colors"
                >
                  <input
                    type="checkbox"
                    checked={completedExercises.has(exercise.id)}
                    onChange={() => toggleExercise(exercise.id)}
                    className="mt-1 w-5 h-5 rounded border-gray-300 text-blue-600 cursor-pointer"
                  />
                  <div className="flex-1">
                    <p
                      className={`font-medium ${
                        completedExercises.has(exercise.id)
                          ? 'line-through text-gray-400'
                          : 'text-gray-900'
                      }`}
                    >
                      {exercise.name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {exercise.sets} sets × {exercise.reps} reps
                    </p>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

function FoodPage() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [foodInput, setFoodInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [dailyIntake, setDailyIntake] = useState<Record<string, { calories: number; protein: number; carbs: number; fats: number; fiber: number }>>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('muscleGainIntake');
      return stored ? JSON.parse(stored) : {};
    }
    return {};
  });

  const dateKey = selectedDate.toISOString().split('T')[0];
  const currentIntake = dailyIntake[dateKey] || { calories: 0, protein: 0, carbs: 0, fats: 0, fiber: 0 };

  const saveDailyIntake = (date: string, intake: typeof currentIntake) => {
    const updatedIntake = { ...dailyIntake, [date]: intake };
    setDailyIntake(updatedIntake);
    if (typeof window !== 'undefined') {
      localStorage.setItem('muscleGainIntake', JSON.stringify(updatedIntake));
    }
  };

  const handleAnalyzeFood = async () => {
    if (!foodInput.trim()) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/analyze-food', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ foodText: foodInput }),
      });

      if (!response.ok) {
        throw new Error('Failed to analyze food');
      }

      const results = await response.json();

      const newIntake = {
        calories: currentIntake.calories + results.calories,
        protein: currentIntake.protein + results.protein,
        carbs: currentIntake.carbs + results.carbohydrates,
        fats: currentIntake.fats + results.fats,
        fiber: currentIntake.fiber + results.fiber,
      };

      saveDailyIntake(dateKey, newIntake);
      setFoodInput('');
    } catch (error) {
      console.error('Error analyzing food:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const goToPreviousDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() - 1);
    setSelectedDate(newDate);
  };

  const goToNextDay = () => {
    const newDate = new Date(selectedDate);
    newDate.setDate(newDate.getDate() + 1);
    setSelectedDate(newDate);
  };

  const goToToday = () => {
    setSelectedDate(new Date());
  };

  const isToday = selectedDate.toISOString().split('T')[0] === new Date().toISOString().split('T')[0];
  const dateDisplay = selectedDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

  const isEmptyIntake = currentIntake.calories === 0 && currentIntake.protein === 0;

  return (
    <div className="p-4 space-y-6">
      {/* Today's Intake Card */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-5">Daily Intake Summary</h2>
        {isEmptyIntake ? (
          <div className="text-center py-8">
            <p className="text-gray-500 text-sm mb-2">No food tracked yet</p>
            <p className="text-xs text-gray-400">Add food below to get started</p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-6">
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900 tabular-nums">{currentIntake.calories}</p>
              <p className="text-xs font-medium text-gray-600">Calories</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900 tabular-nums">{currentIntake.protein}g</p>
              <p className="text-xs font-medium text-gray-600">Protein</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900 tabular-nums">{currentIntake.carbs}g</p>
              <p className="text-xs font-medium text-gray-600">Carbs</p>
            </div>
            <div className="space-y-1">
              <p className="text-3xl font-bold text-gray-900 tabular-nums">{currentIntake.fats}g</p>
              <p className="text-xs font-medium text-gray-600">Fats</p>
            </div>
            <div className="col-span-2 space-y-1">
              <p className="text-3xl font-bold text-gray-900 tabular-nums">{currentIntake.fiber}g</p>
              <p className="text-xs font-medium text-gray-600">Fiber</p>
            </div>
          </div>
        )}
      </div>

      {/* Add Food with AI Section */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Add Food with AI</h2>
        <textarea
          value={foodInput}
          onChange={(e) => setFoodInput(e.target.value)}
          placeholder="Example: 2 eggs, 2 rotis, dal, banana, milk"
          aria-label="Food description for AI analysis"
          className="w-full rounded border border-gray-300 p-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          rows={3}
          disabled={isLoading}
        />
        <button
          onClick={handleAnalyzeFood}
          disabled={isLoading || !foodInput.trim()}
          aria-busy={isLoading}
          className="mt-4 w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors min-h-12 flex items-center justify-center"
        >
          {isLoading ? (
            <span className="flex items-center gap-2">
              <span className="inline-block w-2 h-2 bg-white rounded-full animate-bounce"></span>
              <span>Analyzing food...</span>
            </span>
          ) : (
            'Analyze & Add'
          )}
        </button>
      </div>

      {/* Day Selector */}
      <div className="bg-white rounded-lg border border-gray-200 p-5 shadow-sm">
        <h2 className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-4">Select Date</h2>
        <div className="flex items-center justify-between gap-3 mb-4">
          <button
            onClick={goToPreviousDay}
            aria-label="Go to previous day"
            className="flex-1 py-3 px-3 bg-gray-100 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors min-h-10"
          >
            Previous
          </button>
          <div className="flex-1 text-center">
            <p className="text-base font-semibold text-gray-900">{dateDisplay}</p>
            {isToday && <p className="text-xs text-blue-600 font-medium">Today</p>}
          </div>
          <button
            onClick={goToNextDay}
            aria-label="Go to next day"
            className="flex-1 py-3 px-3 bg-gray-100 text-gray-900 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors min-h-10"
          >
            Next
          </button>
        </div>
        {!isToday && (
          <button
            onClick={goToToday}
            className="w-full py-3 text-sm text-blue-600 font-medium hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors min-h-10"
          >
            Back to Today
          </button>
        )}
      </div>
    </div>
  );
}

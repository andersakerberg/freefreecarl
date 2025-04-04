import { useState } from 'react';

interface TimelineEvent {
  id: string;
  date: string;
  title: string;
  description: string;
  type: 'domstol' | 'kommunikation' | 'bevis' | 'annat';
}

const Timeline = () => {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [newEvent, setNewEvent] = useState<Omit<TimelineEvent, 'id'>>({
    date: '',
    title: '',
    description: '',
    type: 'domstol',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewEvent(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const event: TimelineEvent = {
      ...newEvent,
      id: Date.now().toString(),
    };
    setEvents(prev => [...prev, event].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()));
    setNewEvent({
      date: '',
      title: '',
      description: '',
      type: 'domstol',
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Tidslinje</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Lägg till ny händelse</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Datum
              </label>
              <input
                type="date"
                name="date"
                value={newEvent.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Typ av händelse
              </label>
              <select
                name="type"
                value={newEvent.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="domstol">Domstol</option>
                <option value="kommunikation">Kommunikation</option>
                <option value="bevis">Bevis</option>
                <option value="annat">Annat</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Titel
            </label>
            <input
              type="text"
              name="title"
              value={newEvent.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Beskrivning
            </label>
            <textarea
              name="description"
              value={newEvent.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Lägg till händelse
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Händelsehistorik</h2>
        <div className="space-y-6">
          {events.map(event => (
            <div key={event.id} className="border-l-4 border-blue-500 pl-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(event.date).toLocaleDateString('sv-SE')} - {event.type}
                  </p>
                </div>
              </div>
              {event.description && (
                <p className="mt-2 text-gray-700">{event.description}</p>
              )}
            </div>
          ))}
          {events.length === 0 && (
            <p className="text-gray-500 text-center py-4">Inga händelser registrerade än</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Timeline; 
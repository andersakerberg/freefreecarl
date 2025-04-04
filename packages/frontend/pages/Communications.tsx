import { useState } from 'react';

interface Communication {
  id: string;
  date: string;
  type: 'brev' | 'telefon' | 'möte' | 'email';
  with: string;
  summary: string;
  notes: string;
}

const Communications = () => {
  const [communications, setCommunications] = useState<Communication[]>([]);
  const [newCommunication, setNewCommunication] = useState<Omit<Communication, 'id'>>({
    date: '',
    type: 'brev',
    with: '',
    summary: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewCommunication(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const communication: Communication = {
      ...newCommunication,
      id: Date.now().toString(),
    };
    setCommunications(prev => [...prev, communication]);
    setNewCommunication({
      date: '',
      type: 'brev',
      with: '',
      summary: '',
      notes: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Kommunikation</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Lägg till ny kommunikation</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Datum
              </label>
              <input
                type="date"
                name="date"
                value={newCommunication.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Typ av kommunikation
              </label>
              <select
                name="type"
                value={newCommunication.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="brev">Brev</option>
                <option value="telefon">Telefonsamtal</option>
                <option value="möte">Möte</option>
                <option value="email">E-post</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Med vem
              </label>
              <input
                type="text"
                name="with"
                value={newCommunication.with}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Sammanfattning
            </label>
            <input
              type="text"
              name="summary"
              value={newCommunication.summary}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Anteckningar
            </label>
            <textarea
              name="notes"
              value={newCommunication.notes}
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
              Lägg till kommunikation
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Kommunikationshistorik</h2>
        <div className="space-y-4">
          {communications.map(comm => (
            <div key={comm.id} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{comm.summary}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(comm.date).toLocaleDateString('sv-SE')} - {comm.type} med {comm.with}
                  </p>
                </div>
              </div>
              {comm.notes && (
                <p className="mt-2 text-gray-700">{comm.notes}</p>
              )}
            </div>
          ))}
          {communications.length === 0 && (
            <p className="text-gray-500 text-center py-4">Ingen kommunikation registrerad än</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Communications; 
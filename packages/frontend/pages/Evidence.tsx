import { useState } from 'react';

interface Evidence {
  id: string;
  title: string;
  type: 'dokument' | 'foto' | 'video' | 'ljud' | 'annat';
  description: string;
  date: string;
  source: string;
  notes: string;
}

const Evidence = () => {
  const [evidenceList, setEvidenceList] = useState<Evidence[]>([]);
  const [newEvidence, setNewEvidence] = useState<Omit<Evidence, 'id'>>({
    title: '',
    type: 'dokument',
    description: '',
    date: '',
    source: '',
    notes: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewEvidence(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const evidence: Evidence = {
      ...newEvidence,
      id: Date.now().toString(),
    };
    setEvidenceList(prev => [...prev, evidence]);
    setNewEvidence({
      title: '',
      type: 'dokument',
      description: '',
      date: '',
      source: '',
      notes: '',
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Bevis</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Lägg till nytt bevis</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titel
              </label>
              <input
                type="text"
                name="title"
                value={newEvidence.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Typ av bevis
              </label>
              <select
                name="type"
                value={newEvidence.type}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="dokument">Dokument</option>
                <option value="foto">Foto</option>
                <option value="video">Video</option>
                <option value="ljud">Ljud</option>
                <option value="annat">Annat</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Datum
              </label>
              <input
                type="date"
                name="date"
                value={newEvidence.date}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Källa
              </label>
              <input
                type="text"
                name="source"
                value={newEvidence.source}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Beskrivning
            </label>
            <textarea
              name="description"
              value={newEvidence.description}
              onChange={handleInputChange}
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Anteckningar
            </label>
            <textarea
              name="notes"
              value={newEvidence.notes}
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
              Lägg till bevis
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Bevislista</h2>
        <div className="space-y-4">
          {evidenceList.map(evidence => (
            <div key={evidence.id} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{evidence.title}</h3>
                  <p className="text-sm text-gray-600">
                    {evidence.type} - {evidence.date && new Date(evidence.date).toLocaleDateString('sv-SE')}
                  </p>
                </div>
              </div>
              {evidence.description && (
                <p className="mt-2 text-gray-700">{evidence.description}</p>
              )}
              {evidence.source && (
                <p className="mt-1 text-sm text-gray-600">Källa: {evidence.source}</p>
              )}
              {evidence.notes && (
                <p className="mt-2 text-gray-700">{evidence.notes}</p>
              )}
            </div>
          ))}
          {evidenceList.length === 0 && (
            <p className="text-gray-500 text-center py-4">Inga bevis registrerade än</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Evidence; 
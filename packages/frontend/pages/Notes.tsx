import { useState } from 'react';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  category: 'allmänt' | 'juridik' | 'kontakter' | 'viktigt';
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [newNote, setNewNote] = useState<Omit<Note, 'id'>>({
    title: '',
    content: '',
    date: new Date().toISOString().split('T')[0],
    category: 'allmänt',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setNewNote(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const note: Note = {
      ...newNote,
      id: Date.now().toString(),
    };
    setNotes(prev => [...prev, note]);
    setNewNote({
      title: '',
      content: '',
      date: new Date().toISOString().split('T')[0],
      category: 'allmänt',
    });
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Anteckningar</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Ny anteckning</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Titel
              </label>
              <input
                type="text"
                name="title"
                value={newNote.title}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Kategori
              </label>
              <select
                name="category"
                value={newNote.category}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
                required
              >
                <option value="allmänt">Allmänt</option>
                <option value="juridik">Juridik</option>
                <option value="kontakter">Kontakter</option>
                <option value="viktigt">Viktigt</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Innehåll
            </label>
            <textarea
              name="content"
              value={newNote.content}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Spara anteckning
            </button>
          </div>
        </form>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Anteckningslista</h2>
        <div className="space-y-4">
          {notes.map(note => (
            <div key={note.id} className="border-b border-gray-200 pb-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium">{note.title}</h3>
                  <p className="text-sm text-gray-600">
                    {new Date(note.date).toLocaleDateString('sv-SE')} - {note.category}
                  </p>
                </div>
              </div>
              <p className="mt-2 text-gray-700 whitespace-pre-wrap">{note.content}</p>
            </div>
          ))}
          {notes.length === 0 && (
            <p className="text-gray-500 text-center py-4">Inga anteckningar än</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes; 
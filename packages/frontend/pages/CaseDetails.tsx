import { useState } from 'react';

const CaseDetails = () => {
  const [caseDetails, setCaseDetails] = useState({
    caseNumber: '',
    sokande: import.meta.env.VITE_SOKANDE,
    svarande: import.meta.env.VITE_SVARANDE,
    status: 'Pågående',
    court: '',
    lawyer: '',
    nextHearing: '',
    description: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCaseDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-8">Ärendedetaljer</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Ärendenummer
              </label>
              <input
                type="text"
                name="caseNumber"
                value={caseDetails.caseNumber}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Domstol
              </label>
              <input
                type="text"
                name="court"
                value={caseDetails.court}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Advokat
              </label>
              <input
                type="text"
                name="lawyer"
                value={caseDetails.lawyer}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Nästa förhandling
              </label>
              <input
                type="date"
                name="nextHearing"
                value={caseDetails.nextHearing}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Sökande
              </label>
              <input
                type="text"
                name="sokande"
                value={caseDetails.sokande}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Svarande
              </label>
              <input
                type="text"
                name="svarande"
                value={caseDetails.svarande}
                disabled
                className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Beskrivning av ärendet
            </label>
            <textarea
              name="description"
              value={caseDetails.description}
              onChange={handleInputChange}
              rows={6}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex justify-end">
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Spara Ärendedetaljer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CaseDetails; 
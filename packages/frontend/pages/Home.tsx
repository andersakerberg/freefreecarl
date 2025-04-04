import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Rättslig Dagbok
        </h1>
        <p className="text-xl text-gray-600">
          En säker plattform för att dokumentera och organisera information kring rättsliga ärenden
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Ärendeöversikt</h2>
          <p className="text-gray-600 mb-4">
            Denna dagbok är utformad för att hjälpa till att organisera och spåra alla aspekter av rättsliga ärenden,
            inklusive bevis, kommunikation och viktiga datum.
          </p>
          <Link
            to="/case-details"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Visa Ärendedetaljer →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Huvudfunktioner</h2>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Dokumentera ärendedetaljer och bevis</li>
            <li>Spåra kommunikation och brev</li>
            <li>Upprätthålla en tidslinje över händelser</li>
            <li>Organisera anteckningar och observationer</li>
            <li>Säker lokal lagring</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Kommunikation</h2>
          <p className="text-gray-600 mb-4">
            Spåra all kommunikation med berörda parter, advokater och andra relevanta kontakter.
            Dokumentera viktiga detaljer från brev och rättslig korrespondens.
          </p>
          <Link
            to="/communications"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            Visa Kommunikation →
          </Link>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4">Bevis & Tidslinje</h2>
          <p className="text-gray-600 mb-4">
            Organisera bevis och upprätthålla en kronologisk tidslinje över händelser för att
            stödja ärendet och spåra utvecklingen av rättsliga processer.
          </p>
          <div className="space-x-4">
            <Link
              to="/evidence"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Visa Bevis →
            </Link>
            <Link
              to="/timeline"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              Visa Tidslinje →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 
export default function ResultCard({ result }: { result: string }) {
  return (
    <div className="border rounded p-4 bg-gray-50 whitespace-pre-wrap">
      <h3 className="font-bold mb-2">📊 AI Analysis</h3>
      {result}
    </div>
  );
}

export default function PaymentFailed() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-red-900 text-white p-4">
      <h1 className="text-4xl font-bold mb-4">❌ Payment Failed</h1>
      <p>Please try again or contact support.</p>
    </div>
  );
}
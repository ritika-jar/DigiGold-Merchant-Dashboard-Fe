export default function InfoCard() {
  return (
    <div className="flex flex-col gap-5 p-4 rounded-lg shadow-md w-[340px]">
      <div className="flex flex-row justify-between">
        <p>Gold Bought</p>
        <p>Gold img</p>
      </div>
      <p className="text-xl text-[#5F38CD] font-bold">0 grams</p>
      <div className="flex flex-row justify-between">
        <p>worth ₹ 0</p>
        <p>0 txns</p>
      </div>
    </div>
  );
}

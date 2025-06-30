
const TicketSelector = ({ selectedTicket, onSelect, noOptionSelected }) => {
  const options = [
    { label: 'Free', desc: 'REGULAR ACCESS', price: 'Free', value: 'free' },
    { label: 'VIP', desc: 'VIP ACCESS', price: '$150', value: 'vip' },
    { label: 'VVIP', desc: 'VVIP ACCESS', price: '$150', value: 'vvip' },
  ];

  return (
    <>
    <p className="text-[16px] text-[rgb(250,250,250)] font-Roboto md:pb-[8px]">Select Ticket Type:</p>
    <div className="bg-[rgb(5,34,40)] border border-[rgb(7,55,63)] h-full w-full max-w-[556px] p-[16px] rounded-[24px]">
    <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6">
      {options.map(({ label, desc, price, value }) => (
        <label
          key={value}
          className={`cursor-pointer p-3 border rounded-2xl w-full md:w-[158px] h-full hover:bg-[rgb(50,122,133)] ${
            selectedTicket === value
              ? 'bg-[rgb(18,70,78)] border-[rgb(25,118,134)]'
              : 'border-2 border-[rgb(25,118,134)]'
          }
          `}
        >
          <input
            type="radio"
            className="hidden"
            name="ticketType"
            value={value}
            checked={selectedTicket === value}
            onChange={() => onSelect(value)}
          />
          <h1 className="text-white text-[24px] font-Roboto pb-[10px] leading-[110.00000000000001%]">{price}</h1>
          <p className="text-white text-[15px] font-Roboto">{desc}</p>
          <p className="text-[14px] text-[rgb(217,217,217)]">20/52</p>
        </label>
      ))}
    </div>
    {noOptionSelected && (
          <p className="text-red-500 text-center mt-4">No Ticket was Chosen!</p>
    )}
    </div>
    </>
  );
};

export default TicketSelector;

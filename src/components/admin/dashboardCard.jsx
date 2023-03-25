const CardComponent = ({ value }) => {
  return (
    <div className="p-1 xs:w-1/2 sm:w-1/4 lg:w-1/4">
      <div className="bg-white w-full rounded-xl p-2 h-28">
        <div className="text-center pb-2 h-1/2">
          <span className="text-4xl sm:font-bold">{value.count}</span>
        </div>
        <div className="text-center overflow-hidden h-1/2">
          <span className="text-base sm:font-semibold text-ellipsis">{value.description}</span>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;

const Timeline = ({ events }) => {
    return (
      <div className="p-4">
        <div className="flex flex-col md:grid grid-cols-12 text-gray-50">
          {events.map((event, idx) => (
            <div key={idx} className="flex md:contents">
              <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
                <div className="h-full w-6 flex items-center justify-center">
                  <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
                </div>
                <div className="w-6 h-6 rounded-full bg-lime-300 absolute top-1/2 -mt-3 shadow"></div>
              </div>
              <div className="bg-gray-800 col-start-3 col-end-12 p-4 rounded my-2 mr-auto shadow-md w-full">
                <div className="flex flex-row justify-between items-center">
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <span className="text-sm text-gray-500">{event.date}</span>
                </div>
                <p className="leading-tight text-justify">{event.description}</p>
                <p className="py-2 text-sm font-semibold text-lime-200">{event.cgpa} CGPA</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default Timeline;
  
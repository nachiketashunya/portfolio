const Timeline = ({ event, idx }) => {
    return (
        <div key={idx} className="flex md:contents">
          <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-gray-800 pointer-events-none"></div>
            </div>
            <div className="w-6 h-6 rounded-full bg-lime-300 absolute top-1/2 -mt-2 shadow"></div>
          </div>
          <div className="bg-gray-800 col-start-3 col-end-12 p-4 rounded my-2 mr-auto shadow-md w-full">
            <div className="flex flex-row justify-between items-center">
                <h3 className="font-semibold text-base mb-1">{event.title}</h3>
                <span className="text-sm text-gray-500">{event.date}</span>
            </div>
            {event.description &&
            <p className="leading-tight text-sm text-justify">{event.description}</p>
            }
            {event.company &&
            <p className="leading-tight text-sm text-justify">{event.company}</p>
            }
            {event.cgpa && 
              <p className="py-2 text-sm font-semibold text-lime-200">{event.cgpa} CGPA</p>
            }
            {event.activity && 
              <div className="mt-2">
                {event.activity.map((act, idx) => {
                  return (
                    <div key={idx} className="mx-2 pt-1">
                      <p className="text-sm"> <span className="text-lime-300"> - </span>{act}</p>
                    </div>
                  )
                })
              }
              </div>
            }
            </div>
        </div>
    );
  };
  
  export default Timeline;
  
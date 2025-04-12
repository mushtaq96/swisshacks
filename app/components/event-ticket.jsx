import { Calendar, Clock, MapPin, Ticket } from "lucide-react"

export default function EventTicket({ eventName, date, time, location, price, imageUrl }) {
    return (
        <div className="card bg-base-100 shadow-xl overflow-hidden">
            <figure>
                <img
                    src={imageUrl}
                    alt={eventName}
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                />
            </figure>
            <div className="card-body">
                <div className="flex justify-between items-start">
                    <h2 className="card-title text-xl font-bold">{eventName}</h2>
                    <div className="badge badge-accent badge-lg">${price.toFixed(2)}</div>
                </div>

                <div className="divider my-2"></div>

                <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span>{time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-primary" />
                        <span>{location}</span>
                    </div>
                </div>

                <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary gap-2">
                        <Ticket className="h-4 w-4" />
                        Buy Ticket
                    </button>
                </div>
            </div>

            {/* Ticket edge styling */}
            <div className="absolute top-0 bottom-0 left-0 w-4 flex flex-col justify-between py-4">
                <div className="w-4 h-4 rounded-full bg-base-200 -ml-2"></div>
                <div className="w-4 h-4 rounded-full bg-base-200 -ml-2"></div>
                <div className="w-4 h-4 rounded-full bg-base-200 -ml-2"></div>
                <div className="w-4 h-4 rounded-full bg-base-200 -ml-2"></div>
            </div>
        </div>
    )
}


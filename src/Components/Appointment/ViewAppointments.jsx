import { useState, useEffect } from "react";
import Appoint from "./Appoint";


// viewappointment  sections 

function ViewAppointments() {

    
    // ViewAppointments functionality 

    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadAppointments = () => {
            try {
                const savedAppointments = JSON.parse(localStorage.getItem('appointments')) || [];
                setAppointments(savedAppointments);
            } catch (error) {
                console.error("Error loading appointments:", error);
            } finally {
                setLoading(false);
            }
        };

        loadAppointments();
    }, []);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this appointment?")) {
            const updatedAppointments = appointments.filter(apt => apt.id !== id);
            localStorage.setItem('appointments', JSON.stringify(updatedAppointments));
            setAppointments(updatedAppointments);
        }
    };

    if (loading) {
        return <div className="text-center py-10">Loading appointments...</div>;
    }

    return (

        // ViewAppointments styling 
        <>
           <Appoint/>
        <section className="p-10 max-w-6xl mx-auto">
            <h1 className="text-3xl font-semibold text-center mb-2 about capitalize">Your Appointments</h1>
            <p className="text-center text-black mb-10 text-5xl font-semibold capitalize">Manage your scheduled visits</p>

            {appointments.length === 0 ? (
                <div className="text-center py-10">
                    <p className="text-xl">No appointments booked yet</p>
                    <p className="text-gray-500 mt-2 ">Book your first appointment using our form</p>
                </div>
            ) : (
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {appointments.map((appointment) => (
                        <div key={appointment.id} className="border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                            <div className="flex justify-between items-start mb-3">
                                <h3 className="font-bold text-lg">{appointment.fullname}</h3>
                                <button 
                                    onClick={() => handleDelete(appointment.id)}
                                    className="text-red-500 hover:text-red-700 cursor-pointer"
                                >
                                    Delete
                                </button>
                            </div>
                            <p className="text-gray-600 mb-1">
                                <span className="font-medium">When:</span> {new Date(appointment.datetime).toLocaleString()}
                            </p>
                            <p className="text-gray-600 mb-1">
                                <span className="font-medium">Email:</span> {appointment.email}
                            </p>
                            {appointment.phone && (
                                <p className="text-gray-600 mb-1">
                                    <span className="font-medium">Phone:</span> {appointment.phone}
                                </p>
                            )}
                            {appointment.message && (
                                <div className="mt-3 pt-3 border-t">
                                    <p className="font-medium">Notes:</p>
                                    <p className="text-gray-600 whitespace-pre-line">{appointment.message}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </section>
        </>
        
    );
}

export default ViewAppointments;
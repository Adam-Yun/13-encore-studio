import React, { useState, useEffect } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus, X, Edit, Trash2 } from 'lucide-react';

interface Appointment {
  id: string;
  title: string;
  date: Date;
  startTime: string;
  endTime: string;
  description: string;
}

const CalendarBookingSystem = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [showForm, setShowForm] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    date: new Date(),
    startTime: '09:00',
    endTime: '10:00',
    description: ''
  });
  const [editMode, setEditMode] = useState(false);

  // Generate dates for the current month view
  const getDaysInMonth = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    
    const daysInMonth = lastDay.getDate();
    const startOffset = firstDay.getDay(); // 0 = Sunday, 1 = Monday, etc.
    
    const days = [];
    
    // Add padding for days from previous month
    for (let i = 0; i < startOffset; i++) {
      days.push(null);
    }
    
    // Add days of current month
    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }
    
    return days;
  };

  const formatDate = (date: Date) => {
    return date.toISOString().split('T')[0];
  };

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleAddAppointment = () => {
    setShowForm(true);
    setEditMode(false);
    setFormData({
      id: '',
      title: '',
      date: new Date(),
      startTime: '09:00',
      endTime: '10:00',
      description: ''
    });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'date' ? new Date(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (editMode && selectedAppointment) {
      // Update existing appointment
      setAppointments(prev => 
        prev.map(app => app.id === selectedAppointment.id ? 
          {...formData, id: selectedAppointment.id} : app
        )
      );
    } else {
      // Add new appointment
      const newAppointment = {
        ...formData,
        id: Date.now().toString()
      };
      setAppointments(prev => [...prev, newAppointment]);
    }
    
    setShowForm(false);
    setSelectedAppointment(null);
    setEditMode(false);
  };

  const handleDayClick = (date: Date | null) => {
    if (!date) return;
    
    const dayAppointments = appointments.filter(
      app => formatDate(app.date) === formatDate(date)
    );
    
    if (dayAppointments.length > 0) {
      // Show appointments for this day
      setFormData({
        id: '',
        title: '',
        date: date,
        startTime: '09:00',
        endTime: '10:00',
        description: ''
      });
    } else {
      // Create new appointment for this day
      setFormData({
        id: '',
        title: '',
        date: date,
        startTime: '09:00',
        endTime: '10:00',
        description: ''
      });
      setShowForm(true);
      setEditMode(false);
    }
  };

  const handleAppointmentClick = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setShowDetails(true);
  };

  const handleEdit = () => {
    if (selectedAppointment) {
      setFormData({
        ...selectedAppointment
      });
      setShowForm(true);
      setShowDetails(false);
      setEditMode(true);
    }
  };

  const handleDelete = () => {
    if (selectedAppointment) {
      setAppointments(prev => prev.filter(app => app.id !== selectedAppointment.id));
      setShowDetails(false);
      setSelectedAppointment(null);
    }
  };

  const getAppointmentsForDay = (date: Date | null) => {
    if (!date) return [];
    return appointments.filter(app => formatDate(app.date) === formatDate(date));
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Calendar className="mr-2" />
          <h1 className="text-2xl font-bold">Calendar Booking System</h1>
        </div>
        <button 
          onClick={handleAddAppointment}
          className="flex items-center bg-blue-500 text-black px-4 py-2 rounded hover:bg-blue-600"
        >
          <Plus size={16} className="mr-1" />
          Add Appointment
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="flex items-center justify-between p-4 bg-gray-100">
          <button 
            onClick={handlePrevMonth}
            className="p-2 rounded hover:bg-gray-200"
          >
            <ChevronLeft size={20} />
          </button>
          <h2 className="text-xl font-semibold">
            {currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
          </h2>
          <button 
            onClick={handleNextMonth}
            className="p-2 rounded hover:bg-gray-200"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="grid grid-cols-7 gap-px bg-gray-200">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="bg-gray-100 p-2 text-center font-semibold">
              {day}
            </div>
          ))}
          
          {getDaysInMonth().map((date, index) => {
            const dayAppointments = getAppointmentsForDay(date);
            return (
              <div 
                key={index} 
                className={`bg-white p-2 h-24 overflow-y-auto ${date ? 'cursor-pointer hover:bg-blue-50' : 'bg-gray-50'}`}
                onClick={() => date && handleDayClick(date)}
              >
                {date && (
                  <>
                    <div className={`text-right ${date.getDate() === new Date().getDate() && 
                      date.getMonth() === new Date().getMonth() && 
                      date.getFullYear() === new Date().getFullYear() ? 
                      'bg-blue-500 text-black rounded-full w-6 h-6 flex items-center justify-center ml-auto' : ''}`}>
                      {date.getDate()}
                    </div>
                    <div className="mt-1">
                      {dayAppointments.length > 0 && (
                        <div className="space-y-1">
                          {dayAppointments.map(app => (
                            <div 
                              key={app.id} 
                              className="bg-blue-100 text-black-800 text-xs p-1 rounded truncate"
                              onClick={(e) => {
                                e.stopPropagation();
                                handleAppointmentClick(app);
                              }}
                            >
                              {app.startTime} - {app.title}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Add/Edit Appointment Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">
                {editMode ? 'Edit Appointment' : 'Add New Appointment'}
              </h2>
              <button 
                onClick={() => setShowForm(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formatDate(formData.date)}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded"
                  required
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium mb-1">Start Time</label>
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleFormChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1">End Time</label>
                  <input
                    type="time"
                    name="endTime"
                    value={formData.endTime}
                    onChange={handleFormChange}
                    className="w-full p-2 border rounded"
                    required
                  />
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleFormChange}
                  className="w-full p-2 border rounded h-24"
                />
              </div>
              
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="mr-2 px-4 py-2 border rounded hover:bg-gray-100"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-500 text-black rounded hover:bg-blue-600"
                >
                  {editMode ? 'Update' : 'Save'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Appointment Details Modal */}
      {showDetails && selectedAppointment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Appointment Details</h2>
              <button 
                onClick={() => setShowDetails(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">{selectedAppointment.title}</h3>
              <p className="text-black-600 mb-2">
                {selectedAppointment.date.toLocaleDateString('en-US', { 
                  weekday: 'long', 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </p>
              <p className="text-black-600 mb-4">
                {selectedAppointment.startTime} - {selectedAppointment.endTime}
              </p>
              <p className="text-black-800 whitespace-pre-line">{selectedAppointment.description}</p>
            </div>
            
            <div className="flex justify-end">
              <button
                onClick={handleEdit}
                className="flex items-center mr-2 px-4 py-2 border rounded hover:bg-gray-100"
              >
                <Edit size={16} className="mr-1" />
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="flex items-center px-4 py-2 bg-red-500 text-black rounded hover:bg-red-600"
              >
                <Trash2 size={16} className="mr-1" />
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CalendarBookingSystem;
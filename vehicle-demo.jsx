import { useState } from "react"
import Car from "../lib/car"
import CarCard from "./car-card"
import "./vehicle-demo.css"

export default function VehicleDemo() {
  const [cars, setCars] = useState([])
  const [formData, setFormData] = useState({
    make: "",
    model: "",
    year: new Date().getFullYear(),
  })
  const [logs, setLogs] = useState([])

  // Custom console.log to capture output
  const captureLog = (message) => {
    setLogs((prevLogs) => [message, ...prevLogs])
    console.log(message)
  }

  const handleAddCar = (e) => {
    e.preventDefault()
    if (!formData.make || !formData.model) {
      captureLog("❌ Error: Make and Model are required")
      return
    }

    // Create a new Car instance
    const newCar = new Car(formData.make, formData.model, formData.year)

    // Add to state
    setCars((prevCars) => [...prevCars, { ...newCar, id: Date.now() }])

    // Call start method and capture log
    captureLog(`✅ ${formData.make} ${formData.model} (${formData.year}) created`)

    // Reset form
    setFormData({
      make: "",
      model: "",
      year: new Date().getFullYear(),
    })
  }

  const handleStartEngine = (carId, make, model) => {
    const car = new Car(make, model, cars.find((c) => c.id === carId).year)
    car.start() // This logs "Car engine started"
    captureLog(`🚗 ${make} ${model} - Car engine started`)
  }

  const handleDeleteCar = (carId) => {
    setCars((prevCars) => prevCars.filter((c) => c.id !== carId))
    captureLog("🗑️  Car removed from fleet")
  }

  return (
    <div className="vehicle-demo">
      <div className="demo-container">
        <section className="form-section">
          <h2>Add New Vehicle</h2>
          <form onSubmit={handleAddCar} className="vehicle-form">
            <div className="form-group">
              <label htmlFor="make">Make</label>
              <input
                id="make"
                type="text"
                placeholder="e.g., Toyota"
                value={formData.make}
                onChange={(e) => setFormData({ ...formData, make: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="model">Model</label>
              <input
                id="model"
                type="text"
                placeholder="e.g., Camry"
                value={formData.model}
                onChange={(e) => setFormData({ ...formData, model: e.target.value })}
              />
            </div>

            <div className="form-group">
              <label htmlFor="year">Year</label>
              <input
                id="year"
                type="number"
                min="1900"
                max={new Date().getFullYear()}
                value={formData.year}
                onChange={(e) => setFormData({ ...formData, year: Number.parseInt(e.target.value) })}
              />
            </div>

            <button type="submit" className="btn btn-primary">
              Add Vehicle
            </button>
          </form>
        </section>

        <section className="cars-section">
          <h2>Fleet ({cars.length})</h2>
          {cars.length === 0 ? (
            <p className="empty-state">No vehicles added yet. Create your first car!</p>
          ) : (
            <div className="cars-grid">
              {cars.map((car) => (
                <CarCard
                  key={car.id}
                  car={car}
                  onStart={() => handleStartEngine(car.id, car.make, car.model)}
                  onDelete={() => handleDeleteCar(car.id)}
                />
              ))}
            </div>
          )}
        </section>

        <section className="logs-section">
          <h2>Console Output</h2>
          <div className="logs-container">
            {logs.length === 0 ? (
              <p className="log-entry empty">No actions yet...</p>
            ) : (
              logs.map((log, index) => (
                <p key={index} className="log-entry">
                  {log}
                </p>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  )
}
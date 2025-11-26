import "./car-card.css"

export default function CarCard({ car, onStart, onDelete }) {
  return (
    <div className="car-card">
      <div className="car-info">
        <h3 className="car-title">
          {car.make} {car.model}
        </h3>
        <p className="car-year">Year: {car.year}</p>
      </div>
      <div className="car-actions">
        <button className="btn btn-action btn-start" onClick={onStart}>
          Start Engine
        </button>
        <button className="btn btn-action btn-delete" onClick={onDelete}>
          Remove
        </button>
      </div>
    </div>
  )
}
// Note: The Home component and related imports were accidentally inserted here.
// This file only exports the CarCard component.
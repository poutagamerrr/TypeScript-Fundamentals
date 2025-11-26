import VehicleDemo from "./components/vehicle-demo"
import "./App.css"

export default function Home() {
  return (
    <div className="page-container">
      <header className="page-header">
        <h1>Vehicle Management System</h1>
        <p>Demonstrating JavaScript Classes and Objects in React</p>
      </header>
      <main className="page-main">
        <VehicleDemo />
      </main>
    </div>
  )
}
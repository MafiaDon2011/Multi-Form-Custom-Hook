import { useMultistepForm } from "./hooks/useMultistepForm"

function App() {
  const { steps, currentStepIndex } = useMultistepForm([<div>One</div>, <div>Two</div>])
  const {} = useMultistepForm(steps)
  return <div style={{
    position: "relative",
    background: "white",
    border: "1px solid black",
    padding: "2rem",
    margin: "1rem",
    borderRadius: ".5rem",
    fontFamily: "Arial"
  }}>
    <form>
      <div style={{
        position: "absolute",
        top: ".5rem",
        right: ".5rem",
      }}>
        {currentStepIndex + 1} / {steps.length}
        
      </div>
    </form>
  </div>
}

export default App

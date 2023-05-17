import { Header } from "./components/Header"

function App() {
  return (
    <div className="h-screen w-screen flex flex-col bg-base-background items-center">
      <Header />

      <div className="bg-base-profile w-8/12 flex p-8 -my-10 rounded-lg gap-8">
        <img width={148} height={148} />
        <div className="flex flex-col w-fit gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <h2 className="text-base-title">Felipe Lustosa</h2>
              <a className="text-brand-blue text-link">GITHUB</a>
            </div>
            <p>
              Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
            </p>
          </div>
        </div>
      </div>
      <main className="w-96 flex flex-col">

      </main>

    </div>
  )
}

export default App

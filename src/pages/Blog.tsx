import { Header } from "../components/Header";

export function Blog() {
  return (
    <div className="flex flex-col w-screen bg-base-background items-center pb-8">
      <Header />

      <main className="w-8/12 flex flex-col gap-16">
        <div className="bg-base-profile flex p-8 -mt-16 rounded-lg gap-8">
          <img width={148} height={148} />
          <div className="flex flex-col w-fit gap-6">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between">
                <h2 className="text-base-title">Felipe Lustosa</h2>
                <a className="text-brand-blue text-link flex gap-2 items-center">GITHUB <img src="/assets/link.svg" /></a>
              </div>
              <p className="text-base text-base-text">
                Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.
              </p>
            </div>
            <div className="flex gap-6 items-center">
              <div className="flex gap-2">
                <img src="/assets/github.svg" />
                <span className="text-base-subtitle">felipelustosa</span>
              </div>
              <div className="flex gap-2">
                <img src="/assets/company.svg" />
                <span className="text-base-subtitle">WayinCode</span>
              </div>
              <div className="flex gap-2">
                <img src="/assets/followers.svg" />
                <span className="text-base-subtitle">32 seguidores</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between">
              <h2 className="text-title-sm text-base-subtitle">Publicações</h2>
              <span className="text-base-span text-sm">6 publicações</span>
            </div>
            <input
              className="w-full border border-base-border bg-base-input px-4 py-3 rounded-md"
              placeholder="Buscar conteúdo"
            />
          </div>

          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-6 bg-base-post flex flex-col items-center gap-5 p-8 cursor-pointer rounded-lg hover:outline transition-all easy-in-out outline-2 hover:outline-base-span">
              <div className="flex justify-between items-center gap-4 w-full">
                <h3 className="text-title-md text-base-title">JavaScript data types and data structures</h3>
                <span className="text-sm text-base-span break-keep">Há 1 dia</span>
              </div>
              <p className="text-base-text rounded-lg">Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in </p>
            </div>
          </div>
        </div>
      </main>

    </div>
  )
}
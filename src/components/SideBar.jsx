import Information from "./Information";

export default function SideBar() {
  return (
    <aside className="flex flex-row items-center object-cover w-full px-4 py-2 mb-4 mr-0 border border-solid lg:px-8 lg:py-4 lg:mb-0 lg:mr-6 lg:flex-col h-1/5 lg:w-1/5 lg:h-full lg:min-w-64 rounded-2xl border-neutral-700 bg-neutral-800">
      <img
        src="https://images.steamusercontent.com/ugc/1683745326201342430/DA2905C244383E8B74E46EFA266BC6BDB42CD899/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false"
        alt="Rafal Curzydło"
        className="object-cover h-full mx-6 lg:h-64 lg:w-full rounded-xl"
      />
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="mt-2 text-2xl font-bold text-neutral-300">Rafał Curzydło</h1>
        <h2 className="text-xl font-bold text-neutral-400">FrontEnd Devloper</h2>
      </div>
      <Information />
    </aside>
  );
}

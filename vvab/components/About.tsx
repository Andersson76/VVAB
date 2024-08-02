

export default function About() {
  return (
    <div
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row
    max-w-7xl px-10 justify-evenly mx-auto items-center"
    >
      <div className="space-y-6">
        <h3 className="flex pl-6 justify-center uppercase tracking-[10px] text-gray-500 text-2xl mb-20">
          Om oss
        </h3>
        <div className="flex items-center space-x-1 justify-center">
          <p className="text-2xl">
            Väst ventilation AB
          </p>
        </div>
        <div className="flex items-center space-x-1 justify-center">
          <p className="text-2xl">
           Vi ligger i Floda, strax utanför Göteborg.
          </p>
        </div>
        <div className="flex items-center space-x-1 justify-center">
          <p className="text-2xl">Vi är proffs på ventilation.</p>
        </div>
        <div className="flex items-center space-x-1 justify-center">
          <p className="text-2xl">
            Kontakta Peter för mer information om hur vi kan hjälpa dig.
          </p>
        </div>
      </div>
    </div>
  )
}

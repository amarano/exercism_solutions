module SpaceAge

type Planet = Mercury | Venus | Earth | Mars | Jupiter | Saturn | Uranus | Neptune

let planetFactor planet = 
    match planet with
    | Mercury -> 0.2408467
    | Venus -> 0.61519726
    | Earth -> 1.0
    | Mars -> 1.8808158
    | Jupiter -> 11.862615
    | Saturn -> 29.447498
    | Uranus -> 84.016846
    | Neptune -> 164.79132



let toEarthYears seconds = 
    seconds / 60m / 60m / 24m / 365.25m

type SpaceAge(inSeconds:decimal) = 
    member this.Seconds = inSeconds

    member private this.EarthYears = this.Seconds |> toEarthYears |> float

    member this.onEarth = 
        this.onPlanet Earth

    member this.onMercury = 
        this.onPlanet Mercury

    member this.onVenus = 
        this.onPlanet Venus

    member this.onMars = 
        this.onPlanet Mars

    member this.onJupiter = 
        this.onPlanet Jupiter

    member this.onSaturn = 
        this.onPlanet Saturn

    member this.onUranus = 
        this.onPlanet Uranus

    member this.onNeptune = 
        this.onPlanet Neptune

    member private this.onPlanet planet = 
        System.Math.Round(this.EarthYears / (planetFactor planet), 2)

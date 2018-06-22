module Bob

type Address = Statement | Question | Exclaimation | Silence

let determineTypeOfAddress (address:string) = 
    match address with
    | s when System.String.IsNullOrWhiteSpace(address) -> Silence
    | s when 
        let allLetters = address.ToCharArray() |> Array.toList |> List.filter (fun x -> System.Char.IsLetter(x)) 
        allLetters 
        |> List.length > 0 
        && allLetters 
        |> List.forall (fun x -> System.Char.IsUpper(x)) -> Exclaimation
    | s when address.EndsWith("!") -> Exclaimation
    | s when address.EndsWith("?") -> Question
    | _ -> Statement

type Bob(address) = 
    let incoming = determineTypeOfAddress address
    let respond address =
        match address with
        | Statement -> "Whatever."
        | Question -> "Sure."
        | Exclaimation -> "Woah, chill out!"
        | Silence -> "Fine, be that way."
    member this.hey() = 
        respond incoming
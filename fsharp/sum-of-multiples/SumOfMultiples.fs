module SumOfMultiples

type SumOfMultiples(?multiplesList) = 
    let multiples = defaultArg multiplesList [3;5]
    member this.To(max) = 
        [1..max - 1]
        |> List.filter (fun x -> multiples |> List.exists (fun y -> x % y = 0))
        |> List.sum
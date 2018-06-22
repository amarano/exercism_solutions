module DifferenceOfSquares

type DifferenceOfSquares(upTo) = 
    let m = upTo
    let square x = x * x
    member this.squareOfSums() = 
        [1..upTo] 
        |> List.sum
        |> square
    member this.sumOfSquares() = 
        [1..upTo]
        |> List.map square
        |> List.sum
    member this.difference() = 
        this.squareOfSums() - this.sumOfSquares()
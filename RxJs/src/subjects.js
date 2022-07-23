import { Subject, BehaviorSubject, ReplaySubject } from "rxjs"

document.addEventListener("click", () => {

    const stream$ = new ReplaySubject(2)

    stream$.next("Hello")
    stream$.next("Rx")
    stream$.next("Js")

    stream$.subscribe(value => console.log("Value", v))


})
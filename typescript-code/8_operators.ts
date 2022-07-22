interface Person {
    name: string,
    age: number
}

type PersonKeys = keyof Person // "name" | "age"

let key: PersonKeys = "name"
key = "age"


type User = {
    _id: number,
    name: string
    email: string
    ctreatedAt: Date
}

type UserKeysNoMeta = Exclude<keyof User, "_id" | "createdAt"> // "name" | "email"
type serKeysNoMeta = Pick<User, "name" | "email">

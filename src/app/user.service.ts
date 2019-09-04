import { Injectable } from '@angular/core'

interface user {
    username: string,
    uid: string
}

@Injectable()   // Hierdurch können wie diese Klasse in andere Komponenten injecten
export class UserService {
    private user: user

    constructor() {

    }

    setUser(user: user) {
        this.user = user
    }

    getUID() {
        return this.user.uid
    }
}
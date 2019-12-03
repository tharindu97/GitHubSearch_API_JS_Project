class Github {
    constructor(){
        this.client_id = 'dc9af257b9663fd0ac32';
        this.client_secret = '5ac89454e3d00a97d9336fe5f6ed18212eac09de';
    }

    async getUser(user){
        const profileResponse = await fetch (`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        const profile = await profileResponse.json();

        return{
            profile
        }

    }
}


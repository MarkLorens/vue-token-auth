import store from '@/store'

store.subscribe((mutation) => {
    switch(mutation.type){
        case 'auth/SET_TOKEN':
            if (mutation.payload){
                localStorage.setItem('token', mutation.payload)
            }
            else{
                localStorage.removeItem('token')
                localStorage.removeItem('uID')
            }
            break;
    }
})
import Axios from 'axios';

export const getMovies = () =>{
    return new Promise((resolve, reject) => {
        Axios.get('http://api.tvmaze.com/schedule')
        .then (response => {
            //status 400(erro) também cai aqui, deemos tratar! (Particularidade do AXIOS)
            //Nota: COmparaçao de String com == e int ===
            if(response.status===200){
                resolve(response.data)
            }else{
                reject([]);
            }
        })
        .catch(err => {
            reject([]);
        })
    })
}

export const getMoviesBySearch = (string) =>{
    return new Promise((resolve, reject) => {
        Axios.get(`http://api.tvmaze.com/search/shows?q=${string}`)
        .then (response => {
            //status 400(erro) também cai aqui, devemos tratar!
            if(response.status===200){
                resolve(response.data)
            }else{
                reject([]);
            }
        })
        .catch(err => {
            reject([]);
        })
    })
}

export const getDetails = (id) => Axios
    .get (`http://api.tvmaze.com/shows/${id}`)
    .then (({data}) => data)
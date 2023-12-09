import axios from 'axios'


const proxyUrl = "https://cors-anywhere.herokuapp.com/";
let url = "https://finance.naver.com/item/main.naver?code=298690";


axios.get(proxyUrl+url).then(function (response) {
    // 성공했을 때
    const data = response.data;
    console.log(data);
})
    .catch(function (error) {
        // 에러가 났을 때
        console.log(error);
    })
    .finally(function () {
        // 항상 실행되는 함수
    });
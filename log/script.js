const URL = 'https://192.168.1.103:8443/?'


getAdress () 


//Проверить адрес
async function getAdress () {
    console.log('getAdress');
    
    let param = 'action=get_regions';
    let region = await getData(param);
  
    console.log(region);
  
  }


async function getData(param){
    console.log('getData');

    let response = await fetch(URL + param, {
      method: 'GET',
    })

    let data = await response.json();
    return data;
}
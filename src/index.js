import { 
  getDataApi, 
  getTitle,
} from "./components";

const containerCards = document.querySelector('#containerCards');


getTitle();
const dataRender = getDataApi();

dataRender.then((resp)=>{
  resp.map((data)=>{
    const imgCard = document.createElement('img');
    imgCard.src = data.image;
    imgCard.classList.add('card');
    containerCards.append( imgCard );
  });
});




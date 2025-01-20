const button=document.getElementById('btn');
const jokecontent=document.getElementById('jokecontent');
const joke=document.getElementById('joke');
const button1=document.getElementById('btn1');
const advicecontent=document.getElementById('advicecontent');
const advice=document.getElementById('advice');
const button2=document.getElementById('btn2');
const imagecontent=document.getElementById('imagecontent');
const image=document.getElementById('image');
/*when fetching api no need of add eventlistener*/
button.onclick=()=>{
    axios.get('https://official-joke-api.appspot.com/random_joke').then(function(response)
     {
button.textContent="Next";
jokecontent.textContent=response.data.setup;
joke.textContent="";
setTimeout(function(){
    joke.textContent=response.data.punchline;   
},5000);


    })+

    .catch(function(error)
{
    console.log(error);
})
}

button1.onclick = () => {
    axios.get('https://api.adviceslip.com/advice')
        .then(function (response) {
            button1.textContent = "Next";
            const adviceText = response.data.slip.advice;
            advicecontent.textContent = adviceText;
            
        })
        .catch(function (error) {
            console.log(error);
        });
};

const randomImage=document.getElementById('dog');
button2.onclick = () => {
    axios.get('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            button2.textContent = "Next"; 
            const dogImageUrl = response.data.message;
            randomImage.src = dogImageUrl; 
        })
        .catch(function (error) {
            console.log(error);
        });
};



let myHeading = document.querySelector('h1');   //  捕获h1这个属性
myHeading.textContent = 'Hello World';
document.querySelector('h1').onclick = function() {
    alert('Test Click');
}
document.querySelector('li').onclick = () => {
    alert('Test Click and anonymous function');
}

let myImage = document.querySelector('img');
document.querySelector('img').onclick = () => {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/test-pic.png'){
        myImage.setAttribute('src','images/test-pic2.jpg');
    }else{
        myImage.setAttribute('src','images/test-pic.png');
    }
}

let myButton = document.querySelector('button');
function setUserName() {
    let myName = prompt ("Please Log in your Name"); //prompt为弹出填写对话框（梦回vb）
    while (myName === null){
        myName = prompt ("Please Log in your Name, don't log in blank");
    }
    localStorage.setItem('name', myName); // 本地存储，key-value结构
    myHeading.textContent = 'Store myName + ' + myName;
}
if (!!!localStorage.getItem('name')){
    setUserName()
}else{
    myHeading.textContent = 'Load my name + ' + localStorage.getItem('name');
}
myButton.onclick = ()=> {
    setUserName()
}
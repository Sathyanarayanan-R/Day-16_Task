
document.body.style.margin = '0px';
document.body.style.color = 'red';

const mainDiv = document.createElement('div');
mainDiv.style.width = '100vw';
mainDiv.style.height = '100vh';

const innerDiv1 = document.createElement('div');
innerDiv1.style.width = '100vw';
innerDiv1.style.height = '33.3vh';
innerDiv1.style.backgroundColor = '#ff9a30';

const innerDiv2 = document.createElement('div');
innerDiv2.style.width = '100vw';
innerDiv2.style.height = '33.3vh';
innerDiv2.setAttribute('class', 'flexContainer india-img');

const innerDiv3 = document.createElement('div');
innerDiv3.style.width = '100vw';
innerDiv3.style.height = '33.3vh';
innerDiv3.style.backgroundColor =  '#098901';

const imgEle = document.createElement('img');
imgEle.src = 'Ashoka_Chakra.svg';
imgEle.style.height = '100%';

const h1Ele = document.createElement('h1');
h1Ele.setAttribute('class', 'h1-pos');

innerDiv2.append(imgEle, h1Ele);

mainDiv.append(innerDiv1, innerDiv2, innerDiv3);

document.body.append(mainDiv);


// Implement backwards count without using setInterval
setTimeout(() => {
  h1Ele.innerText = 10;
  setTimeout(() => {
    h1Ele.innerText = 9;
    setTimeout(() => {
      h1Ele.innerText = 8;
      setTimeout(() => {
        h1Ele.innerText = 7;
        setTimeout(() => {
          h1Ele.innerText = 6;
          setTimeout(() => {
            h1Ele.innerText = 5;
            setTimeout(() => {
              h1Ele.innerText = 4;
              setTimeout(() => {
                h1Ele.innerText = 3;
                setTimeout(() => {
                  h1Ele.innerText = 2;
                  setTimeout(() => {
                    h1Ele.innerText = 1;
                    setTimeout(() => {
                      h1Ele.innerText = 'Happy Independence Day';
                    }, 1000);
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);


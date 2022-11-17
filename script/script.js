const cvs = document.querySelector('#cvs');
const ctx = cvs.getContext('2d');
const data = {
    'javascript': 45000,
    'python': 35000,
    'java': 25000,
    'golang': 40000
};

const scale = 100;
const column_width = 100;
const column_height = Object.values(data).reduce((a, b) => a>b? a:b)/scale;

const getColor = () => Math.round(Math.random() * 255);

function resize(){
    cvs.width = window.innerWidth;
    cvs.height = window.innerHeight;
    rerender()
}

window.addEventListener('resize', resize);
resize();


function rerender(){
    Object.entries(data).forEach((elem, index) => {
        const [key, value] = elem;
        ctx.strokeRect(
            20,
            (column_width + 10) * (index+1),
            column_height,
            column_width,
            
        )
    
        ctx.fillStyle = `rgb(${getColor()}, ${getColor()}, ${getColor()})`;
    
        ctx.fillRect(
            20,
            (column_width + 10) * (index+1),
            value / scale,
            column_width
            
        )

        ctx.fillStyle = '#000000';
        ctx.font="20px sans-serif"
        ctx.fillText(key, 30, (column_width + 10) * (index+1) + 50);
    })
}
rerender()







// const width = 40;

// const n = 10;
// const size = 40;

// for (let i = 1; i <= n; i++){
//     ctx.strokeRect(
//         (size + 10) * i,
//         30 + (n-i) * size, 
//         size, 
//         size * i
//     );
// }

// ctx.beginPath();

// ctx.moveTo(100, 100);
// ctx.lineTo(100, cvs.height - 100);
// ctx.lineTo(cvs.width - 100, cvs.height - 100);
// ctx.lineTo(cvs.width - 100, 100);
// ctx.lineTo(100, 100);

// ctx.stroke();

// let x = cvs.width/2;
// let y = cvs.height/2;

// cvs.addEventListener('mousemove', (event)=>{
//     const {clientX, clientY} = event
//     x = clientX;
//     y = clientY;
//     rerender()
// })


// function rerender(){
//     ctx.clearRect(0, 0, cvs.width, cvs.height);
//     const n = 50;
//     for (let i = 1; i <= 50; i++){
//         ctx.beginPath();
//         ctx.arc(x, y, 5*i, 0, 2*Math.PI * i/n);
//         ctx.stroke();
//     }
// }
// rerender()






// попробуйте реализовать 10 прямоугольников 

// нарисовать квадрат, который отступает от краев экрана на 100 единиц

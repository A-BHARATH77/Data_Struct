document.addEventListener("DOMContentLoaded", function() {
    const Button1 = document.getElementById('Button1');
    const button2 =document.getElementById('button2');
    const button3=document.getElementById('button3');
    const button4=document.getElementById('button4');

    if (Button1) {
      Button1.addEventListener('click', () => {
        window.location.href='BST.html';
      });
    }
    if(button2)
        button2.addEventListener('click', () => {
            window.location.href = 'BFS.html';
        });
    if(button3)
      button3.addEventListener('click', () => {
        window.location.href = 'DFS.html';
        });
    if(button4)
          button4.addEventListener('click', () => {
            window.location.href = 'hashtable.html';
            });
            if(button5)
              button5.addEventListener('click', () => {
                window.location.href = 'Queue.html';
                });
  });

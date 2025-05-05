function changeTheme() {
    const darkBtn = document.getElementById('darkBtn');
    const lightBtn = document.getElementById('lightBtn');
    const header = document.getElementById('header');
    const logo = document.getElementById('logo');
    const links = document.querySelectorAll('a');
    const texts = document.querySelectorAll('h2, p, button');
  
    darkBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = 'black';
      document.body.style.color = 'white';
  
      header.style.backgroundColor = 'black';
      header.style.color = 'white';
  
      logo.style.color = 'white';
  
      links.forEach(link => link.style.color = 'white');
      texts.forEach(el => el.style.color = 'white');
    });
  
    lightBtn.addEventListener('click', () => {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
  
      header.style.backgroundColor = 'white';
      header.style.color = 'black';
  
      logo.style.color = 'black';
  
      links.forEach(link => link.style.color = 'black');
      texts.forEach(el => el.style.color = 'black');
    });
  }
  
  changeTheme();
  
const form = document.querySelector('.emailForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const email = e.target.querySelector('#email').value;
  let regex = new RegExp('[a-z0-9]+@[a-z]+.[a-z]{2,3}');
  if (!regex.test(email)) {
    form.classList.add('errorForm');
    return;
  }
  swtichSuccess(email);
});

const swtichSuccess = function (email) {
  document.querySelector('.content').style.display = 'none';
  document.querySelector('picture').style.display = 'none';

  const container = document.querySelector('.container');
  container.classList.add('containerSuccess');

  const content = document.createElement('div');
  content.classList.add('content');
  content.classList.add('contentSuccess');
  container.appendChild(content);

  const iconSuccess = document.createElement('img');
  iconSuccess.src = './assets/images/icon-success.svg';
  iconSuccess.classList.add('iconSuccess');
  content.appendChild(iconSuccess);

  const title = document.createElement('h1');
  title.classList.add('heading');
  title.textContent = 'Thanks for subscribing!';
  content.appendChild(title);

  const textC = document.createElement('p');
  textC.innerHTML = `A confirmation email has been sent to <strong>${email}</strong>. Please open it and click the button inside to confirm your subscription`;
  content.appendChild(textC);

  const disBtn = document.createElement('button');
  disBtn.classList.add('button');
  disBtn.classList.add('disBtn');
  disBtn.textContent = 'Dismiss message';
  container.appendChild(disBtn);
};

const menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
    ];
  
  const mainEl = document.querySelector("main");
  mainEl.style.background = "var(--main-bg)";
  const headOne = document.createElement("h1");
  headOne.innerText = "hey, what's up?";
  mainEl.append(headOne);
  mainEl.classList.add("flex-ctr");
  
  
  
  const topMenuEl = document.getElementById("top-menu");
  topMenuEl.style.height = "100%";
  topMenuEl.style.background = "var(--top-menu-bg)";
  topMenuEl.classList.add("flex-around");
  
  
  menuLinks.forEach((link) =>{
    const aElement = document.createElement("a");
    aElement.href = link.href;
    aElement.textContent = link.text;
    topMenuEl.appendChild(aElement)
  })
  
  const subMenuEl = document.getElementById("sub-menu");
  subMenuEl.style.height = "100%";
  subMenuEl.style.background = "var(--sub-menu-bg)";
  subMenuEl.classList.add("flex-around");
  subMenuEl.style.position = "absolute";
  subMenuEl.style.top = "0";
  
  
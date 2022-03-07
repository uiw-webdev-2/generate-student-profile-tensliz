const studentpf = {
    name: "Student Profile",
    firstname: "Lizbeth",
    lastname:"De Leon",
    email: "lideleo1@student.uiwtx.edu",
    PIDM:"",
    school:"University of Incarnate Word",
    Gradelevel:"Junior",
    image: "profile.img",
    altimg: "ID picture",
  };
  
  const content = `
      <h1 class="studentpf_header">${studentpf.name}</h1>
      <ul class="studentpf__features">
        <li class="studentpf__name">First Name: <span> ${
          studentpf.firstname
        }</span></li>
        <li class="studentpf__lname">Last Name: <span> ${
          studentpf.lastname
        }</span></li>
        <li class="studentpf__email">E-mail: <span> ${
          studentpf.email
        }</span></li>
        <li class="studentpf__PIDM">PIDM: <span> ${
          studentpf.PIDM
        }</span></li>
        <li class="studentpf__sch">School Name: <span> ${
          studentpf.school
        }</span></li>
        <li class="studentpf__gradelvl">Grade Level: <span> ${
          studentpf.Gradelevel
        }</span></li>
      </ul>  
  `;
  

  const CreateImg = (dataobj) => {
      let theImg = document.createElement("img");
      theImg.setAttribute("src",dataobj.image);
      theImg.setAttribute("alt", dataobj.altimg);
      return theImg;
  }
  const createArticle = (studentpf) => {
    let newArticle = document.createElement ('article');
    newArticle.innerHTML = content;
    newArticle.prepend(CreateImg(studentpf));
    return newArticle; 
  };
  
  document.querySelector("main").append(createArticle(studentpf));
  
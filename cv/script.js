 // Données pour chaque section du CV
 const aboutMeData = {
    title: "À propos de moi",
    content: "Je suis un informaticien passionné par le développement web et les nouvelles technologies. J'ai une solide expérience dans la création d'applications web interactives utilisant HTML, CSS et JavaScript."
  };

  const experienceData = [
    {
      date: "Janv. 2022 - Présent",
      company: "Entreprise A",
      position: "Développeur Web"
    },
    {
      date: "Mars 2020 - Déc. 2021",
      company: "Entreprise B",
      position: "Stagiaire "
    }
  ];

  const skillsData = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "SQL",
    "Git"
  ];

  const educationData = {
    date: "2018 - 2021",
    institution: "Université XYZ",
    degree: "Licence en Informatique"
  };

  const contactData = {
    email: "ANDRIAMAMONJISOA Rado",
    phone: "0348445732"
  };

  // Fonction pour générer le contenu du CV en utilisant les données stockées dans JavaScript
  function generateCV() {
    const nameElement = document.getElementById("name");
    nameElement.textContent = "ANDRIAMAMONJISOA Rado"; // Remplacez par la variable contenant votre nom

    const professionElement = document.getElementById("profession");
    professionElement.textContent = "Développeur "; // Remplacez par la variable contenant votre profession

    const cvContainer = document.getElementById("cvContainer");

    // À propos de moi
    const aboutMeSection = document.createElement("div");
    aboutMeSection.classList.add("section");
    aboutMeSection.innerHTML = `<h2>${aboutMeData.title}</h2><p>${aboutMeData.content}</p>`;
    cvContainer.appendChild(aboutMeSection);

    // Expérience professionnelle
    const experienceSection = document.createElement("div");
    experienceSection.classList.add("section");
    let experienceHTML = `<h2>${experienceData.title}</h2><ul>`;
    experienceData.forEach((exp) => {
      experienceHTML += `<li><span class="date">${exp.date}</span><span class="info"><h3>${exp.company}</h3><p>${exp.position}</p></span></li>`;
    });
    experienceHTML += "</ul>";
    experienceSection.innerHTML = experienceHTML;
    cvContainer.appendChild(experienceSection);

    // Compétences
    const skillsSection = document.createElement("div");
    skillsSection.classList.add("section", "skills");
    let skillsHTML = `<h2>Compétences</h2><ul>`;
    skillsData.forEach((skill) => {
      skillsHTML += `<li>${skill}</li>`;
    });
    skillsHTML += "</ul>";
    skillsSection.innerHTML = skillsHTML;
    cvContainer.appendChild(skillsSection);

    // Formation
    const educationSection = document.createElement("div");
    educationSection.classList.add("section");
    educationSection.innerHTML = `<h2>Formation</h2><ul><li><span class="date">${educationData.date}</span><span class="info"><h3>${educationData.institution}</h3><p>${educationData.degree}</p></span></li></ul>`;
    cvContainer.appendChild(educationSection);

    // Contact
    const contactSection = document.createElement("div");
    contactSection.classList.add("section");
    contactSection.innerHTML = `<h2>Contact</h2><p>Email: ${contactData.email}</p><p>Téléphone: ${contactData.phone}</p>`;
    cvContainer.appendChild(contactSection);
  }

  // Appel de la fonction pour générer le CV lors du chargement de la page
  generateCV();
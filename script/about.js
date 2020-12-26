$( document ).ready(function() {

    setLocalStrorage();

    getDataFromLocalStorage();

});

function setLocalStrorage() {

    if(localStorage.getItem('about') == null) {
         // set about text
        aboutText = `Merhaba ben Abdullah Can TEKİN. Ben DevOps Mühendis adayıyım. <br><br> En son staj yaptığım kurumdan beri DevOps ile uğraşıyorum. Son aylarda da Azure ile çalışıyorum.`
        localStorage.setItem('about', aboutText);
    }   

    if(localStorage.getItem('moreInformation') == null) {
        // set more information datas
        moreInformation = {
            'age': 21,
            'email': 'abdullahcant78@gmail.com',
            'address': 'Eyüp/İstanbul - Türkiye',
            'language': 'İngilizce, Almanca',
        }
        localStorage.setItem('moreInformation', JSON.stringify(moreInformation));
    }  

    if(localStorage.getItem('workExperience') == null) { 
        // set work experience datas
        workExperience = [
            {
                'id': 1,
                'title': 'IT Specialist Intern - TOP Hair Clinic',
                'time': 'Haziran 2019 - Ekim 2019',
                'description': 'Genel anlamıyla herhangi bir şirketteki IT ne yapıyorsa onların hepsini öğrendim. Bunun yanında firmanın müşteriler ile ilişkilerinde rol alarak da internet sitesi üzerindeki admin işlemlerini gerçekleştirdim.'
            },
            {
                'id': 2,
                'title': 'DevOps Intern',
                'time': 'Temmuz 2020 - Eylül 2020',
                'description': 'Jetkins ve Octopus Deploy üzerinde çalışmalar yaparak DevOps camiasına giriş yaptım. Bir yandan da Microservice mimarileri üzerine çalışmalara ve araştırmalara devam ederek demo bir uygulama geliştirdim.'
            }
        ];
        localStorage.setItem('workExperience', JSON.stringify(workExperience));
    }

    if(localStorage.getItem('educationInformation') == null) { 
        // set education information datas
        educationInformation = [
            {
                'id': 1,
                'title': 'Kocaeli Üniversitesi<br>Bilişim Sistemleri Mühendisliği - 4.Sınıf',
                'time': '2017 - Devam Ediyor',
                'description': 'Kendimi yazılım sektöründe geliştirmeye başladım. Veri Yapıları ve Algortimalar, Veritabanı Yönetim Sistemleri gibi dersleri alarak daha kaliteli kod yazma ve daha performanslı veri tabanı yapıları tasarlamayı öğrendim. Verilen projeler ile kendimi geliştirmeye devam ediyorum.'
            },
            {
                'id': 2,
                'title': 'Gelenbevi Anadolu Lisesi',
                'time': '2013 - 2017',
                'description': 'Yazılıma olan ilgim burada başladı. C++ ile ilgili kendi çapımda internetten bir şeyler öğrenmeye çalışıyordum.'
            }
        ];
        localStorage.setItem('educationInformation', JSON.stringify(educationInformation));
    }

    if(localStorage.getItem('softwareLanguage') == null) { 
        // set software language datas
        softwareLanguage = [
            {
                'title': 'HTML5',
                'percentage': '90',
            },
            {
                'title': 'CSS3',
                'percentage': '80',
            },
            {
                'title': 'JAVASCRIPT',
                'percentage': '75',
            },
            {
                'title': 'PHP',
                'percentage': '75',
            },
            {
                'title': 'NODE.JS',
                'percentage': '90',
            },
            {
                'title': 'C++',
                'percentage': '60',
            },
        ];
        localStorage.setItem('softwareLanguage', JSON.stringify(softwareLanguage));    
    }

    if(localStorage.getItem('libraryFramework') == null) {
        // set software language datas
        libraryFramework = [
            {
                'title': 'BOOTSTRAP',
                'percentage': '90',
            },
            {
                'title': 'JQUERY',
                'percentage': '70',
            },
            {
                'title': 'ANGULAR.JS',
                'percentage': '60',
            },
            {
                'title': 'REACT.JS',
                'percentage': '70',
            },
            {
                'title': 'LARAVEL FRAMEWORK',
                'percentage': '80',
            },
            {
                'title': 'EXPRESS.JS',
                'percentage': '80',
            },
        ];
        localStorage.setItem('libraryFramework', JSON.stringify(libraryFramework));
    }
    
}

function getDataFromLocalStorage() {
    // get about text
    document.getElementById('about').innerHTML = localStorage.getItem('about');

    // get more information datas
    moreInformation = JSON.parse(localStorage.getItem('moreInformation'));
    document.getElementById('age').innerHTML = moreInformation.age;
    document.getElementById('email').innerHTML = moreInformation.email;
    document.getElementById('address').innerHTML = moreInformation.address;
    document.getElementById('language').innerHTML = moreInformation.language;

    // get work experience datas
    workExperience = JSON.parse(localStorage.getItem('workExperience'));
    workExperience.forEach(element => {
        document.getElementById('work-experience').innerHTML += `
            <li data-item="${element.id}">
                <h3 class="line-title work-title">${element.title}</h3>
                <span class="work-time">${element.time}</span>
                <p class="little-text work-description">${element.description}</p>
            </li>
        `;
    });

    // get education information datas
    educationInformation = JSON.parse(localStorage.getItem('educationInformation'));
    educationInformation.forEach(element => {
        document.getElementById('education-information').innerHTML += `
            <li data-item="${element.id}">
                <h3 class="line-title education-title">${element.title}</h3>
                <span class="education-time">${element.time}</span>
                <p class="little-text education-description">${element.description}</p>
            </li>
        `;
    });

    // get software language datas
    softwareLanguage = JSON.parse(localStorage.getItem('softwareLanguage'));
    softwareLanguage.forEach(element => {
        document.getElementById('software-language').innerHTML += `
            <li> 
                <h3>${element.title}</h3>
                <div class="progress">
                    <div class="percentage" style="width:${element.percentage}%;"></div>
                </div>
            </li>
        `;
    });

    // get library framework datas
    libraryFramework = JSON.parse(localStorage.getItem('libraryFramework'));
    libraryFramework.forEach(element => {
        document.getElementById('library-framework').innerHTML += `
            <li> 
                <h3>${element.title}</h3>
                <div class="progress">
                    <div class="percentage" style="width:${element.percentage}%;"></div>
                </div>
            </li>
        `;
    });
}

function editableToActive() {
    alert("Bilgiler güncellenebilir hale gelmiştir. Güncellemek istediğiniz alanın üzerine tıklayarak güncelleme yapabilirsiniz.");

    document.getElementById('about').contentEditable = true;
    setAbout();
    
    document.getElementById('age').contentEditable = true;
    document.getElementById('email').contentEditable = true;
    document.getElementById('address').contentEditable = true;
    document.getElementById('language').contentEditable = true;
    setAge();
    setEmail();
    setAdress();
    setLanguage();
    
    workTitle = document.getElementsByClassName('work-title');
    workTime = document.getElementsByClassName('work-time');
    workDescription = document.getElementsByClassName('work-description');
    editableElement(workTitle);
    editableElement(workTime);
    editableElement(workDescription);
    setWorkTitle(workTitle);
    setWorkTime(workTime);
    setWorkDescription(workDescription);

    educationTitle = document.getElementsByClassName('education-title');
    educationTime = document.getElementsByClassName('education-time');
    educationDescription = document.getElementsByClassName('education-description');
    editableElement(educationTitle);
    editableElement(educationTime);
    editableElement(educationDescription);
    setEducationTitle(educationTitle);
    setEducationTime(educationTime);
    setEducationDescription(educationDescription);
    
    softwareAndLaguage = document.getElementById('software-language');
    libraryAndFramework = document.getElementById('library-framework');
}

function setAbout() {
    document.getElementById('about').addEventListener('input', function(){
        about = this.innerText;
        localStorage.setItem('about', about);
    });    
}
function setAge() {
    document.getElementById('age').addEventListener('input', function(){
        moreInformation = JSON.parse(localStorage.getItem('moreInformation'));
        moreInformation.age = this.innerText;
        localStorage.setItem('moreInformation', JSON.stringify(moreInformation));
    });    
}
function setEmail() {
    document.getElementById('email').addEventListener('input', function(){
        moreInformation = JSON.parse(localStorage.getItem('moreInformation'));
        moreInformation.email = this.innerText;
        localStorage.setItem('moreInformation', JSON.stringify(moreInformation));
    });    
}
function setAdress() {
    document.getElementById('address').addEventListener('input', function(){
        moreInformation = JSON.parse(localStorage.getItem('moreInformation'));
        moreInformation.address = this.innerText;
        localStorage.setItem('moreInformation', JSON.stringify(moreInformation));
    });    
}
function setLanguage() {
    document.getElementById('language').addEventListener('input', function(){
        moreInformation = JSON.parse(localStorage.getItem('moreInformation'));
        moreInformation.language = this.innerText;
        localStorage.setItem('moreInformation', JSON.stringify(moreInformation));
    });    
}

function setWorkTitle(workTitle) {
    for (let item of workTitle) {
        item.addEventListener('input', function(){
            workExperienceID = this.parentElement.getAttribute('data-item');
            workExperience = JSON.parse(localStorage.getItem('workExperience'));

            index = workExperience.findIndex(item => item.id == workExperienceID);
            workExperience[index].title = this.innerText;

            localStorage.setItem('workExperience', JSON.stringify(workExperience));
        });
    }   
}
function setWorkTime(workTime) {
    for (let item of workTime) {
        item.addEventListener('input', function(){
            workExperienceID = this.parentElement.getAttribute('data-item');
            workExperience = JSON.parse(localStorage.getItem('workExperience'));

            index = workExperience.findIndex(item => item.id == workExperienceID);
            workExperience[index].time = this.innerText;

            localStorage.setItem('workExperience', JSON.stringify(workExperience));
        });
    }   
}
function setWorkDescription(workDescription) {
    for (let item of workDescription) {
        item.addEventListener('input', function(){
            workExperienceID = this.parentElement.getAttribute('data-item');
            workExperience = JSON.parse(localStorage.getItem('workExperience'));

            index = workExperience.findIndex(item => item.id == workExperienceID);
            workExperience[index].description = this.innerText;

            localStorage.setItem('workExperience', JSON.stringify(workExperience));
        });
    }   
}

function setEducationTitle(educationTitle) {
    for (let item of educationTitle) {
        item.addEventListener('input', function(){
            educationInformationID = this.parentElement.getAttribute('data-item');
            educationInformation = JSON.parse(localStorage.getItem('educationInformation'));

            index = educationInformation.findIndex(item => item.id == educationInformationID);
            educationInformation[index].title = this.innerText;

            localStorage.setItem('educationInformation', JSON.stringify(educationInformation));
        });
    }   
}
function setEducationTime(educationTime) {
    for (let item of educationTime) {
        item.addEventListener('input', function(){
            educationInformationID = this.parentElement.getAttribute('data-item');
            educationInformation = JSON.parse(localStorage.getItem('educationInformation'));

            index = educationInformation.findIndex(item => item.id == educationInformationID);
            educationInformation[index].time = this.innerText;

            localStorage.setItem('educationInformation', JSON.stringify(educationInformation));
        });
    }   
}
function setEducationDescription(educationDescription) {
    for (let item of educationDescription) {
        item.addEventListener('input', function(){
            educationInformationID = this.parentElement.getAttribute('data-item');
            educationInformation = JSON.parse(localStorage.getItem('educationInformation'));

            index = educationInformation.findIndex(item => item.id == educationInformationID);
            educationInformation[index].description = this.innerText;

            localStorage.setItem('educationInformation', JSON.stringify(educationInformation));
        });
    }   
}

function editableElement(element) {
    for (let item of element) {
        item.contentEditable = true;
    }
}
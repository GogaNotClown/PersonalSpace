const translations = {
    en: {
        title: 'GogaNotClown | rofl',
        main_title: 'GogaNotClown',
    },
    ru: {
        title: 'ГогаНеКлоун | рофл',
        main_title: 'ГогаНеКлоун',
    }
};

function updateContent(lang) {
    document.title = translations[lang].title;
    const h1Element = document.querySelector('h1');
    h1Element.innerText = translations[lang].main_title;
}

function toggleLanguage() {
    const htmlElement = document.documentElement;
    const currentLang = htmlElement.getAttribute('lang');
    const newLang = currentLang === 'en' ? 'ru' : 'en';
    htmlElement.setAttribute('lang', newLang);
    updateContent(newLang);
    localStorage.setItem('selectedLanguage', newLang);
}

document.addEventListener('DOMContentLoaded', function () {
    const savedLang = localStorage.getItem('selectedLanguage');
    if (savedLang) {
        const htmlElement = document.documentElement;
        htmlElement.setAttribute('lang', savedLang);
        updateContent(savedLang);
    }
});
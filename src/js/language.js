const translations = {
    en: {
        title: 'GogaNotClown | rofl',
        main_title: 'GogaNotClown',
        toast_lang_title: 'The language has been changed',
        toast_theme_title: 'The theme has been changed',
        custom_modal_title: 'Welcome!',
        custom_modal_desc: 'Thank you for downloading this project and I hope you have already put a star on the repository ❤️',
        custom_modal_button: 'Close',
        custom_github_tip: 'Github Profile',
        custom_spotify_tip: 'Spotify PlayList',
        custom_steam_tip: 'Steam Profile',
    },
    ru: {
        title: 'ГогаНеКлоун | рофл',
        main_title: 'ГогаНеКлоун',
        toast_lang_title: 'Язык был изменен',
        toast_theme_title: 'Тема была изменена',
        custom_modal_title: 'Добро пожаловать!',
        custom_modal_desc: 'Спасибо за то, что скачали этот проект и надеюсь вы уже поставили звезду на репозиторий ❤️',
        custom_modal_button: 'Закрыть',
        custom_github_tip: 'Профиль Github',
        custom_spotify_tip: 'Плейлист Spotify',
        custom_steam_tip: 'Профиль Steam',
    }
};

function updateContent(lang) {
    document.title = translations[lang].title;

    const main_title = document.querySelector('h1');
    main_title.innerText = translations[lang].main_title;

    const toast_lang_title = document.querySelector('#toast_lang_title');
    toast_lang_title.innerText = translations[lang].toast_lang_title;

    const toast_theme_title = document.querySelector('#toast_theme_title');
    toast_theme_title.innerText = translations[lang].toast_theme_title;

    const custom_modal_title = document.querySelector('#custom_modal_title');
    custom_modal_title.innerText = translations[lang].custom_modal_title;

    const custom_modal_desc = document.querySelector('#custom_modal_desc');
    custom_modal_desc.innerText = translations[lang].custom_modal_desc;

    const custom_modal_button = document.querySelector('#custom_modal_button');
    custom_modal_button.innerText = translations[lang].custom_modal_button;

    const githubTip = document.querySelector('.custom-github');
    const spotifyTip = document.querySelector('.custom-spotify');
    const steamTip = document.querySelector('.custom-steam');

    githubTip.setAttribute('data-tip', translations[lang].custom_github_tip);
    spotifyTip.setAttribute('data-tip', translations[lang].custom_spotify_tip);
    steamTip.setAttribute('data-tip', translations[lang].custom_steam_tip);
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

function showToast(elementId) {
    const toastElement = document.getElementById(elementId);
    toastElement.classList.remove('hidden');
    setTimeout(() => {
        toastElement.classList.add('hidden');
    }, 2250);
}